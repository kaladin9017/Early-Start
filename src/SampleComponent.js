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
            </div>
        );
    }
}

export default connect(mapState)(SampleComponent);
