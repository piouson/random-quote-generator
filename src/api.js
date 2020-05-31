import { useState, useEffect, useCallback } from 'react';

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue]
}

const useQuotesApi = () => {
  const [quote, setQuote] = useSemiPersistentState('quote','');
  const [url,] = useState(
    'https://programming-quotes-api.herokuapp.com/quotes/random'
  );
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuotes = useCallback(async () => {
    setError('');
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));

    const response = await fetch(url);
    if (!response.ok) {
      setError(`HTTP Error: Status: ${response.status}!`);
    }
    else {
      const result = await response.json();
      setQuote(result);
    }
    setIsLoading(false);
  }, [url, setQuote]);

  return [{quote, isLoading, error}, fetchQuotes]
}

export default useQuotesApi;