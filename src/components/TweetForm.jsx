import React, { useContext } from 'react';
import TweetContext from '../TweetContext';

const TweetForm = () => {
    const context = useContext(TweetContext);

    return (
        <React.Fragment>
            <div className="input-group">
                <form className="tweet-input" onSubmit={(event) => context.handleOnSubmit(event)}>
                    <textarea className="form-control textarea-custom"
                        aria-label="With textarea"
                        name="tweet"
                        type="text"
                        placeholder="What is on your mind?"
                        maxLength="140"
                        value={context.currentTweet}
                        onChange={(event) => context.handleOnChange(event.target.value)}
                    ></textarea>
                    <button disabled={context.tweetLoading} className="btn btn-primary float-right mt-2" type="submit">Tweet</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default TweetForm;