import { IoMdArrowDropdown } from 'react-icons/io';
import { nav } from '../constants/Nav';
const Navbar = () => {
  return (
    <nav className='p-2 flex gap-4 fixed top-0 z-20 bg-white w-screen h-12'>
      {nav.map((item, index) => (
        <div key={index} className='flex items-center gap-2'>
          <span>{item}</span>
          <IoMdArrowDropdown size={'25px'} />
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
