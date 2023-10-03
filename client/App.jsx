import React from 'react';

const App = () => (
  <div id='app'>
    Shopper's World!
    <div class='container'>
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
  </div>
);
export default App;
