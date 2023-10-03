import React from 'react';
import MainDisplay from './container/main-display.jsx';
import PostDisplay from './container/post-display.jsx';

const App = () => (
  <div id='app'>
    Shopper's World!
    <div className='nav-container'>
      <ul id='nav-bar'>
        <li>
          <a href='http://localhost:8080/'>Home</a>
        </li>
        <li>
          <a href='http://localhost:8080/home'>Shop</a>
        </li>
        <li>
          <a href='http://localhost:8080/blog'>Blog</a>
        </li>
        <li>
          <a href='http://localhost:8080/contact'>Contact</a>
        </li>
      </ul>
    </div>
    <div className='main-container'>
      <p>Current Listings:</p>
      <MainDisplay />
    </div>
    <div className='post-container'>
      <PostDisplay />
    </div>
  </div>
);
export default App;
