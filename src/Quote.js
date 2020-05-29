import React, { Fragment } from 'react';

function Quote(props) {
  return (
    <Fragment>
      <q>
        {props.text}
      </q>
      <footer>
        {props.author}
      </footer>
    </Fragment>
  );
}

export default Quote;
