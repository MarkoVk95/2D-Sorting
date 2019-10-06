const swapIndex = (state = [], action) => {
    switch (action.type) {
        case "ADD_SWAP_INDEX":
            return state.concat(action.indexArray);
        case "RESET_SWAP":
            return [];
        default:
            return state;
    }
}

export default swapIndex;