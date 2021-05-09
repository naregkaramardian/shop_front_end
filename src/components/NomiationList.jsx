import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import NominationItem from './NominationItem'

const NomiationList = ({ nominations, removeNominations }) => {
  return (
    <div>
      {console.log(nominations)}
      {nominations.map((nomination, index) => (
        <div key={uuidv4()} className='w-full md:w-40 lg:w-1/4'>
          <NominationItem index={index} removeNominations={removeNominations} title={nomination.movie.Title} poster={nomination.movie.Poster} />
        </div>
      ))}
    </div>
  )
}

export default NomiationList
