import { useState, useEffect, useCallback } from 'react';

const quotesApi = 'http://quotes.stormconsultancy.co.uk/random.json';

const useLocalStorage = (key) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

const useQuotesApi = () => {
  const [quote, setQuote] = useLocalStorage('quote');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuotes = useCallback(async () => {
    setError('');
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const response = await fetch(quotesApi);
      if (!response.ok) {
        setError(`HTTP Error: Status: ${response.status}!`);
      }
      else {
        const result = await response.json();
        setQuote(result);
      }
    } catch (error) {
      setError(`HTTP Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, [setQuote]);

  return [{quote, loading, error}, fetchQuotes]
}

export default useQuotesApi;