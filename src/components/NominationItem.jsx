import placeholder from '../images/placeholder-image.jpg'

const NominationItem = ({ nomination, removeNominations, index }) => {
  return (
    <div className='flex bg-white dark:bg-gray-800 rounded-lg  md:h-64 my-4 md:m-7 '>
      <div className='flex-none w-24 md:w-48  relative'>
        {nomination.Poster !== 'N/A' && <img src={nomination.Poster} alt={nomination.Title} className='absolute rounded-lg inset-0 w-full max-h-48 m-auto md:min-h-full h-full object-cover' />}
        {nomination.Poster === 'N/A' && <img src={placeholder} alt={nomination.Title} className='absolute rounded-lg inset-0 w-full max-h-48 m-auto md:min-h-full h-full object-cover' />}
      </div>
      <form className='flex-auto p-6 h-64'>
        <div className='flex-col flex-wrap'>
          <h1 className='flex-auto text-xl font-semibold dark:text-gray-50'>{nomination.Title}</h1>
          <div className='text-xl font-semibold text-gray-500 dark:text-gray-300'>{nomination.Year}</div>
          <div className='w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 my-3'>{nomination.Type}</div>
        </div>

        <div className='flex mb-4 text-sm font-medium'>
          <button onClick={() => removeNominations(index)} className='disabled:opacity-60 disabled:cursor-not-allowed py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full sm:w-40 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'>
            Remove
          </button>
        </div>
      </form>
    </div>
  )
}

export default NominationItem

{
  /* <div className='flex bg-white dark:bg-gray-800 rounded-lg shadow h-auto m-7'>
<div className='flex-none w-24 md:w-48  relative'>
  <img src={poster} alt={title} className='absolute rounded-lg inset-0 w-full h-full object-cover' />
</div>
<form className='flex-auto p-6'>
  <div className='flex flex-wrap'>
    <h1 className='flex-auto text-xl font-semibold dark:text-gray-50'>{title}</h1>
    <div className='text-xl font-semibold text-gray-500 dark:text-gray-300'>$110.00</div>
    <div className='w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2'>In stock</div>
  </div>
  <button onClick={() => removeNominations(index)} className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'>
    Buy now
  </button>
  <div className='flex mb-4 text-sm font-medium'></div>
  <p className='text-sm text-gray-500 dark:text-gray-300'>Free shipping on all continental US orders.</p>
</form>
</div> */
}
