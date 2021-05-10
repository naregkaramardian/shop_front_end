import React from 'react'
import NominationItem from './NominationItem'

const NomiationList = ({ nominations, removeNominations }) => {
  return (
    <div className='my-6 mx-2 md:m-6 bg-white overflow-hidden shadow rounded-lg'>
      <div className='bg-indigo-50 px-4 py-5 sm:p-6'>
        {nominations.map((nomination, index) => (
          <div key={index} className='w-full md:w-40 lg:w-1/4 transition ease-in duration-600'>
            <NominationItem  removeNominations={removeNominations} nomination={nomination.movie} index={index}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NomiationList
