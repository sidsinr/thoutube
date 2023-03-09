import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed, SideBar } from './components';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [isDark, setIsDark] = useState(true);

  return (
    <BrowserRouter>
      <div data-theme={isDark ? 'dark': 'light'} className='app'>
        <Navbar isDark={isDark} setIsDark={setIsDark} setSelectedCategory={setSelectedCategory}/>
        <div className='app-body'>
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <div style={{ flex: '6'}}>
            <Routes>
              <Route exact path='/' element={<Feed selectedCategory={selectedCategory} />} />
              <Route path='/video/:id' element={<VideoDetail />} />
              <Route path='/channel/:id' element={<ChannelDetail />} />
              <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;