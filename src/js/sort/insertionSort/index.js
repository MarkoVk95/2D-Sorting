import { swap, printArray } from '../utilities';

export const insertionSort = (toSortArray, dispatch) => {
    let array = [...toSortArray],
        actionsArray = [];
    for (let i = 0; i < array.length; i++) {
        let max = i;
        for (let j = i; j < array.length - 1; j++) {
            actionsArray.push(["currentIndex", [i, j]]);
            if (array[j + 1] < array[max])
                max = j + 1;
        }
        swap(array, i, max);
        actionsArray.push(["addToSorted", [i]]);
        actionsArray.push(["setArray", [...array]]);
    }
    printArray(actionsArray, dispatch, array);
};