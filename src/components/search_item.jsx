import React, { useEffect, useState } from 'react'
import placeholder from '../images/placeholder-image.jpg'
const SearchItem = ({ result, addNominationList, nominations, setNotify }) => {
  const [isNominated, setIsNominated] = useState(false)

  const checkNominations = (nominations, id) => {
    nominations.forEach((nomination) => {
      if (nomination.movie.imdbID === id) {
        setIsNominated(true)
      }
    })
  }
  const nominate = () => {
    addNominationList(result)
    setNotify(true)
  }
  useEffect(() => {
    checkNominations(nominations, result.imdbID)
  }, [nominations, result.imdbID])
  return (
    <div className='flex bg-white dark:bg-gray-800 rounded-lg  md:h-64 my-4 md:m-7 '>
      <div className='flex-none w-24 md:w-48  relative'>
        {result.Poster !== 'N/A' && <img src={result.Poster} alt={result.Title} className='absolute rounded-lg inset-0 w-full max-h-48 m-auto md:min-h-full h-full object-cover' />}
        {result.Poster === 'N/A' && <img src={placeholder} alt={result.Title} className='absolute rounded-lg inset-0 w-full max-h-48 m-auto md:min-h-full h-full object-cover' />}
      </div>
      <form className='flex-auto p-6 h-64'>
        <div className='flex-col flex-wrap'>
          <h1 className='flex-auto text-xl font-semibold dark:text-gray-50'>{result.Title}</h1>
          <div className='text-xl font-semibold text-gray-500 dark:text-gray-300'>{result.Year}</div>
          <div className='w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 my-3'>{result.Type}</div>
        </div>

        <div className='flex mb-4 text-sm font-medium'>
          <button onClick={() => nominate()} disabled={nominations.length > 4 || isNominated} className='disabled:opacity-60 disabled:cursor-not-allowed py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full sm:w-40 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'>
            Nominate
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchItem
