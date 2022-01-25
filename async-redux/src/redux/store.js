import { createStore ,applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension/lib/cjs";
import thunk from "redux-thunk"

//compose with dev tools means that the store will be visible to the chrome
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;