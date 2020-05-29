import React from 'react';

function QuoteHeader(props) {
  return (
    <div id="quote-header">
      <h1>{props.text}</h1>
    </div>
  );
}

export default QuoteHeader;
