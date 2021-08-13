import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import Pagination from './components/page/Pagination';
import Details from './components/Details/Details'
// eslint-disable-next-line
import Quotes from './components/quotes/Quotes';

const App=()=> {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
   const [query, setQuery] = useState('')
   // eslint-disable-next-line
   const [quotes, setQuotes] = useState('')
   const [main, setMain] = useState(false)

  function details(){
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      const quotes = await axios(`https://www.breakingbadapi.com/api/quotes}`)
      // console.log(result.data)
      // console.log(quotes.data)

      setItems(result.data)
      setQuotes(quotes.data)
      setIsLoading(false)
      
    }
    fetchItems()
    if(main===true){
    return(<div>
    
    </div>)
  }}

    useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      const quotes = await axios(`https://www.breakingbadapi.com/api/quotes}`)
      console.log(result.data)
      console.log(quotes.data)

      setItems(result.data)
      setQuotes(quotes.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])
  if(main===false){
    const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    
    <div className="container mt-5">
    <Header />
   
   <Search  getQuery={(q) => setQuery(q)} />
    
    <CharacterGrid isLoading={isLoading} items={currentPosts} /><br/><br/>
     <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />
     <button onClick={()=>{details(setMain(true))}} className="btn">Details
     </button>
    </div>
    
  );
}
else{
  return(
    
<div>
<Header />

<Details isLoading={isLoading} items={items} />



</div>
  )
}
}

export default App;
// <Quotes isLoading={isLoading} quotes={quotes} />