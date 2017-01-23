const _defaultState = {
	age: [],
	address: [],
	city: [],
	zipcode: [],
	schooldata: []
}

const userReducer = (state = _defaultState, action) => {
	console.log('ACTIONS ZIPCODE:', action.zipcode)
	switch(action.type){
		case "ADD_AGE" :
			return ({
				age: [action.age]
			})
		case "ADD_ADDRESS" :
			return ({
				address: [action.address]
			})
		case "ADD_CITY" :
			return ({
				city: [action.city]
			})
		case "ADD_ZIPCODE" :
			return ({
				zipcode: [action.zipcode]
			})
		default: return state;
	}
}

export default userReducer;