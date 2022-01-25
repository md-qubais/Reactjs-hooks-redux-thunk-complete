import ballReducer from "./ballReducer";
import batReducer from "./batReducer";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    bat:batReducer,
    ball:ballReducer
})

export default rootReducer