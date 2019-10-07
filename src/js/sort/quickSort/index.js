import { swap, printArray } from "../utilities";

export const quickSort = (toSortArray, dispatch) => {
    let array = [...toSortArray],
        actionsArray = [];
    quickSortHelper(array, 0, array.length - 1, actionsArray);
    actionsArray.push(["resetSwapArray"]);
    printArray(actionsArray, dispatch, array);
};

const quickSortHelper = (array, left, right, actionsArray) => {
    console.log("left: " + left + " right: " + right);
    if (left < right) {
        
        const index = partition(array, left, right, actionsArray);
        quickSortHelper(array, left, index - 1, actionsArray);
        quickSortHelper(array, index + 1, right, actionsArray);
    } else actionsArray.push(["addToSorted",[left]]); 
};

const partition = (array, left, right, actionsArray) => {
    actionsArray.push(["resetSwapArray"]);
    
    const pivot = array[right];
    actionsArray.push(["currentIndex", [right]]);
    let i = left - 1;
    for (let j = left; j < right; j++)
        if (array[j] <= pivot) {
            i++;
            actionsArray.push(["swapIndex", [i,j]]);
            swap(array, i, j);
            actionsArray.push(["setArray", [...array]]);
            actionsArray.push(["resetSwapArray"]);
        }
    swap(array, ++i, right);
    actionsArray.push(["swapIndex", [i, right]]);
    actionsArray.push(["addToSorted", [i]]);
    actionsArray.push(["setArray", [...array]]);
    return i;
}