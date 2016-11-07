import { combineReducers } from 'redux';
import authReducer from 'authentication';
import user from 'users';

const rootReducer = combineReducers({
    users:user
});

export default rootReducer;
