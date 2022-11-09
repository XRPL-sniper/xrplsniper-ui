// 2022-10-07T20:00:00.000Z

export function toUTCString(ts: number)  {
    const date = new Date(ts)
    return date.toUTCString()
}
