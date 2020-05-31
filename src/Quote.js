import React from 'react';

function Quote(props) {
  return (
    <blockquote>
      <q id="text">
        {props.text}
      </q>
      <footer id="author">
        {props.author}
      </footer>
    </blockquote>
  );
}

export default Quote;
