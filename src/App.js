import React, { useState } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';
import QuoteControls from './QuoteControls';
import TwitterLink from './TwitterLink';
import Quote from './Quote';
import QuoteHeader from './QuoteHeader';

function App() {
  const [isLoading, ] = useState(false);

  return (
    <div id="App">
      <QuoteHeader text="Coding Quotes" />
      <QuoteBox>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
            <Quote text="Therefore he approaches the programming task in full humility, and among other things he avoids clever tricks like the plague" author="piouson" />
        )}
      </QuoteBox>
      <QuoteControls handleClick busy={isLoading} text="New Quote">
        <TwitterLink link />
      </QuoteControls>
    </div>
  );
}

export default App;
