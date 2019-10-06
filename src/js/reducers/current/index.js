const currentIndex = (state = [], action) => {
    switch (action.type) {
        case "ADD_CURRENT_INDEX":
            return [].concat(action.indexArray);
        case "RESET_CURRENT_ARRAY":
            return [];
        default:
            return state;
    }
}

export default currentIndex;