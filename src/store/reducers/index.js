import { combineReducers } from 'redux';

import recordsReducer from './records';
import selectedDateReducer from './selectedDate';
import departmentsReducer from './departments';
import servicesReducer from './services';

export default combineReducers({
  departments: departmentsReducer,
  records: recordsReducer,
  selectedDate: selectedDateReducer,
  services: servicesReducer
});