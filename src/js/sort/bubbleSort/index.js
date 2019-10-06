import { setStarted, resetCurrentArray, addCurrentIndex, addSwapIndex, resetSwapArray, addSortedIndex, newArray } from "../../actions";

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

const printArray = (actionsArray, dispatch, array) => {
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
        setTimeout(() => printArray(actionsArray, dispatch, array), 0);
    }
};

const swap = (array, i, j) => {
    const k = array[i];
    array[i] = array[j];
    array[j] = k;
}

