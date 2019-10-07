import { swap, printArray } from '../utilities'
export const bubbleSort = (toSortArray, dispatch) => {
    let i = 0,
        array = [...toSortArray],
        actionsArray = [];
    for (; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            actionsArray.push(["currentIndex", [j, j + 1]]); //color current ORANGE {j, j+1}
            if (array[j] > array[j + 1]) {
                actionsArray.push(["swapIndex", [j, j + 1]]); //COLOR PURPLE SWAPPERS {j ,j +1}
                swap(array, j, j + 1);
                actionsArray.push(["setArray", [...array]]);     //SWAP SWAPPERS
                actionsArray.push(["resetSwapArray"]); //COLOR SWAPPERS BACK TO ORANGE
            }
        }
        actionsArray.push(["addToSorted", [array.length - i - 1]]); //COLOR SORTED ELEMENT TO RED
    }
    console.log(actionsArray);
    printArray(actionsArray, dispatch, array);
}


