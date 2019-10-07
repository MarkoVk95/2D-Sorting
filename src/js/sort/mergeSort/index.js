import { newArray } from "../../actions";


export const mergeSort = (toSortArray, dispatch) => {
    let helper = [...toSortArray],
        array = [...toSortArray],
        actionsArray = [];
    mergeSortHelper(array, helper, 0, array.length - 1, actionsArray, dispatch);
};

const mergeSortHelper = (array, helper, left, right, actionsArray, dispatch) => {
    if (left < right) {
        const middle = Math.floor((left + right) / 2);
        mergeSortHelper(array, helper, left, middle, actionsArray, dispatch);
        mergeSortHelper(array, helper, middle + 1, right, actionsArray, dispatch);
        merge(array, helper, left, middle, right, actionsArray, dispatch);
        
    }
};

const merge = (array, helper, left, middle, right, actionsArray, dispatch) => {
    actionsArray[0] = [];
    for(let i = left; i <= right; i++)
        helper[i] = array[i];
    let leftSideIndex = left,
        rightSideIndex = middle + 1,
        current = left;
    while(leftSideIndex <= middle && rightSideIndex <= right) {
        if(helper[leftSideIndex] < helper[rightSideIndex]) {
            array[current] = helper[leftSideIndex];
            leftSideIndex++;
        } else {
            array[current] = helper[rightSideIndex];
            rightSideIndex++;
        }
        current++
    }
    while(leftSideIndex <= middle){
        array[current] = helper[leftSideIndex];
        current++;
        leftSideIndex++;
    }
    dispatch(newArray(array));
};