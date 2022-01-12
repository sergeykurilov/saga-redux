import {fork, spawn, call, all, delay, take, takeLatest, cancel, actionChannel} from 'redux-saga/effects'
import 'regenerator-runtime/runtime'

export function* fecthPlanets(signal) {
    console.log('LOAD_SOME_DATA starts')

    const response = yield call(fetch,
        'https://swapi.dev/api/planets/1/',
        {signal})
    const data = yield call([response, response.json])

    console.log('LOAD_SOME_DATA completed  ',data)
}

export function* loadOnAction() {
    const channel = yield actionChannel('LOAD_SOME_DATA');
    while (true){
        yield take(channel)
        console.log('LOG')
        yield call(fecthPlanets)
    }
}

export default function* rootSaga () {
    const sagas = [
        // loadBasicData,
        // pageLoadData,
        loadOnAction];

    const retrySagas = sagas.map(saga => {
           return spawn(function* () {
             while (true){
                 try {
                     yield call(saga);
                     break;
                 } catch (e) {
                     console.log(e)
                 }
             }
           })
       })


    yield all(retrySagas)
}