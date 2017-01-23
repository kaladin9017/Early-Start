import {GET_SCHOOLS} from './types';

import axios from 'axios';

const NYC_OPEN_API = 'https://data.cityofnewyork.us/resource/';
const APP_TOKEN = 'y448C1l1oAIur6EOUHc8eXt7d&';


export function getSchools(data) {
  let obj = {};
  obj.district = [];

  data.district.forEach((val) => {
    if(val.grades.includes('05')) {
      obj.district.push(val)
    };
  });

  let tempDbnArr = [];
  let tempGradesArr = [];

  for(let i = 0; i < obj.district.length; i ++) {
    tempDbnArr.indexOf(obj.district[i].ats_system_code) === -1 ? tempDbnArr.push(obj.district[i].ats_system_code) : null;
  }

  for(let i = 0; i < data.grades.length; i ++) {
    if(tempDbnArr.indexOf(data.grades[i].dbn) !== -1) {
      tempGradesArr.push(data.grades[i])
    }
  }

  let finalObj = []

  for(let i = 0; i < tempGradesArr.length; i ++) {
    finalObj.push({
      grade: tempGradesArr[i]._overall_grade,
      dbn: tempGradesArr[i].dbn,
      school_level: tempGradesArr[i].school_level_
    })

  }

  for(let i = 0; i <obj.district.length; i++) {
    for(let j = 0; j < finalObj.length; j++) {
      if(finalObj[j].dbn == obj.district[i].ats_system_code) {
        finalObj[j] = Object.assign({}, finalObj[j], obj.district[i])
      }
    }


  }

  for(let i = 0; i <data.attendance.length; i++) {
    for(let j = 0; j < finalObj.length; j++) {
      if(finalObj[j].dbn == data.attendance[i].school_dbn) {
        finalObj[j] = Object.assign({}, finalObj[j], {attendance: data.attendance[i]})
      }
    }


  }
  for(let i = 0; i <data.math.length; i++) {
    for(let j = 0; j < finalObj.length; j++) {
      if(finalObj[j].dbn == data.math[i].dbn) {
        finalObj[j] = Object.assign({}, finalObj[j], {math: data.math[i]})
      }
    }


  }
  for(let i = 0; i <data.english.length; i++) {
    for(let j = 0; j < finalObj.length; j++) {
      if(finalObj[j].dbn == data.english[i].dbn) {
        finalObj[j] = Object.assign({}, finalObj[j], {english: data.english[i]})
      }
    }

  }
  return {
    type: GET_SCHOOLS,
    payload: finalObj
  }
}



// HELPER FUNCTIONS
export function getMathScores() {
  // https://data.cityofnewyork.us/resource/psb6-pdb9.json
  let resource = 'psb6-pdb9.json?$$app_token='+APP_TOKEN;
  let query = '$query=SELECT dbn, grade, year, mean_scale_score where year=="2012" AND grade="All Grades"';
  let url = `${NYC_OPEN_API}${resource}${query}`;
  let res = axios.get(url);
  return res;
};


export function getEnglishScores() {
  // https://data.cityofnewyork.us/resource/e4m5-n47p.json
  let resource = 'e4m5-n47p.json?$$app_token='+APP_TOKEN;
  let query = '$query=SELECT dbn, grade, year, mean_scale_score where year=="2011" AND grade="All Grades"';
  let url = `${NYC_OPEN_API}${resource}${query}`;
  let res = axios.get(url);

  return res;
};

export function getAttendance(DBN) {
  // https://data.cityofnewyork.us/resource/uzy6-icxe.json
  let resource = 'uzy6-icxe.json?$$app_token='+APP_TOKEN;
  let query = `$query=SELECT school_dbn, _of_attd_taken`;
  let url = `${NYC_OPEN_API}${resource}${query}`;
  let res = axios.get(url);
  return res;
}

export function getSchoolGrade() {
  // https://data.cityofnewyork.us/resource/i4dq-9qtw.json?$query=SELECT dbn, _overall_grade
  let resource = 'i4dq-9qtw.json?$$app_token='+APP_TOKEN;
  let query = `$query=SELECT dbn, _overall_grade, school_level_`;
  let url = `${NYC_OPEN_API}${resource}${query}`;
  let res = axios.get(url)
  return res
}


export function getDistrict(zip) {
  let resource = '9pyc-nsiu.json?$$app_token='+APP_TOKEN;
  // let query = `?query=SELECT zip, location_name, longitude, latitude, city, primary_address, grades, ats_system_code, principle_email, school_year where ZIP==${zip}`;
  let query = `$query=SELECT zip, location_category_description, location_name, longitude, latitude, city, primary_address, grades, ats_system_code, principal_email, school_year where ZIP==${zip}`;

  let url = `${NYC_OPEN_API}${resource}${query}`;
  let res = axios.get(url)
  return res
}
