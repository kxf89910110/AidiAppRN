import XgHttp from './xgHttp';

export default {
    regisTry: urlPar => XgHttp("POST", "baseinfo/registry", { urlParams: urlPar }),
    enlist: () => XgHttp("GET", "enlist.json", {}),
    doctorList: () => XgHttp("GET", "doctorList", {})
};