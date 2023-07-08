import {createStore, combineReducers, applyMiddleware} from 'redux'
import {storeProductsReducer, suggestionsProductsReducer,cartReducer,saveProductsReducer} from './reducers'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers ={storeProductsReducer,suggestionsProductsReducer,cartReducer,saveProductsReducer}
const rootReducer = combineReducers(reducers)
export const configureStore = () => createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))