import React from 'react';

const PostDisplay = (props) => {
  const grabData = (event) => {
    event.preventDefault();
    const name = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value;
    const sellerName = document.getElementById('seller-name').value;
    const productImg = document.getElementById('img-file').value;
    props.stateChange({
      productName: name,
      productPrice: itemPrice,
      sellerName: sellerName,
      timePosted: new Date(),
      productImg: productImg,
    });
  };

  return (
    <div>
      <form className='input-box' onSubmit={grabData}>
        <label>
          Product Name:
          <input id='item-name' />
        </label>
        <label>
          Item Price:
          <input id='item-price' />
        </label>
        <label>
          Seller Name:
          <input id='seller-name' />
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
