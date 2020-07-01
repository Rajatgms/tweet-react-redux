import React from 'react';
import { connect } from 'react-redux';
import FetchTweets from '../components/FetchTweets';
import { fetchTweets } from '../actions/fetchTweets';

const mapDispatchToProps = {
  fetchTweets
}

export default connect(null, mapDispatchToProps)(FetchTweets);
