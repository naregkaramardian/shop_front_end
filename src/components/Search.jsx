import { useState, useEffect } from 'react'
import useDebounce from '../Hooks/UseDebounce'
import useStorage from '../Hooks/useStorage'

import { v4 as uuidv4 } from 'uuid'

import SearchItem from './search_item'


export default function Search() {
  // State and setter for search term
  const [searchTerm, setSearchTerm] = useState('')
  // State and setter for search results
  const [results, setResults] = useState([])
  // State for search status (whether there is a pending API request)
  const [isSearching, setIsSearching] = useState(false)

  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const [nominations, setNominations] = useStorage('nominations')

  useEffect(() => {
    // Make sure we have a value (user has entered something in input)
    if (debouncedSearchTerm) {
      // Set isSearching state
      setIsSearching(true)
      // Fire off our API call
      searchCharacters(debouncedSearchTerm).then((results) => {
        // Set back to false since request finished
        setIsSearching(false)
        // Set results state
        setResults(results)
      })
    } else {
      setResults([])
    }
  }, [debouncedSearchTerm])

  // API search function
  const searchCharacters = async (search) => {
    const apiKey = 'aa21a4b1'
    const queryString = `apikey=${apiKey}&s=${search}`
    const url = `https://www.omdbapi.com/?${queryString}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const addNominationList = (movie) => {
    const newNominations = [...nominations, { movie }]
    setNominations(newNominations)
    // return <Notify />
  }

  // Pretty standard UI with search input and results
  return (
    <div>
      <input className='border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' placeholder='Search Marvel Comics' onChange={(e) => setSearchTerm(e.target.value)} />

      {isSearching && <div>Searching ...</div>}

      {results.Search &&
        results.Search.map((result) => (
          <div key={result.imdbID + uuidv4()} className='w-full md:w-40 lg:w-1/4'>
            {/* <div key={result.imdbID + uuidv4()}>
              <h4>{result.Title}</h4>
              {result.Poster && <img src={result.Poster} />}
            </div> */}
            <SearchItem title={result.Title} poster={result.Poster} addNominationList={addNominationList} result={result} nominations={nominations}/>
          </div>
        ))}
    </div>
  )
}
