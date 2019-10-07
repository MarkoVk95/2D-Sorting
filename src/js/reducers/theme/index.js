const theme = (state = "white", action) => {

    switch (action.type) {
        case "CHANGE_THEME":
            return action.theme
        default:
            return state
    }
}

export default theme