import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../localstorage';
import logo from '../mo_logo.png';
import DarkModeToggler from './DarkModeToggler';

function Header() {
  const navigate = useNavigate();
  const [local, setLocal] = useLocalStorage('mail');
  const onlogOut = () => {
    setLocal('');
    navigate('/');
  };
  return (
    <div className='bg-header-450 shadow-2xl py-2'>
      <div className='container mx-auto px-7'>
        <header className='md:grid md:grid-cols-3 gap-4'>
          <div className='flex justify-center md:justify-start'>
            <img src={logo} className='w-24' alt='logo' />
          </div>
          <div className='text-right items-center col-span-2 flex justify-center md:justify-end'>
            <span className=' text-white font-semibold italic underline'><a href='https://www.youtube.com/watch?v=MMafoMr0H4I' target='_blank'>How to download</a></span>
            <span className='text-white font-mulishFont font-medium uppercase text-sm cursor-pointer ml-3 pt-2 pl-7 pr-7 pb-2 rounded-md hover:bg-hover-450 transition duration-500 hover:shadow-xl' onClick={onlogOut}>
              Logout
            </span>
            <DarkModeToggler />
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
