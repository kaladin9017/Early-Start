//REDUX IMPORT
import {combineReducers} from "redux";

//REDUCERS
import schoolReducer from './schoolReducer';
import testReducer from "./testReducer";
import userReducer from "./userReducer";

//COMBINING REDUCERS
const rootReducer = combineReducers({
    test : testReducer,
    schools: schoolReducer,
    users: userReducer
});

export default rootReducer;
