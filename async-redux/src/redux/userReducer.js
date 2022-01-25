import {FETCH_REQ,FETCH_SUC,FETCH_FAIL} from "./action"

const initialState={
    loading:false,
    error:"",
    user:[]
}

const userReducer=(state=initialState,action)=>{
    if(action.type==FETCH_FAIL){
        return {
            ...state,
            loading:false,
            error:true,
        }
    }
    if(action.type===FETCH_REQ){
        return {
            ...state,
            loading:true,
            error:false,
        }
    }
    if(action.type===FETCH_SUC){
        return{
            ...state,
            loading:false,
            error:false,
            user:action.payload
        }
    }
    return state;
}

export default userReducer