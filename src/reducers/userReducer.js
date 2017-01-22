import {addAge, addAddress, addCity, addZipcode, getSchooldata} from '../actions/userActions';

const _defaultState = {
	age: [],
	address: [],
	city: [],
	zipcode: [],
	schooldata: []
}

const userReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_AGE" :
			return ({
				age: [...state.age, action.age]
			})
		case "ADD_ADDRESS" :
			return ({
				address: [...state.address, action.address]
			})
		case "ADD_CITY" :
			return ({
				city: [...state.city, action.city]
			})
		case "ADD_ZIPCODE" :
			return ({
				zipcode: [...state.zipcode, action.zipcode]
			})
		case "GET_SCHOOLDATA" :
			return ({
				schooldata: [...state.schooldata, action.schooldata]
			})
		default : return state;
	}
}

export default userReducer;