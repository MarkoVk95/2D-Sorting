const started = (state = false, action) => {

    switch (action.type) {
        case "SET_STARTED":
            return action.started
        default:
            return state
    }
}

export default started