export const ADD_TWEETS = 'ADD_TWEETS';

const addTweets = (response) => {
  return {
    type: ADD_TWEETS,
    payload: response.tweets
  }
}

export const fetchTweets = () => {
  return dispatch => {
    fetch("http://tweet-stream.glitch.me/api/tweets")
      .then(result => result.json())
      .then(response => {
        dispatch(addTweets(response));
      })
  }
}

