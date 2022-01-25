import axios from "axios";
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

export const fetchUsers=()=>{
    return async(dispatch)=>{
        dispatch(fetchReq())
        try{
            let res=await axios.get("https://jsonplaceholder.typicode.com/users");
            let data=res.data;
            dispatch(fetchSuc(data))
            
        }catch(err){
            dispatch(fetchFail())
        }
    }
}