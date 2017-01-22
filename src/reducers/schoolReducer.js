import {GET_SCHOOLS} from '../actions/types';

export default function getSchools(state = {}, action) {
  switch (action.type) {
    case GET_SCHOOLS:
      return action.payload
    default:
  }
    return state;
}
//samplecomponent handleClick must happen, zipcode enter, then populate reducer. 