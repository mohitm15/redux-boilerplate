import { combineReducers } from "redux";
import countValueReducer from './countReducer';
import darkmodeReducer from './darkmodeReducer';
//import anotherReducer from './anotherReducer';


//combinnig all the reducers here
const reducer = combineReducers({
    countValue: countValueReducer,
    darkmode: darkmodeReducer
    //another: anotherReducer
})

export default reducer;     