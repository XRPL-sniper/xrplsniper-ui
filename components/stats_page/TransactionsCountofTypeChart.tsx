import {FunctionComponent, useState} from 'react'
// import {useTheme} from 'next-themes'
// import dayjs from 'dayjs'
import {
    AreaChart,
    Area,
    // Cell,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    // CartesianGrid,
    // BarChart,
    // Bar,
    // ReferenceLine,
} from 'recharts'
import useDimensions from 'react-cool-dimensions'
import {useTheme} from "next-themes";
// import dayjs from "dayjs";
// import {numberCompactFormatter} from 'utils'

// interface ChartProps {
//     data: any
//     daysRange?: number
//     hideRangeFilters?: boolean
//     title?: string
//     xAxis: string
//     yAxis: string
//     yAxisWidth?: number
//     type: string
//     labelFormat: (x) => ReactNode
//     tickFormat?: (x) => any
//     showAll?: boolean
//     titleValue?: number
//     useMulticoloredBars?: boolean
//     zeroLine?: boolean
//     loading?: boolean
// }

interface TransactionsOfType {
    title: string
    data: any
    loading?: boolean
    daysRange?: number
}

const TransactionsCountofTypeChart: FunctionComponent<TransactionsOfType> = (
    {
        title,
        data,
        loading,
        daysRange
    }) => {
    // const [mouseData, setMouseData] = useState<string | null>(null)
    const [daysToShow, setDaysToShow] = useState(daysRange || 30)
    const {observe, width, height} = useDimensions()
    const {theme} = useTheme()

    console.log(data)

    // const handleMouseMove = (coords) => {
    //     if (coords.activePayload) {
    //         setMouseData(coords.activePayload[0].payload)
    //     }
    // }

    // const handleMouseLeave = () => {
    //     setMouseData(null)
    // }

    const handleDaysToShow = (time) => {
        const startFrom = time
            ? new Date(Date.now() - time * 24 * 60 * 60 * 1000).getTime()
            : null

        return startFrom
            ? data.filter((d) => new Date(d.date).getTime() > startFrom)
            : data
    }

    // const formatDateAxis = (date) => {
    //     if (daysToShow === 1) {
    //         return dayjs(date).format('h:mma')
    //     } else {
    //         return dayjs(date).format('D MMM')
    //     }
    // }

    return (
        <div className="h-52 w-full" ref={observe}>
            {data && data.length > 0 ? (
                <>
                    <div className="flex w-full items-start justify-between pb-6">
                        <div className="pl-2">
                            <div className="pb-0.5 text-xs text-th-fgd-3">{title}</div>

                            <>
                                <div className="pb-1 text-xl font-bold text-th-fgd-1">
                                    xyz
                                </div>
                                <div className="text-xs font-normal text-th-fgd-4">
                                    xyz2
                                </div>
                            </>
                        </div>
                        <div className="flex h-5">
                            <button
                                className={`default-transition mx-3 text-xs font-bold text-th-fgd-1 focus:outline-none md:hover:text-th-primary ${
                                    daysToShow === 1 && 'text-th-primary'
                                }`}
                                onClick={() => setDaysToShow(1)}
                            >
                                24H
                            </button>
                            <button
                                className={`default-transition mx-3 text-xs font-bold text-th-fgd-1 focus:outline-none md:hover:text-th-primary ${
                                    daysToShow === 7 && 'text-th-primary'
                                }`}
                                onClick={() => setDaysToShow(7)}
                            >
                                7D
                            </button>
                            <button
                                className={`default-transition ml-3 text-xs font-bold text-th-fgd-1 focus:outline-none md:hover:text-th-primary ${
                                    daysToShow === 30 && 'text-th-primary'
                                }`}
                                onClick={() => setDaysToShow(30)}
                            >
                                30D
                            </button>
                            <button
                                className={`default-transition ml-3 text-xs font-bold text-th-fgd-1 focus:outline-none md:hover:text-th-primary ${
                                    daysToShow === 1000 && 'text-th-primary'
                                }`}
                                onClick={() => setDaysToShow(1000)}
                            >
                                All
                            </button>
                        </div>
                    </div>
                    <AreaChart
                        width={width}
                        height={height}
                        // data={data}
                        data={data ? handleDaysToShow(daysToShow) : null}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorMint" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF0000" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#FF0000" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorBurn" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF7F00" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#FF7F00" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8B00FF" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8B00FF" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Legend
                            verticalAlign="top"
                        />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            dy={10}
                            tick={{
                                fontSize: 10,
                            }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fontSize: 10,
                            }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: theme === 'Light' ? 'white' : 'black',
                                borderStyle: 'none',
                            }}
                        />
                        <Area type="monotone" dataKey="mint" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
                        <Area type="monotone" dataKey="burn" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
                    </AreaChart>
                </>
            ) : loading ? (
                <>
                    <div className="mt-1 h-8 w-48 animate-pulse rounded bg-th-bkg-3"/>
                    <div className="mt-1 h-4 w-24 animate-pulse rounded bg-th-bkg-3"/>
                </>
            ) : (
                <div className="flex h-full w-full items-center justify-center">
                    <p className="mb-0">Chart not available</p>
                </div>
            )}
        </div>
    )
}

export default TransactionsCountofTypeChart
