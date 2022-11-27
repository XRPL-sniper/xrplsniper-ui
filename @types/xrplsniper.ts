
export interface LatestSummary {
    xrpl_latest_1h_cnt: number
    xrpl_latest_24h_cnt: number
    xrpl_latest_7d_cnt: number
    xrpl_latest_30d_cnt: number
    xrpl_latest_1h_volumn: number
    xrpl_latest_24h_volumn: number
    xrpl_latest_7d_volumn: number
    xrpl_latest_30d_volumn: number
}


export interface LatestSummaryResponse {
    errcode: number
    errmsg: string
    stat: LatestSummary
}
