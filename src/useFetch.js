import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [ result, setResult ] = useState({data: null, loading: true});
  useEffect(() => {
    setResult({data: null, loading: true});
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setResult({data: res, loading: false});
      })
  }, [url, setResult]);

  return result;
}