import React, { useState } from 'react'
import useStorage from './Hooks/useStorage'
import Banner from './components/Banners'
import Notify from './components/Notify'
import Layout from './components/Layout'

function App() {
  const [nominations, setNominations] = useStorage('nominations')
  const [notify, setNotify] = useState(false)
  const [notifyMovie, setNotifyMovie] = useState()

  const addNominationList = (movie) => {
    const newNominations = [...nominations, { movie }]
    setNotifyMovie(movie)
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

      <Layout addNominationList={addNominationList} nominations={nominations} setNotify={setNotify} removeNominations={removeNominations} />

      {notify ? <Notify setNotify={setNotify} notifyMovie={notifyMovie} /> : null}
    </div>
  )
}

export default App
