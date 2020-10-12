import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import device from './deviceReducer';

const rootReducer = combineReducers({
    device,
    form: formReducer
});

export default rootReducer;
