import { createLogicMiddleware } from 'redux-logic';
import { applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actions from '../actions/index';
import reducers from '../reducers/index';

const logicMiddleware = createLogicMiddleware(actions);
const configureStore=createStore(reducers,composeWithDevTools(applyMiddleware(logicMiddleware)));

export default configureStore;