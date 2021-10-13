import { combineReducers } from "redux";
import amountReducer from './amountReducer';
//import anotherReducer from './anotherReducer';


//combinnig all the reducers here
const reducer = combineReducers({
    amount: amountReducer
    //another: anotherReducer
})

export default reducer;     