export const newArray = array => (
    {
        type: "NEW_ARRAY",
        array
    }
);

export const changeAlgorithm = algorithm => (
    {
        type: "CHANGE_ALGORITHM",
        algorithm
    }
);

export const setStarted = started => (
    {
        type: "SET_STARTED",
        started
    }
);

export const addSortedIndex = indexArray => (
    {
        type: "ADD_INDEX",
        indexArray
    }
);

export const resetSortedArray = () => (
    {
        type: "RESET_SORTED_ARRAY"
    }
);

export const addSwapIndex= indexArray => (
    {
        type: "ADD_SWAP_INDEX",
        indexArray
    }
);

export const resetSwapArray = () => (
    {
        type: "RESET_SWAP"
    }
);

export const addCurrentIndex= indexArray => (
    {
        type: "ADD_CURRENT_INDEX",
        indexArray
    }
);

export const resetCurrentArray = () => (
    {
        type: "RESET_CURRENT_ARRAY"
    }
);

export const changeTheme = (theme) => (
    {
        type: "CHANGE_THEME",
        theme
    }
);