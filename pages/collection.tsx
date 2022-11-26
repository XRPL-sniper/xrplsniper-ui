import Overview from "components/collection_page/Overview";
import TimeLineChart from "components/collection_page/TimeLineChart";
import TopAndPopular from "components/collection_page/TopAndPopular";
import ValueAndSales from "components/collection_page/ValueAndSales";
import useLatestSummary from "../hooks/useLatestSummary";

function Collection() {

    const {summary, isLoading} = useLatestSummary()
    return (
        <div className="main container mx-auto px-4 py-4 md:px-0 relative">
            <Overview summary={summary} loading={isLoading}/>
            <TimeLineChart/>
            <TopAndPopular/>
            <ValueAndSales/>
        </div>
    )
}

export default Collection;
