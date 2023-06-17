import {createStore, combineReducers, applyMiddleware} from 'redux'
import {storeProductsReducer, suggestionsProductsReducer} from './reducers'
import thunk from "redux-thunk";

const reducers ={storeProductsReducer,suggestionsProductsReducer}
const rootReducer = combineReducers(reducers)
export const configureStore = () => createStore(rootReducer,applyMiddleware(thunk))