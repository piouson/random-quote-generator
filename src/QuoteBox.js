import React from 'react';

function QuoteBox(props) {
  return (
    <div id="quote">
      <blockquote>
        {props.children}
      </blockquote>
    </div>
  );
}

export default QuoteBox;
