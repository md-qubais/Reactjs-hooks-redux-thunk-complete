const initialState={
    balls:50,
}

const ballReducer=(state=initialState,action)=>{
    //if we are passing payload object instead of any value
    //the we must use like this
    //action.payload.qty instead of action.payload
    if(action.type==="BUY_BALL"){
        return{
            ...state,
            balls: state.balls- action.payload,
        }
    }
    if(action.type==="SELL_BALL"){
        return{
            ...state,
            balls:state.balls+action.payload,
        }
    }
    return state;
}

export default ballReducer;