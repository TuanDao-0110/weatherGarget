import { takeEvery } from "redux-saga/effects";
import { call, put, delay } from "redux-saga/effects";
import { DO_IT, GET_API, OFF_LOADING, ON_LOADING } from "../action/action";
import axios from 'axios'

function* getTaskApiAction(action) {

    let nameCity = action.nameCity
    try {
        yield call(renderLoading);
        yield delay(500)
        let { data, status } = yield call(() => {
            return axios({
                url: `HTTPs://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&appid=c2e067a406e2f67ff55edc53d61c2145&units=metric`,
                method: "GET"
            })
        })
        yield delay(500)
     
        yield put({
            type: DO_IT,
            data
        })
        yield call(offLoading)
    } catch (err) {
        alert('Wrong city Name')
        return yield call(offLoading)
    }
}


export function* trackingAPI() {
    yield takeEvery(GET_API, getTaskApiAction)
}


function* renderLoading() {
    try {
        yield put({
            type: ON_LOADING
        })
    }

    catch (err) {

    }
}


function* offLoading() {
    try {
        yield put({
            type: OFF_LOADING
        })
    } catch (err) {

    }
}
