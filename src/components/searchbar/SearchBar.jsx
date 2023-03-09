import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './searchBar.css';

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='search-bar'>
                <input
                    className='search-input'
                    placeholder='Search'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className='search-button'><SearchIcon /></button>
            </form>
        </div>
    )
};

export default SearchBar;