import React, { useEffect } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';
import QuoteControls from './QuoteControls';
import TweetQuote from './TweetQuote';
import Quote from './Quote';
import QuoteHeader from './QuoteHeader';
import useQuotesApi from './api';

function App() {
  const [{quote, isLoading, error}, fetchQuotes] = useQuotesApi();

  useEffect(() => {
    if (!quote) {
      fetchQuotes();
    }
  }, [quote, fetchQuotes]);

  return (
    <div id="App">
      <div id="container">
        <QuoteHeader text="Coding Quotes" />
        <QuoteBox>
          {error && <p>{error}</p>}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            quote.en && (
              <Quote
                text={quote.en}
                author={quote.author} />
            )
          )}
        </QuoteBox>
        <QuoteControls handleClick={fetchQuotes} busy={isLoading} text="New Quote">
          <TweetQuote tweet={quote} />
        </QuoteControls>
      </div>
      <a id="creator"
        href="https://piouson.github.io/"
        target="_blank"
        rel="noopener noreferrer">by piouson
      </a>
    </div>
  );
}

export default App;
