import React, { useContext } from 'react';
import TweetContext from '../TweetContext';

const TweetList = () => {
    const context = useContext(TweetContext);

    return (
        <React.Fragment>
            {context.tweetsList.map(tweet =>
                <div className="card" key={tweet.id}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <p>{tweet.userName}</p>
                            <p>{tweet.date}</p>
                        </div>
                        {tweet.content}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default TweetList;