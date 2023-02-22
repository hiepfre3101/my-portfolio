import request from "./config";

export const getAdminNav = ()=>{
    return request.get('/navAdmin');
}