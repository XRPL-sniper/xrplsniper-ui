import { useEffect, useState } from 'react'

const useSummaryStats = () => {
    const [latestSummary, setLatestSummary] = useState([
        {
            id: 0,
            ts: 0,
            date: '',
            time_type: '',
            mint: 0,
            create_offer: 0,
            accept_offer: 0,
            cancel_offer: 0,
            burn: 0
        }
    ])
    const [loadSummary, setLoadSummary] = useState<boolean>(false)

    useEffect(()=> {
        const fetchSummary = async () => {
            setLoadSummary(true)
            try {
                const response = await fetch(
                    'https://api.xrplsniper.xyz/api/transactions/history/stat'
                )
                const stats = await response.json()
                console.log(stats)
                setLatestSummary(stats['summary'])
                setLoadSummary(false)
            } catch {
                setLoadSummary(false)
            }
        }
        fetchSummary()
    }, [])

    return {
        loadSummary,
        latestSummary,
    }
}

export default useSummaryStats
