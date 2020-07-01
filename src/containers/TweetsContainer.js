import React from 'react';
import { connect } from 'react-redux';
import Tweets from '../components/Tweets';

const mapStateToProps = ({tweets}) => ({tweets});

export default connect(mapStateToProps)(Tweets);
