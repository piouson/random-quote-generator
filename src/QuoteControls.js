import React from 'react';

function QuoteControls(props) {
  return (
    <div id="quote-controls">
      {props.children}
      <button
        id="new-quote"
        type="button"
        onClick={props.handleClick}
        disabled={props.busy} >{props.text}</button>
    </div>
  );
}

export default QuoteControls;
