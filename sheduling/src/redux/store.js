import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import mainReducer from '../redux/reducers/index';
import {loginSaga} from './actions/loginAction';


const sagaMiddleware = createSagaMiddleware();
const tool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = tool;
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(mainReducer, middleware);
sagaMiddleware.run(loginSaga);

export default store;