import 'regenerator-runtime'
import {take, takeEvery, takeLatest, put, call, fork, spawn, join, select} from 'redux-saga/effects'

async function swapiGet(pattern) {
    const request = await fetch(`https://swapi.dev/api/${pattern}`)
    const data = await request.json();
    return data;
}

export function* loadPeople() {
    // throw new Error('asdsad')
    const people = yield call(swapiGet, 'people');
    yield put({type: 'SET_PEOPLE', payload: people.results})
    console.log('people')
    return people
}

export function* loadPlanets() {
    const planets = yield call(swapiGet, 'planets');
    yield put({type: 'SET_PLANETS', payload: planets.results})
    console.log('planets')
}


export function* workerSaga() {
    console.log('run parallel')
    yield call(loadPeople)
    yield call(loadPlanets)
    // const people = yield join(task)

    const store = yield select(s => s)

    console.log('finished ', store)
}

export function* watchLoadDataSaga() {
    yield takeEvery('LOAD_DATA', workerSaga)
}

export default function* rootSaga () {
    yield fork(watchLoadDataSaga);
}