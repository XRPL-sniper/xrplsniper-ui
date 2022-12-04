
export interface SummaryItem {
    cnt: number
    title: string
    volumn: number
}
export interface LatestSummary {
    [props: string]: SummaryItem
}

export interface LatestSummaryResponse {
    errcode: number
    errmsg: string
    stat: LatestSummary
}
