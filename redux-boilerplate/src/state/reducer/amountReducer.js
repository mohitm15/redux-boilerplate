//reducer for changing the state of amount, takes the state cariable and action from action creator as parameter
const reducer = (state=0, action) => {
    if(action.type === 'deposit') {
        return state +  action.payload;
    }
    else if(action.type === 'withdraw') {
        return state - action.payload
    }
    else {
        return state;
    }

}

export default reducer;