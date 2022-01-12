import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from "redux";
import reducer, {history} from "./reducers";
import rootSaga from "./sagas";
import {routerMiddleware} from "connected-react-router";
import rootReducer from "./reducers";



const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
        )
    )
);

sagaMiddleware.run(rootSaga);

export default store;