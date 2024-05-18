import React from 'react';

const SkeletonPostPreview = () => {
  return (
    <div className='border border-gray-200 p-5 rounded-lg mb-5 max-w-2xl mx-auto animate-pulse'>
      <div className='flex items-center mb-4'>
        <div className='w-10 h-10 rounded-full bg-gray-300 mr-4'></div>
        <div className='flex-1 space-y-2'>
          <div className='h-4 bg-gray-300 rounded w-1/2'></div>
          <div className='h-4 bg-gray-300 rounded w-1/4'></div>
        </div>
      </div>
      <div className='h-6 bg-gray-300 rounded mb-2'></div>
      <div className='space-y-2'>
        <div className='h-4 bg-gray-300 rounded'></div>
        <div className='h-4 bg-gray-300 rounded w-5/6'></div>
      </div>
    </div>
  );
};

export default SkeletonPostPreview;
