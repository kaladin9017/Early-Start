export function getState(zip) {
  let schoolGradeArr = []

  Promise.resolve(getDistrict("11207"))
  .then((temp)=> {
    this.setState({district: temp.data });
  });

  Promise.resolve(getSchoolGrade('1'))
  .then((temp)=> {
    this.setState({grades: temp.data });
  });

  Promise.resolve(getAttendance('1'))
  .then((temp)=> {
    this.setState({attendance: temp.data });
  });

  Promise.resolve(getMathScores('1'))
  .then((temp)=> {
    this.setState({math: temp.data });
  });

  Promise.resolve(getEnglishScores('1'))
  .then((temp)=> {
    this.setState({english: temp.data });
  });
}
