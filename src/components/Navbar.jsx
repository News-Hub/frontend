import React from 'react';

const categories = [
  { name: 'Business', value: 'business' },
  { name: 'Entertainment', value: 'entertainment' },
  { name: 'General', value: 'general' },
  { name: 'Health', value: 'health' },
  { name: 'Science', value: 'science' },
  { name: 'Sports', value: 'sports' },
  { name: 'Technology', value: 'technology' },
];

const Navbar = ({ currentCategory, onCategoryChange }) => {
  return (
    <nav className='bg-white shadow p-4 flex justify-between items-center'>
      <div className='flex items-center space-x-4'>
        <div className='font-bold text-xl'>DailyNews</div>
        <div className='hidden md:flex space-x-4'>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`hover:underline ${
                currentCategory === category.value ? 'font-bold' : ''
              }`}
              onClick={() => onCategoryChange(category.value)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <input
          type='text'
          placeholder='Search'
          className='border p-2 rounded'
        />
        <button className='bg-black text-white px-4 py-2 rounded'>
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
