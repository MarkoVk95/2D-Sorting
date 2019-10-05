const algorithm = (state = [], action) => {

    switch (action.type) {
        case "CHANGE_ALGORITHM":
            return action.algorithm
        default:
            return state
    }
}

export default algorithm