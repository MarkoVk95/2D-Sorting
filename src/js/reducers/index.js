import { combineReducers } from 'redux'
import array from './array'
import algorithm from './algorithm'
import started from './started'

export default combineReducers(
    {
        array,
        algorithm,
        started
    }
)
