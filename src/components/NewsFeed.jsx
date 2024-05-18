import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostPreview from './PostPreview';
import CategoryNav from './CategoryNav';
import SkeletonPostPreview from './SkeletonPostPreview';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines',
          {
            params: {
              country: 'us',
              pageSize: 10,
              category: category,
              apiKey: API_KEY,
            },
          }
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <CategoryNav currentCategory={category} onCategoryChange={setCategory} />
      <div className='container mx-auto p-5'>
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <SkeletonPostPreview key={index} />
            ))
          : articles.map((article, index) => (
              <PostPreview key={index} {...article} />
            ))}
      </div>
    </div>
  );
};

export default NewsFeed;
