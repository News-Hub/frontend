import Navbar from '../components/Navbar';
import MainNews from '../components/MainNews';
import AdditionalNews from '../components/AdditionalNews';
import { useState } from 'react';

const Test = () => {
  const [category, setCategory] = useState('general');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <Navbar
        currentCategory={category}
        onCategoryChange={handleCategoryChange}
      />
      <MainNews category={category} />
    </div>
  );
};

export default Test;
