import React, { useState, useEffect } from 'react';
import TweetForm from '../components/TweetForm';
import TweetList from '../components/TweetList';
import { getTweets } from '../lib/api';
import { postTweet } from '../lib/api';
import TweetContext from '../TweetContext';

const TweetPage = () => {
    const [currentTweet, setCurrentTweet] = useState('');
    const [tweetsList, setTweetsList] = useState([]);
    const [tweetLoading, setTweetLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const setTweetValue = (value) => {
        setCurrentTweet(value)
    }

    const handleNewTweet = (event) => {
        event.preventDefault();
        setTweetLoading(true)

        const userName = localStorage.getItem('userName');
        const newTweet = {
            content: currentTweet,
            userName: userName,
            date: new Date().toISOString(),
        }

        postTweet(newTweet)
            .then(response => {
                console.log(response);
                const newItem = { ...newTweet, id: response.data.id }

                setTweetsList(prevState => [newItem, ...prevState]);
                setTweetLoading(false);
            })
            .catch(err => {
                setErrorMessage(err.message);
                console.log("There was an error posting your tweet: " + errorMessage)
            });

        setCurrentTweet('');
    }

    useEffect(() => {
        const getData = () => {
            getTweets()
                .then(response => {
                    const { data } = response;
                    setTweetsList(data.tweets);
                })
                .catch(err => {
                    setErrorMessage(err.message);
                    console.log("There was an error getting tweets: " + errorMessage)
                });
        }
        getData();
        const intervalID = setInterval(getData, 3000);

        return () => {
            clearInterval(intervalID);
        }
    }, [errorMessage])

    return (
        <TweetContext.Provider value={{
            tweetsList: tweetsList,
            currentTweet: currentTweet,
            handleOnChange: (value) => setTweetValue(value),
            handleOnSubmit: (event) => handleNewTweet(event),
            tweetLoading: tweetLoading,
        }}>

            <div className="container">
                <div className="row">
                    <div className="mx-auto">
                        <div className="tweet-div">
                            <TweetForm />
                            {tweetLoading && <h6>Loading...</h6>}
                            {errorMessage ? <h6>{errorMessage}</h6> : <TweetList />}
                        </div>
                    </div>
                </div>
            </div>

        </TweetContext.Provider>
    );
}

export default TweetPage;