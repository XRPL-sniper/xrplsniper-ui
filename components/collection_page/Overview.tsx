import styles from './Collection.module.css';
import {LatestSummary, SummaryItem} from "../../@types/xrplsniper";
import {FC, useEffect, useState} from "react";


const summary_keys: string[] = ['1H', '24H', '7D', '30D']

interface Props {
    loading: boolean
    summary: LatestSummary | undefined
}


const Overview: FC<Props> = ({
                                 loading,
                                 summary
                             }) => {
    const [items, setItems] = useState<SummaryItem[]>([])

    useEffect(()=> {
        if (!summary) {
            return
        }

        const statItems: SummaryItem[] = []
        summary_keys.map(key=> {
            const value = summary[key]
            statItems.push(value)
        })
        setItems(statItems)
    }, [summary, loading])

    return (
        <div className="overview-container">
            <div className={styles.title}>
                XRPL NFT market overview
            </div>
            <div className="my-4 text-gray-500 dark:text-gray-300">
                <p>
                    The home of XRPL NFTs. Find the top and most popular NFT collections
                    and analyze the current state and growth over time. {loading}
                </p>
            </div>

            <div className="flex items-center justify-items-start gap-2 pb-3 flex-wrap">
                {loading&& (
                    <> TODO: it is loading..</>
                )}

                {items.map(item=> (statItem(item)))}
            </div>

        </div>
    )
}

const statItem = (item: SummaryItem | null) => {

    return (
        <div className='panel p-2 hover:border-gray-900 w-48 bg-gray-900 rounded-xl'>
            <h3 className={styles.panel__title}>
                {item?.title}
            </h3>
            <div className="panel__content p-1">
                <div className='flex items-center justify-between md:block'>
                    <div className='text-th-fgd-3 md:pb-0.5 md:text-[0.65rem]'>sales</div>
                    <div className='text-th-fgd-1 md:text-xs'>{item?.cnt}</div>
                </div>
                <div className='flex items-center justify-between md:block mt-2'>
                    <div className='text-th-fgd-3 md:pb-0.5 md:text-[0.65rem]'> volumn</div>
                    <div className='text-th-fgd-1 md:text-xs'>{item?.volumn} XRP</div>
                </div>
            </div>
        </div>
    )
}

export default Overview;
