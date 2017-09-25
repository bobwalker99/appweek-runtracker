//@flow
'use strict';

import { connect } from 'react-redux';

import { Navigator } from '../components/Navigator.react';

const mapStateToProps = (state) => {
    console.log('Mapping nav stateToProps: ' + JSON.stringify(state));
    return ({
        nav: state.navigationReducer.nav,
    });
};

export default connect(mapStateToProps)(Navigator);
