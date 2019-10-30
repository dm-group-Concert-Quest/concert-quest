import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
    userReducer,
    postReducer
});

export default createStore(rootReducer, applyMiddleware(promise));