import React from "react";

export async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init)
    return res.json()
}

// export const fetcherPost = async ({
//                                       url,
//                                       payload = undefined
//                                   }) => {
//     const options = {
//         method: payload ? "POST" : "GET",
//         ...(payload && {body: payload}),
//         headers: {
//             accept: "application/json",
//             "Content-Type": "application/json",
//         },
//     };
//
//     return fetch(url, options).then(r => r.json());
// };

export function parseQueryParam(v: string[]|string|undefined)  {
    if (v === undefined) {
        return ''
    } else if (typeof v == "string") {
        return v
    } else {
        return v.join(',')
    }
}

export function formatFloat(f: number) {
    const s = f.toFixed(2)
    if (s.endsWith('.00')) {
        return s.substr(0, s.length - 3)
    } else if (s.endsWith('0')) {
        return s.substr(0, s.length - 1)
    } else {
        return s
    }
}

export function formatPercent(f: number) {
    let s = (f*100).toFixed(2)
    let x = ''
    if (s.endsWith('.00')) {
        x = s.substr(0, s.length - 3)
    } else if (s.endsWith('0')) {
        x = s.substr(0, s.length - 1)
    } else {
        x = s
    }
    return x+'%'
}

export function formatLargeNumber(f: number) {
    if (f > 1000000) {
        return formatFloat(f / 1000000) + "m"
    } else if (f > 1000) {
        return formatFloat(f / 1000) + "k"
    } else {
        return formatFloat(f)
    }
}

export function formatMonthDay(x: number) {
    if (x < 10) {
        return '0' + x.toString()
    }
    return x.toString()
}

export function parseJenkinsId(jenkins_link: string) {
    if (isNullString(jenkins_link)) {
        return null
    }
    try {
        const sps = jenkins_link.split('/')
        const stIdx = sps.indexOf('job')
        return (sps.slice(stIdx + 1, sps.length)).join('/')
    } catch (e) {
        console.log(e)
        return null
    }
}

export function isNullString(str: string|undefined|null) {
    if (str === undefined || str === null || str === '') {
        return true
    }
    return false
}

export function capitalizeStr(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function keyToString(key: React.Key) {
    if (typeof key=="number") {
        return key.toString()
    } else {
        return key
    }
}