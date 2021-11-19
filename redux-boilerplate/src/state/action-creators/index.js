// these are the actions that are interded to make change

export const increaseCount = (countValue) => {
    return (dispatch) => {
        dispatch ({
            type: 'increase',
            payload: countValue
        })
    }
}


export const decreaseCount = (countValue) => {
    return (dispatch) => {
        dispatch ({
            type: 'decrease',
            payload: countValue
        })
    }
}

export const enableDarkMode = (darkMode) => {
    return (dispatch) => {
        dispatch ({
            type:'darkmode',
            payload: darkMode
        })
    }
}

export const enableLightMode = (lightMode) => {
    return (dispatch) => {
        dispatch({
            type:'lightmode',
            payload: lightMode
        })
    }
}