import React from 'react'
import loading from "../loading.gif"

function Loader() {
  return (
    <div className='loader'>
      <img className="loader" src={loading} alt="loading" />
    </div>
  );
}

export default Loader