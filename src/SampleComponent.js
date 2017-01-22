import React, {Component} from "react";
import {connect} from "react-redux";

import {getDistrict} from './actions/index';


const mapState = state => ({
    data : state.test.data
});

class SampleComponent extends Component {
    render() {
        const {data} = this.props;

        return (
            <div>
                Data from Redux: {data}
                <button onClick={getDistrict.bind(this, "11207")}>District</button>
            </div>
        );
    }
}

export default connect(mapState)(SampleComponent);
