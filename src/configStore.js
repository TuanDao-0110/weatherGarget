import { applyMiddleware, combineReducers } from "redux";
import createMiddleWareSaga from 'redux-saga'
import { createStore } from "redux";
import Reducer from './redux/reducer/Reducer'
import { rootSaga } from "./redux/saga/rootSaga";

const middleWareSaga = createMiddleWareSaga()
const rootReducer = combineReducers({
    Reducer
})



const store = createStore(rootReducer, applyMiddleware(middleWareSaga));
middleWareSaga.run(rootSaga)

export default store;


