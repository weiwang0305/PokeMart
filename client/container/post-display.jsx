import React from 'react';

const PostDisplay = () => (
  <div>
    <form>
      <input id='new-post' />
      <button id='add-item' className='primary' type='submit'>
        Post
      </button>
    </form>
  </div>
);

export default PostDisplay;
