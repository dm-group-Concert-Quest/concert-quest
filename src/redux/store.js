import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";
//add other reducers here

const rootReducer = combineReducers({
    userReducer,
    postReducer
    //add imported reducers here
});

export default createStore(rootReducer, applyMiddleware(promise));