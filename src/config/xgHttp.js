// 服务器host
// const host = "https://www.aidi-sz.com/";
// 本地mock api host
const host = "http://5e5c75d297d2ea00147968ea.mockapi.io/api/v1/";

export default async function (
    method,
    url,
    { bodyParams = {}, urlParams = {} }
) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    // 将url参数写入URL
    let urlParStr = "";
    const urlParArr = Object.keys(urlParams);
    if (urlParArr.length) {
        Object.keys(urlParams).forEach(element => {
            urlParStr += `${element}=${urlParams[element]}&`;
        });
        urlParStr = `?${urlParStr}`.slice(0, -1);
    }

    const res = await fetch(
        new Request(`${host}${url}${urlParStr}`, {
            method,
            headers,
            // 如果是 get 或者 head 方法，不添加请求头部
            body: method === ("GET" || "HEAD") ? null : JSON.stringify(bodyParams)
        })
    );

    if (res.status < 200 || res.status > 299) {
        console.log(`ERROR:${res.status}`);
    } else {
        return res.json();
    }
}