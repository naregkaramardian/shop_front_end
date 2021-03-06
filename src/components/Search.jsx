import { useState, useEffect, useCallback } from 'react'
import useDebounce from '../Hooks/UseDebounce'
import { v4 as uuidv4 } from 'uuid'
import SearchItem from './search_item'

export default function Search({ addNominationList, nominations, setNotify }) {
  // State and setter for search term
  const [searchTerm, setSearchTerm] = useState('')
  const [year, setYear] = useState('')
  // State and setter for search results
  const [results, setResults] = useState([])
  // State for search status (whether there is a pending API request)
  const [isSearching, setIsSearching] = useState(false)

  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const debouncedYear = useDebounce(year, 500)

  // API search function
  const searchCharacters = useCallback(
    async (search) => {
      const apiKey = 'aa21a4b1'
      const queryString = `apikey=${apiKey}&s=${search}&y=${year}`
      const url = `https://www.omdbapi.com/?${queryString}`
      const response = await fetch(url)
      const data = await response.json()
      return data
    },
    [year]
  )

  useEffect(() => {
    // Make sure we have a value (user has entered something in input)
    if (debouncedSearchTerm || debouncedYear) {
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
  }, [debouncedSearchTerm, debouncedYear, searchCharacters])

  // Pretty standard UI with search input and results
  return (
    <div>
      <div className='my-6 mx-2 md:m-6 bg-white overflow-hidden shadow rounded-lg'>
        <div className='flex p-0.5 w-full h-16'>
          <input className='m-auto mx-1 w-2/3 h-2/3 shadow rounded-lg px-5 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' placeholder='Search Movies' onChange={(e) => setSearchTerm(e.target.value)} />
          <input className='m-auto mx-1 w-1/3 h-2/3 shadow rounded-lg px-5 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' placeholder='Year' onChange={(e) => setYear(e.target.value)} />
        </div>
        <div className='bg-indigo-50 px-4 py-5 sm:p-6'>
          {isSearching && <div>Searching ...</div>}

          {results.Search &&
            results.Search.map((result) => (
              <div key={result.imdbID + uuidv4()} className='w-full '>
                <SearchItem addNominationList={addNominationList} result={result} nominations={nominations} setNotify={setNotify} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
