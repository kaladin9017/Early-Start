//REDUX IMPORT
import {combineReducers} from "redux";

//REDUCERS
import schoolReducer from './schoolReducer';
import testReducer from "./testReducer";
import userReducer from "./userReducer";
import resultReducer from "./resultReducer";

//COMBINING REDUCERS
const rootReducer = combineReducers({
    test : testReducer,
    schools: schoolReducer,
    users: userReducer,
    threeSchools: resultReducer
});

export default rootReducer;
