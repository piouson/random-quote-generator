import React from 'react';

function QuoteBox(props) {
  return (
    <div id="quote-box">
      {props.children}
    </div>
  );
}

export default QuoteBox;
