import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./reducer";

const globalStore = createStore(Reducer, applyMiddleware(thunk));

export default globalStore;
