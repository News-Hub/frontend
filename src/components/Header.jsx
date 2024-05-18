/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-evenly items-center h-12'>
      <Link to={'/'} className='before:text-black font-bold'>
        GO BACK
      </Link>
      <Link to={'logIn'}>
        <h1 className='flex-1 font-bold text-center text-2xlg'>로그인</h1>
      </Link>
    </div>
  );
};

export default Header;
