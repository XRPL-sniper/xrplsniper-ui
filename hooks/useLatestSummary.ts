import useSWR from 'swr'
import {fetcher} from "utils/utils";
import {api_host} from "utils/consts";
import {LatestSummary, LatestSummaryResponse} from "../@types/xrplsniper";

export default function useLatestSummary () {
    const { data, error } = useSWR<LatestSummaryResponse>(
        `${api_host}/api/summary/all`,
        fetcher
    )

    let summary: LatestSummary|undefined = undefined
    if (data !== undefined && data.stat !== undefined) {
        summary = data.stat
    }

    return {
        summary,
        isLogLoading: !error && !data,
        isLogError: error
    }
}
