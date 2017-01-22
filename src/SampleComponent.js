import React, {Component} from "react";
import {connect} from "react-redux";

import {getDistrict, getSchoolGrade, getAttendance, getMathScores, getEnglishScores, getSchools} from './actions/index';


const mapState = state => ({
    data : state.test.data
});

class SampleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  handleClick() {
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
  handleFinalClick() {
    getSchools(this.state)
  }
    render() {
      if(this.state.district && this.state.attendance && this.state.math && this.state.english && this.state.grades && this.state.district) {
        this.handleFinalClick()
      }
        const {data} = this.props;

        return (
            <div>
                Data from Redux: {data}
                <button onClick={this.handleClick.bind(this)}>District</button>
            </div>
        );
    }
}

export default connect(mapState)(SampleComponent);
