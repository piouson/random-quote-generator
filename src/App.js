import React, { useEffect } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';
import QuoteControls from './QuoteControls';
import TweetQuote from './TweetQuote';
import Quote from './Quote';
import QuoteHeader from './QuoteHeader';
import useQuotesApi from './api';

function App() {
  const [{quote, loading, error}, fetchQuotes] = useQuotesApi();

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
          {loading ? (
            <p>Loading...</p>
          ) : (
            quote && (
              <Quote
                text={quote.quote}
                author={quote.author} />
            )
          )}
        </QuoteBox>
        <QuoteControls handleClick={fetchQuotes} busy={loading} text="New Quote">
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
