import { all } from 'redux-saga/effects'
import *as TaskToDo from './TakeWeatherSaGa'

export function* rootSaga() {
    yield all([
        TaskToDo.trackingAPI()
    ])
}