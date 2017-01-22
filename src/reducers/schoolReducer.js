import GET_SCHOOLS from '../actions';

export default function testReducer(state = {}, action) {
  switch (action.type) {
    case GET_SCHOOLS:
      return action.payload
      break;
    default:

  }
    return state;
}
