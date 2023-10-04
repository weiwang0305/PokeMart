import React, { useState, useEffect } from 'react';
import MainDisplay from './container/main-display.jsx';
import PostDisplay from './container/post-display.jsx';
let products = [];
const App = () => {
  const emptyState = {
    productName: '',
    productPrice: 0,
    sellerName: '',
    timePosted: 0,
    productImg: '',
  };
  const [initialState, stateSetter] = useState(emptyState);

  useEffect(() => {
    setTimeout(() => {
      console.log(initialState);
      products.push(<products state={initialState} />);
      console.log(products);
    }, 50);
  }, [initialState]);

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
        <MainDisplay
          state={initialState}
          stateChange={stateSetter}
          products={products}
        />
      </div>
      <div className='post-container'>
        <PostDisplay stateChange={stateSetter} state={initialState} />
      </div>
    </div>
  );
};
export default App;
