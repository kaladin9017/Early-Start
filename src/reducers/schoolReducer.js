import {GET_SCHOOLS} from '../actions/types';

export default function getSchools(state = [], action) {
	console.log('ACTIONS:',action.payload)
  switch (action.type) {
    case GET_SCHOOLS:
      return action.payload
    default:
  }
    return state;
}