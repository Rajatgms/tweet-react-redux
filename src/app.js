import React from 'react';
import FetchTweetsContainer from './containers/FetchTweetsContainer';
import TweetsContainer from './containers/TweetsContainer';
import './styles.scss';


const Application = () => {
  return (
    <div className="Application">
      <h1>Tweet Stream</h1>
      <FetchTweetsContainer />
      <TweetsContainer />
    </div>
  );
};

export default Application;
