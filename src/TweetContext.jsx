import React from 'react';

const TweetContext = React.createContext({
  currentTweet: '',
  tweetsList: [],
  handleOnChange: () => {},
  handleOnSubmit: () => {},
});

export default TweetContext;