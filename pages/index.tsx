import {useEffect, useState} from 'react'
import StatsTotals from 'components/stats_page/StatsTotals'
import Swipeable from 'components/mobile/Swipeable'
import SwipeableTabs from 'components/mobile/SwipeableTabs'
import Tabs from 'components/Tabs'
import {useViewport} from 'hooks/useViewport'
import {breakpoints} from '../utils/consts'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import useLocalStorageState from 'hooks/useLocalStorageState'
import dayjs from 'dayjs'
import useSummaryStats from "../hooks/useSummaryStats";

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'delegate',
                'profile',
            ])),
        },
    }
}

export default function IndexPage() {
    const {t} = useTranslation('common')
    const TABS = ['Totals', 'Assets', 'Perps']
    const {latestSummary, loadSummary} = useSummaryStats()
    const [viewIndex, setViewIndex] = useState(0)
    const [activeTab, setActiveTab] = useState(TABS[0])
    const {width} = useViewport()
    const isMobile = width ? width < breakpoints.sm : false
    const [savedLanguage] = useLocalStorageState('language', '')

    useEffect(() => {
        dayjs.locale(savedLanguage == 'zh_tw' ? 'zh-tw' : savedLanguage)
    })

    const handleChangeViewIndex = (index) => {
        setViewIndex(index)
    }

    const handleTabChange = (tabName) => {
        setActiveTab(tabName)
    }

    return (
        <div className="pt-6">
            <div className="pb-4">
                <h1>{t('stats')}</h1>
            </div>
            {!isMobile ? (
                <Tabs activeTab={activeTab} onChange={handleTabChange} tabs={TABS}/>
            ) : (
                <SwipeableTabs
                    onChange={handleChangeViewIndex}
                    items={TABS}
                    tabIndex={viewIndex}
                    width="w-full"
                />
            )}
            {!isMobile ? (
                <TabContent
                    loadSummary={loadSummary}
                    latestSummary={latestSummary}
                    activeTab={activeTab}
                    // latestStats={latestStats}
                    // perpStats={perpStats}
                    // stats={stats}
                    // loadHistoricalStats={loadHistoricalStats}
                    // loadPerpStats={loadPerpStats}
                    // loadLatestStats={loadLatestStats}
                />
            ) : (
                <Swipeable index={viewIndex} onChangeIndex={handleChangeViewIndex}>
                    <StatsTotals
                        loadSummary={loadSummary}
                        latestSummary={latestSummary}
                        // latestStats={latestStats}
                        // stats={stats}
                        // loadHistoricalStats={loadHistoricalStats}
                        // loadLatestStats={loadLatestStats}
                    />
                    <StatsTotals
                        loadSummary={loadSummary}
                        latestSummary={latestSummary}
                        // latestStats={latestStats}
                        // stats={stats}
                        // loadHistoricalStats={loadHistoricalStats}
                        // loadLatestStats={loadLatestStats}
                    />
                    <StatsTotals
                        loadSummary={loadSummary}
                        latestSummary={latestSummary}
                        // latestStats={latestStats}
                        // stats={stats}
                        // loadHistoricalStats={loadHistoricalStats}
                        // loadLatestStats={loadLatestStats}
                    />

                    {/*<StatsTotals*/}
                    {/*    loadSummary={loadSummary}*/}
                    {/*    latestSummary={latestSummary}*/}
                    {/*    latestStats={null}*/}
                    {/*    stats={null}*/}
                    {/*    loadHistoricalStats={null}*/}
                    {/*    loadLatestStats={}*/}
                    {/*/>*/}
                    {/*<StatsAssets*/}
                    {/*    latestStats={latestStats}*/}
                    {/*    stats={stats}*/}
                    {/*    loadHistoricalStats={loadHistoricalStats}*/}
                    {/*/>*/}
                    {/*<StatsPerps perpStats={perpStats} loadPerpStats={loadPerpStats}/>*/}
                </Swipeable>
            )}
        </div>
    )
}

const TabContent = ({
                        activeTab,
                        // latestStats,
                        // perpStats,
                        // stats,
                        // loadHistoricalStats,
                        // loadPerpStats,
                        // loadLatestStats,
                        latestSummary,
                        loadSummary
                    }) => {
    switch (activeTab) {
        case 'Totals':
            return (

                <StatsTotals
                    loadSummary={loadSummary}
                    latestSummary={latestSummary}
                    // latestStats={latestStats}
                    // stats={stats}
                    // loadHistoricalStats={loadHistoricalStats}
                    // loadLatestStats={loadLatestStats}
                />
                // <StatsTotals
                //     loadSummary={loadSummary}
                //     latestSummary={latestSummary}
                //     latestStats={latestStats}
                //     stats={stats}
                //     loadHistoricalStats={loadHistoricalStats}
                //     loadLatestStats={loadLatestStats}
                // />
            )
        case 'Assets':
            return (
                <StatsTotals
                    loadSummary={loadSummary}
                    latestSummary={latestSummary}
                    // latestStats={latestStats}
                    // stats={stats}
                    // loadHistoricalStats={loadHistoricalStats}
                    // loadLatestStats={loadLatestStats}
                />

                // <StatsAssets
                //     latestStats={latestStats}
                //     stats={stats}
                //     loadHistoricalStats={loadHistoricalStats}
                // />
            )
        case 'Perps':
            return (
                <StatsTotals
                    loadSummary={loadSummary}
                    latestSummary={latestSummary}
                    // latestStats={latestStats}
                    // stats={stats}
                    // loadHistoricalStats={loadHistoricalStats}
                    // loadLatestStats={loadLatestStats}
                />

            )
            // return <StatsPerps perpStats={perpStats} loadPerpStats={loadPerpStats}/>
        default:
            return (
                <StatsTotals
                    loadSummary={loadSummary}
                    latestSummary={latestSummary}
                    // latestStats={latestStats}
                    // stats={stats}
                    // loadHistoricalStats={loadHistoricalStats}
                    // loadLatestStats={loadLatestStats}
                />
            )
            // return (
            //     <StatsTotals
            //         loadSummary={loadSummary}
            //         latestSummary={latestSummary}
            //         latestStats={latestStats}
            //         stats={stats}
            //         loadHistoricalStats={loadHistoricalStats}
            //         loadLatestStats={loadLatestStats}
            //     />
            // )
    }
}
