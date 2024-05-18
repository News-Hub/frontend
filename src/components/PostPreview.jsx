import React from 'react';

const PostPreview = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
}) => {
  return (
    <div className='border border-gray-200 p-5 rounded-lg mb-5'>
      {urlToImage && (
        <img
          src={urlToImage}
          alt='Article'
          className='w-full h-auto rounded mb-4'
        />
      )}
      <div className='flex items-center mb-4'>
        <div>
          <div className='flex items-center'>
            <span className='font-semibold'>{source?.name}</span>
            {author && <span className='text-gray-500 ml-2'>{author}</span>}
          </div>
          <div className='text-sm text-gray-400'>
            <span>{new Date(publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      <h1 className='text-xl font-bold mb-2'>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {title}
        </a>
      </h1>
      <p className='text-gray-700 mb-4'>{description}</p>
    </div>
  );
};

export default PostPreview;
