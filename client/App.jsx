import React, { useState, useEffect } from 'react';
import MainDisplay from './container/main-display.jsx';
import PostDisplay from './container/post-display.jsx';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchDatabase();
  }, []);

  const fetchDatabase = async () => {
    const res = await axios.get('http://localhost:8080/all');
    setProducts(res.data);
    // console.log(res.data);
  };

  return (
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
        <MainDisplay products={products} />
      </div>
      <div className='post-container'>
        <PostDisplay products={products} />
      </div>
    </div>
  );
};
export default App;
