const categories = [
  { name: 'Business', value: 'business' },
  { name: 'Entertainment', value: 'entertainment' },
  { name: 'General', value: 'general' },
  { name: 'Health', value: 'health' },
  { name: 'Science', value: 'science' },
  { name: 'Sports', value: 'sports' },
  { name: 'Technology', value: 'technology' },
];

const CategoryNav = ({ currentCategory, onCategoryChange }) => {
  return (
    <div className='flex items-center space-x-4 p-4 border-b'>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full text-gray-700 hover:bg-gray-200 ${
            currentCategory === category.value ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => onCategoryChange(category.value)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;
