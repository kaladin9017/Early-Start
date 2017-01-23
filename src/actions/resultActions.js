import {GET_SCHOOLS} from './types'

export const addSchool = (school) => ({
  type: "ADD_SCHOOL",
  school
})

export const sortSchools = (payload) => ({
	type: GET_SCHOOLS,
	payload
})