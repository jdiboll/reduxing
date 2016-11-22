import { combineReducers } from 'redux';
import ReducedUsers from './reduce-users';

const allReducers =  combineReducers({
	users: ReducedUsers


});
export default allReducers;