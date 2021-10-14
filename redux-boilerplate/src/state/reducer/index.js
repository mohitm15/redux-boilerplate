import { combineReducers } from "redux";
import amountReducer from './amountReducer';
import darkmodeReducer from './darkmodeReducer';
//import anotherReducer from './anotherReducer';


//combinnig all the reducers here
const reducer = combineReducers({
    amount: amountReducer,
    darkmode: darkmodeReducer
    //another: anotherReducer
})

export default reducer;     