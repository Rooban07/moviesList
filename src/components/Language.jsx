import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Movies() {
  const { name } = useParams();
  const [movies, setMoies] = useState([]);

  useEffect(async () => {
    let { default: moviesData } = await import(`../datasets/${name}.json`);
    setMoies(moviesData.reverse());
  }, [name]);

  return (
    <div className='dark:bg-bodybg-450'>
      <div className='mx-auto px-8'>
        <div className='pt-8'>
          <Button variant='contained' style={{ marginBottom: 10, marginLeft: 10 }}>
            Back
          </Button>
          <div className='grid grid-cols-1 md:grid-cols-6'>
            {movies.map((ele, i) => {
              return (
                <div key={i} className={'dark:text-gray-300 bg-white relative dark:bg-transparent m-2'}>
                  <p>
                    <img className='rounded-md' src={new URL(`../assets/${ele.image}`, import.meta.url)} />
                  </p>
                  <div className='px-3 py-3'>
                    <p className=' font-semibold'>{ele.name}</p>
                    <p className=' text-xs text-p-450'>{ele.description}</p>
                    <div>
                      {ele.url.map((el, idx) =>
                        el.murl && el.tp ? (
                          <span key={idx} className=' bg-badge-450 rounded-full py-1 px-2 mx-1 text-xs font-semibold text-bodybg-450'>
                            <a target='_blank' href={el.murl}>
                              {el.tp}
                            </a>
                          </span>
                        ) : (
                          ''
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movies;
