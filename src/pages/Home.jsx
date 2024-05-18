import { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import Header from '../components/Header';
import NewsFeed from '../components/NewsFeed';

import axios from 'axios';

const Home = () => {
  const [articles, setArticles] = useState([]);

  const API = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines',
          {
            params: {
              country: 'kr',
              pageSize: 10,
              apiKey: API,
            },
          }
        );
        setArticles(response.data.articles);
      } catch (errer) {
        console.error('ERROR', error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <Layout header={<Header />}>
      <NewsFeed />
    </Layout>
  );
};

export default Home;
