import * as actionType from "./action";

const fetchReq=()=>{
    return {
        type:actionType.FETCH_REQ
    }
}

const fetchSuc=(user)=>{
    return{
        type:actionType.FETCH_SUC,
        payload:user,
    }
}

const fetchFail=(err)=>{
    return {
        type:actionType.FETCH_FAIL,
        payload:err,
    }
}