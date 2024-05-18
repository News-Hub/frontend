import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkeletonPostPreview from './SkeletonPostPreview';

const API = import.meta.env.VITE_API_KEY;

const AdditionalNews = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: category,
            pageSize: 10,
            apiKey: API,
          },
        });
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
    <div className='p-4 grid grid-cols-3 gap-4'>
      <div className='col-span-3'>
        <h2 className='text-3xl font-bold mb-4'>
          Read up on the latest lifestyle and world news & tips...
        </h2>
      </div>
      {loading
        ? Array.from({ length: 3 }).map((_, index) => (
            <SkeletonPostPreview key={index} />
          ))
        : articles.slice(0, 3).map((article, index) => (
            <div key={index} className='col-span-1'>
              <h3 className='text-xl font-bold mb-2'>{article.title}</h3>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className='w-full h-auto rounded mb-2'
                />
              )}
              <a
                href={article.url}
                className='text-blue-500'
                target='_blank'
                rel='noopener noreferrer'
              >
                View All
              </a>
            </div>
          ))}
    </div>
  );
};

export default AdditionalNews;
