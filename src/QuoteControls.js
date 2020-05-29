import React from 'react';

function QuoteControls(props) {
  return (
    <div id="quote-controls">
      <div>
        {props.children}
      </div>
      <button
        type="button"
        onClick={props.handleClick}
        disabled={props.busy} >{props.text}</button>
    </div>
  );
}

export default QuoteControls;
