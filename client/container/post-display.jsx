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
    <div>
      <form
        className='input-box'
        method='POST'
        action='http://localhost:3000/create'
      >
        <label for='productname'>
          Product Name:
          <input name='productname' id='item-name' value='Spine' />
        </label>
        <label for='itemprice'>
          Item Price:
          <input name='itemprice' id='item-price' value='50' />
        </label>
        <label for='sellername'>
          Seller Name:
          <input name='sellername' id='seller-name' value='Josh' />
        </label>
        <label>
          Upload your image:
          <input type='file' id='img-file' />
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
    </div>
  );
};

export default PostDisplay;
