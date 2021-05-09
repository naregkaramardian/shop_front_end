import { useState, useEffect } from 'react'
import useDebounce from '../Hooks/UseDebounce'
import { v4 as uuidv4 } from 'uuid'
import SearchItem from './search_item'

export default function Search({ addNominationList, nominations }) {
  // State and setter for search term
  const [searchTerm, setSearchTerm] = useState('')
  // State and setter for search results
  const [results, setResults] = useState([])
  // State for search status (whether there is a pending API request)
  const [isSearching, setIsSearching] = useState(false)

  const debouncedSearchTerm = useDebounce(searchTerm, 500)

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

  // Pretty standard UI with search input and results
  return (
    <div>
      <div className='my-6 mx-2 md:m-6 bg-white overflow-hidden shadow rounded-lg'>
        <div className='p-0.5 w-full h-16'>
          <input className='w-full h-full shadow rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' placeholder='Search Movies' onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className='bg-gray-50 px-4 py-5 sm:p-6'>
          {isSearching && <div>Searching ...</div>}

          {results.Search &&
            results.Search.map((result) => (
              <div key={result.imdbID + uuidv4()} className='w-full '>
                <SearchItem id={result.imdbID} title={result.Title} poster={result.Poster} addNominationList={addNominationList} result={result} nominations={nominations} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
