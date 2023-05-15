import { combineReducers } from 'redux'

import { popReducer } from './reducers/pop.reducer'

export const rootReducer = combineReducers({
    popModule: popReducer
})



