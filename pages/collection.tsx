import Overview  from "components/collection_page/overview";
import TimeLineChart from "components/collection_page/timeLineChart";
import TopAndPopular from "components/collection_page/TopAndPopular";
import ValueAndSales from "components/collection_page/ValueAndSales";

function Collection() {
  return <div className="main container mx-auto px-4 py-4 md:px-0 relative">
    <Overview />
    <TimeLineChart />
    <TopAndPopular />
    <ValueAndSales />
  </div>
}

export default Collection;
