const array = (state = [], action) => {

    switch (action.type) {
        case "NEW_ARRAY":
            return action.array
        default:
            return state
    }
}

export default array