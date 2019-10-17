import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import userReducer from "./reducers/userReducer";
//add other reducers here

const rootReducer = combineReducers({
    userReducer
    //add imported reducers here
});

export default createStore(rootReducer, applyMiddleware(promise));