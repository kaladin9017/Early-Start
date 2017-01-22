import React, {Component} from "react";
import {connect} from "react-redux";

import axios from 'axios';

const mapState = state => ({
    data : state.test.data
});

class SampleComponent extends Component {
    render() {
        const {data} = this.props;

        return (
            <div>
                Data from Redux: {data}
            </div>
        );
    }
}

export default connect(mapState)(SampleComponent);
