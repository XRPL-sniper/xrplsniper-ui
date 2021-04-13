import { useCallback, useState, useEffect, useRef } from 'react'
import { isDefined } from '../utils'
import useMangoStore from '../stores/useMangoStore'
import useSerumStore from '../stores/useSerumStore'
import useMarket from './useMarket'
import useInterval from './useInterval'

const byTimestamp = (a, b) => {
  return (
    new Date(b.loadTimestamp).getTime() - new Date(a.loadTimestamp).getTime()
  )
}

const formatTradeHistory = (newTradeHistory) => {
  return newTradeHistory
    .flat()
    .map((trade) => {
      return {
        ...trade,
        marketName: trade.marketName
          ? trade.marketName
          : `${trade.baseCurrency}/${trade.quoteCurrency}`,
        key: `${trade.orderId}${trade.side}${trade.uuid}`,
        liquidity: trade.maker || trade?.eventFlags?.maker ? 'Maker' : 'Taker',
      }
    })
    .sort(byTimestamp)
}

export const usePrevious = (value) => {
  const ref = useRef()
  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current
}

const useFills = () => {
  const fills = useSerumStore((s) => s.fills)
  const { market, marketName } = useMarket()
  const marginAccount = useMangoStore((s) => s.selectedMarginAccount.current)
  const selectedMangoGroup = useMangoStore((s) => s.selectedMangoGroup.current)

  if (!marginAccount || !selectedMangoGroup) return null

  const marketIndex = selectedMangoGroup.getMarketIndex(market)
  const openOrdersAccount = marginAccount.openOrdersAccounts[marketIndex]
  return fills
    .filter((fill) => fill.openOrders.equals(openOrdersAccount.publicKey))
    .map((fill) => ({ ...fill, marketName }))
}

export const useTradeHistory = () => {
  const eventQueueFills = useFills()
  const [tradeHistory, setTradeHistory] = useState<any[]>([])
  const [allTrades, setAllTrades] = useState<any[]>([])
  const marginAccount = useMangoStore((s) => s.selectedMarginAccount.current)

  const fetchTradeHistory = useCallback(async () => {
    console.log('fetching history')

    if (!marginAccount) return
    if (marginAccount.openOrdersAccounts.length === 0) return

    const openOrdersAccounts = marginAccount.openOrdersAccounts.filter(
      isDefined
    )
    const publicKeys = openOrdersAccounts.map((act) => act.publicKey.toString())
    const results = await Promise.all(
      publicKeys.map(async (pk) => {
        const response = await fetch(
          `https://stark-fjord-45757.herokuapp.com/trades/open_orders/${pk.toString()}`
        )

        const parsedResponse = await response.json()
        return parsedResponse?.data ? parsedResponse.data : []
      })
    )
    console.log('results', results)

    setTradeHistory(formatTradeHistory(results))
    setAllTrades(formatTradeHistory(results))
  }, [marginAccount])

  useInterval(() => {
    if (marginAccount && tradeHistory.length === 0) {
      fetchTradeHistory()
    }
  }, 10000)

  useEffect(() => {
    if (eventQueueFills && eventQueueFills.length > 0) {
      const newFills = eventQueueFills.filter(
        (fill) =>
          !tradeHistory.find((t) => t.orderId === fill.orderId.toString())
      )
      const newTradeHistory = [...newFills, ...tradeHistory]
      if (newFills.length > 0 && newTradeHistory.length !== allTrades.length) {
        const formattedTradeHistory = formatTradeHistory(newTradeHistory)

        setAllTrades(formattedTradeHistory)
      }
    }
  }, [tradeHistory, eventQueueFills])

  return { tradeHistory: allTrades }
}

export default useTradeHistory
