import { ADD_TWEETS } from '../actions/fetchTweets';

const tweets = (tweets = [], action) => {
  if (action.type === ADD_TWEETS) {
    return action.payload;
  }
  return tweets;
};

export default tweets;
