import React from 'react';
import './sideBar.css';
import { Link, useLocation } from 'react-router-dom';

import { categories } from '../../utils/constants';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {

    let isCollapse = useLocation().pathname.startsWith('/v', 0);

    return (
        <div className='sidebar'>
            <Link to='/' className='sidebar-container'>
                {categories.map((category) => (
                    <button
                        className={`category-btn ${category.name === selectedCategory && "selected-category"}`}
                        onClick={() => setSelectedCategory(category.name)}
                        key={category.name}
                    >
                        <span
                            style={{ color: category.name === selectedCategory ? 'var(--text-primary)' : 'var(--theme)' }}
                        >
                            {category.icon}
                        </span>
                        <span className={`category-name ${isCollapse ? 'sidebar-collapse' : '' } `}>{category.name}</span>
                    </button>
                ))}
            </Link>
            <p className={`sidebar-copy ${isCollapse ? 'sidebar-collapse':'' }`}> &copy; ThouTube 2023</p>
        </div>
    )
};

export default SideBar;