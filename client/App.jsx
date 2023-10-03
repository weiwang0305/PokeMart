import React from 'react';
import mainDisplay from './container/main-display.jsx';
import postDisplay from './container/post-display.jsx';

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
      <mainDisplay />
    </div>
    <div className='post-container'>
      <postDisplay />
    </div>
  </div>
);
export default App;
