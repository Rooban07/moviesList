import { Link } from 'react-router-dom';
import lists from '../datasets/list';

function List() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let finaldate = date + '-' + month + '-' + year;
  return (
    <div className='mx-auto px-8 min-h-full'>
      {lists.map((movieData, ind) => {
        return (
          <div key={ind} className='mt-8'>
            <h1 className='mx-6 mb-3 dark:text-white text-bodybg font-medium text-xl'>{movieData.name}</h1>
            <div className='grid grid-cols-1 md:grid-cols-6'>
              {movieData.movies.map((ele, i) => (
                <div key={i} className={'dark:text-gray-300 bg-white relative dark:bg-transparent m-2'}>
                  <p>
                    <img className='rounded-md' src={new URL(`../assets/${ele.image}`, import.meta.url)} />
                  </p>
                  <div className='px-3 py-3'>
                    <p className=' font-semibold my-2'>{ele.name}</p>
                    <p className=' text-xs text-p-450 my-2'>{ele.description}</p>
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
                    {finaldate === ele.date ? (
                      <p className='animate-bounce text-center absolute top-0 left-0 right-0'>
                        <span className=' rounded-full bg-newlable-450 text-xs font-medium text-bodybg-450 py-1 px-2'>New</span>
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className='mx-6 text-right'>
              <button className='text-bodybg-450 bg-newlable-450 text-sm rounded-full animate-pulse py-2 font-medium uppercase px-6 mt-4'>
                <Link to={`/Movies/${movieData.readMore}`}>View more</Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
