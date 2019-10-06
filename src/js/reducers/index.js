import { combineReducers } from 'redux'
import array from './array'
import algorithm from './algorithm'
import started from './started'
import currentIndex from './current'
import sortedIndex from './sortedIndex'
import swapIndex from './swap'

export default combineReducers(
    {
        array,
        algorithm,
        started,
        currentIndex,
        sortedIndex,
        swapIndex
    }
)
