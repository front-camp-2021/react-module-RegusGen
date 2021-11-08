import {applyMiddleware, createStore} from "redux";
import reducer, {initialState} from "./reducers";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk)

const store = createStore(reducer, initialState, middleware)

export default store