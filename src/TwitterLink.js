import React, { Fragment } from 'react';

function TwitterLink(props) {
  return (
    <Fragment>
      <a id="tweet-quote" href={props.link} 
        target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter"></i>
      </a>
    </Fragment>
  );
}

export default TwitterLink;
