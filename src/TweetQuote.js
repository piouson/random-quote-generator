import React from 'react';

const TWEET_URI = 'https://twitter.com/intent/tweet?';

function getQueryString(obj) {
  return Object.keys(obj).reduce((a, e) => {
    a.push(`${e}=${obj[e]}`);
    return a;
  }, []).join("&");
}

function getTweetLink(quote) {
  const query = {
    text: encodeURIComponent(`"${quote.en}" ${quote.author}.`),
    url: window.location.href,
    hashtags: encodeURIComponent("quotes, codingQuotes"),
    via: "piouson_code"
  }
  return `${TWEET_URI}${getQueryString(query)}`;
}

function TweetQuote(props) {
  const link = getTweetLink(props.tweet)
  return (
    <div>
      <a id="tweet-quote" href={link} 
        target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  );
}

export default TweetQuote;
