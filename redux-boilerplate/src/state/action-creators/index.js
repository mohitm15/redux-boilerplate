// these are the actions that are interded to make change

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch ({
            type: 'deposit',
            payload: amount
        })
    }
}


export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch ({
            type: 'withdraw',
            payload: amount
        })
    }
}