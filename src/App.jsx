import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import { MAIL_ID } from './constants';
import useLocalStorage from './localstorage';

function App() {
  const navigate = useNavigate();
  const [local, setLocal] = useLocalStorage('mail');

  useEffect(() => {
    const emailVal = MAIL_ID.find(e => e === local);
    if (!emailVal) navigate('/');
  }, [local]);

  return (
    <div className='dark:bg-bodybg-450 font-mulishFont select-none'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
