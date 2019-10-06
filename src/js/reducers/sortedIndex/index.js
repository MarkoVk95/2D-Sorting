const sortedIndex = (state = [], action) => {
    switch (action.type) {
        case "ADD_INDEX":
            return state.concat(action.indexArray);
        case "RESET_SORTED_ARRAY":
            return [];
        default:
            return state;
    }
}

export default sortedIndex;