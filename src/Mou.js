// Mou.jsx
import React from 'react';

const Mou = (props) => {
  // Determine the id based on the classSelection prop
  const mouId = props.classelection === 'True' ? 'mouGallery' : '';
  console.log(props.classelection)
  return (
    <div className='MuoContainer'>
      <img
        className='imageGallery'
        id={mouId}
        src={props.img}
        alt="MOU_Image"
      />
    </div>
  );
};

export default Mou;
