
import {createStore} from 'redux'
import {reducersRoot} from './reducer'
export const store = createStore(reducersRoot,+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());