//reducer for changing the state of countValue, takes the state cariable and action from action creator as parameter
const reducer = (state=0, action) => {
    if(action.type === 'increase') {
        return state +  action.payload;
    }
    else if(action.type === 'decrease') {
        return state - action.payload
    }
    else {
        return state;
    }

}

export default reducer;