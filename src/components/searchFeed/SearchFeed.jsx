import React , { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './searchFeed.css';

import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { SearchCard, Loader } from '../index';

const SearchFeed = () => {
  const [ result, setResult ] = useState(null);
  const { searchTerm } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    fetchFromAPI(`search?type=video&query=${searchTerm}`)
      .then((res) => setResult(res.data))
  }, [searchTerm]);

  if (!result) return <Loader />;

  return (
    <div className='search-feed'>
      <h2 className='search-feed-head'>Search results for "{searchTerm}"</h2>
      <div>
        { result.map((item, index) => (item.type === "video" && <SearchCard data={item} key={index}/>)) }
      </div>
    </div>
  )
}

export default SearchFeed;