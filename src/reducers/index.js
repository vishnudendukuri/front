import { combineReducers } from "redux";
import counter from './counter'

const allReducers=combineReducers({
    counters:counter
})
export default allReducers
 
