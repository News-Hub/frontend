import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkeletonPostPreview from './SkeletonPostPreview';
import PostPreview from './PostPreview';

const API = import.meta.env.VITE_API_KEY;

const MainNews = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines',
          {
            params: {
              country: 'kr', // Fetch news from South Korea
              pageSize: 10,
              category: category,
              apiKey: API,
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
    <div className='p-4 grid md:grid-cols-3 gap-4'>
      <div className='md:col-span-2'>
        <h1 className='text-2xl font-bold mb-4'>Today's News</h1>
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <SkeletonPostPreview key={index} />
            ))
          : articles.map((article, index) => (
              <PostPreview key={index} {...article} />
            ))}
      </div>
      <div className='hidden md:block'>
        <h2 className='text-xl font-bold mb-4'>Staff Picks</h2>
        <div className='space-y-4'>
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <SkeletonPostPreview key={index} />
              ))
            : articles.slice(0, 3).map((article, index) => (
                <div key={index} className='mb-4'>
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className='mb-2 w-full h-auto rounded'
                    />
                  )}
                  <h3 className='font-bold'>{article.title}</h3>
                  <div className='text-gray-500'>
                    {article.source.name} | {article.author}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default MainNews;
