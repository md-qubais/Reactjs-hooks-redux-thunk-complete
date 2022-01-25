import ballReducer from "./ballReducer";
import batReducer from "./batReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    bat:batReducer,
    ball:ballReducer,
    user:userReducer,
})

export default rootReducer