import { useState, useEffect } from 'react';
import { getNews } from './getNews';

export const useFetching = (query) => {
  const apiKey = '6efb3fd81c8c478cb549c76355603cf9';

  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  const onNews = async () => {
    const newInfo = await getNews(apiKey, query);
    setNews(newInfo);
    setIsLoading(false);
  }

  useEffect(() => {
    onNews();
  }, []);

  return {
    news, isLoading
  }
}