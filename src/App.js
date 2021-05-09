import NomiationList from './components/NomiationList'
import Search from './components/Search'
import useStorage from './Hooks/useStorage'

function App() {
  const [nominations, setNominations] = useStorage('nominations')

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
    <div className='App flex flex-col md:flex-row '>
      <div class='flex-1'>
        <Search addNominationList={addNominationList} nominations={nominations} />
      </div>
      <div class='flex-1'>
        <NomiationList nominations={nominations} removeNominations={removeNominations}/>
      </div>
    </div>
  )
}

export default App
