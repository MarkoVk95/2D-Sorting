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