import { setStarted, resetCurrentArray, addCurrentIndex, addSwapIndex, resetSwapArray, addSortedIndex, newArray } from "../../actions";

export const swap = (array, i, j) => {
    const k = array[i];
    array[i] = array[j];
    array[j] = k;
};

export const printArray = (actionsArray, dispatch, array) => {
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
