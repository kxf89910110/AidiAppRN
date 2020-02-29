import XgHttp from './xgHttp';

export default {
    regisTry: urlPar => XgHttp("POST", "baseinfo/registry", { urlParams: urlPar }),
    todayOnHistory: urlPar => XgHttp("GET", "/japi/toh", { urlParams: urlPar })
};