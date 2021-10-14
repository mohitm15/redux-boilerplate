const reducer = (state= 'OFF', action) => {
    if(action.type === 'darkmode') {
        state = action.payload;
    }
    else if(action.type === 'lightmode') {
        state = action.payload;
    }
    return state;
}

export default reducer;