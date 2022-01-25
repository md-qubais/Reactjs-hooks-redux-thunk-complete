const initialState={
    bats:50,
}

const batReducer=(state=initialState,action)=>{
    if(action.type==="BUY_BAT"){
        return{
            ...state,
            bats:state.bats-1,
        }
    }
    return state;
}

export default batReducer;