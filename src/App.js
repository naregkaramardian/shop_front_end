import React, { useState } from 'react'
import NomiationList from './components/NomiationList'
import Search from './components/Search'
import useStorage from './Hooks/useStorage'
import Banner from './components/Banners'
import Notify from './components/Notify'

function App() {
  const [nominations, setNominations] = useStorage('nominations')
  const [notify, setNotify] = useState(false)

  const addNominationList = (movie) => {
    const newNominations = [...nominations, { movie }]
    setNominations(newNominations)
    // return <Notify />
  }

  const removeNominations = (index) => {
    const newNominations = [...nominations]
    newNominations.splice(index, 1)
    setNominations(newNominations)
  }

  return (
    <div>
      {nominations.length >= 5 && <Banner />}

      <div className='App flex flex-col md:flex-row '>
        <div class='flex-1'>
          <Search addNominationList={addNominationList} nominations={nominations} setNotify={setNotify} />
        </div>
        <div class='flex-1'>
          <NomiationList nominations={nominations} removeNominations={removeNominations} />
        </div>
      </div>
      {notify ? <Notify /> : null}
    </div>
  )
}

export default App
