import React from 'react';

const PostDisplay = (props) => {
  // const grabData = (event) => {
  //   event.preventDefault();
  //   const name = document.getElementById('item-name').value;
  //   const itemPrice = document.getElementById('item-price').value;
  //   const sellerName = document.getElementById('seller-name').value;
  //   const productImg = document.getElementById('img-file').value;
  //   props.stateChange({
  //     productName: name,
  //     productPrice: itemPrice,
  //     sellerName: sellerName,
  //     timePosted: new Date(),
  //     productImg: productImg,
  //   });
  // };

  return (
    <div className='form-div'>
      <form
        className='input-box'
        method='POST'
        action='http://localhost:3000/create'
        encType='multipart/form-data'
      >
        <label for='productname'>
          Pokemon Name:
          <input name='productname' id='item-name' />
        </label>
        <label for='itemprice'>
          Pokemon Price:
          <input name='itemprice' id='item-price' />
        </label>
        <label for='sellername'>
          Seller Name:
          <input name='sellername' id='seller-name' />
        </label>
        <label for='image'>
          Upload your image:
          <input type='file' id='img-file' name='image' />
        </label>
        <button
          id='add-item'
          className='primary'
          type='submit'
          accept='.jpg, .jpeg, .png'
        >
          Post
        </button>
      </form>
      <a href='http://localhost:8080/remove'>Remove Listing</a>
    </div>
  );
};

export default PostDisplay;
