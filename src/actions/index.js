import {GET_MATH_SCORES} from './types';
import {GET_ENGLISH_SCORES} from './types';
import {GET_ATTENDANCE} from './types';
import {GET_DISTRICT} from './types';

import axios from 'axios';

const NYC_OPEN_API = 'https://data.cityofnewyork.us/resource/';
const APP_TOKEN = 'y448C1l1oAIur6EOUHc8eXt7d&';

export function getMathScores() {
  return {}
};


export function getEnglishScores() {
  return {

  }
};

export function getAttendance(DBN) {
  // https://data.cityofnewyork.us/resource/uzy6-icxe.json
  let resource = 'uzy6-icxe.json?/$$$$app_token='+APP_TOKEN;

  return {

  }
}

export function getDistrict(zip) {
  let resource = '9pyc-nsiu.json?$$app_token='+APP_TOKEN;
  // let query = `?query=SELECT zip, location_name, longitude, latitude, city, primary_address, grades, ats_system_code, principle_email, school_year where ZIP==${zip}`;
  let query = `$query=SELECT zip, location_name, longitude, latitude, city, primary_address, grades, ats_system_code, principal_email, school_year where ZIP==${zip}`;
// https://data.cityofnewyork.us/resource/9pyc-nsiu.json?$query=SELECT city, school_year where ZIP=="11207"
  let url = `${NYC_OPEN_API}${resource}${query}`;
  axios.get(url)
  .then((response) => {
    console.log(response.data)
  })
}

// HELPER FUNCTIONS
