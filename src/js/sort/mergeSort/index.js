import { setStarted, resetCurrentArray, addCurrentIndex, addSwapIndex, resetSwapArray, addSortedIndex,newArray } from "../../actions";


export const mergeSort = (toSortArray, dispatch) => {
    let helper = [...toSortArray],
        array = [...toSortArray],
        actionsArray = [];
    mergeSortHelper(array, helper, 0, array.length - 1, actionsArray, dispatch);
    printArray(actionsArray, dispatch, array);
};

const mergeSortHelper = (array, helper, left, right, actionsArray) => {
    if (left < right) {
        const middle = Math.floor((left + right) / 2);
        mergeSortHelper(array, helper, left, middle, actionsArray);
        mergeSortHelper(array, helper, middle + 1, right, actionsArray);
        merge(array, helper, left, middle, right, actionsArray);
        
        
    }
};

const merge = (array, helper, left, middle, right, actionsArray) => {
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
        actionsArray.push(["addToSorted", [current]]);
        actionsArray.push(["setArray", [...array]]);
        current++
    }
    while(leftSideIndex <= middle){
        array[current] = helper[leftSideIndex];
        actionsArray.push(["addToSorted", [current]]);
        actionsArray.push(["setArray", [...array]]);
        current++;
        leftSideIndex++;
    }

    //redundant for algorithm but must add right part to visual too
    for(let i = middle+1; i <=right; i++){
        actionsArray.push(["addToSorted", [i]]);
        actionsArray.push(["setArray", [...array]]);
    }
};

const printArray = (actionsArray, dispatch) => {
    if (!actionsArray.length) {
        dispatch(resetCurrentArray());
        dispatch(setStarted(false));
    }
    else {
        const currentAction = actionsArray.shift();
        switch (currentAction[0]) {
            case "currentIndex":
                dispatch(addCurrentIndex(currentAction[1]));
                break;
            case "swapIndex":
                dispatch(addSwapIndex(currentAction[1]));
                break;
            case "resetSwapArray":
                dispatch(resetSwapArray());
                break;
            case "addToSorted":
                dispatch(addSortedIndex(currentAction[1]));
                break;
            case "setArray":
                dispatch(newArray(currentAction[1]));
                break;
            default:
                break;
        }
        setTimeout(() => printArray(actionsArray, dispatch), 0);
    }
};