import GET_SCHOOLS from '../actions';

export default function getSchools(state = {}, action) {
  switch (action.type) {
    case GET_SCHOOLS:
      return action.payload
      break;
    default:

  }
    return state;
}
//samplecomponent handleClick must happen, zipcode enter, then populate reducer. 