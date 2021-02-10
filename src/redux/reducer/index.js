import {combineReducers} from "redux";
import GetUserReducer from "./getStudentsReducer";
import CreateUserReducer from "./createStudentReducer"

const reducers = combineReducers({
    GetUserReducer,
    CreateUserReducer
});

export default reducers;