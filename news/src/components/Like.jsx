import React from 'react';
import { useState } from 'react';
import { BsFillHandThumbsUpFill } from "react-icons/bs";

function Like() {
    const [count, setCount] = useState(0);

    const handleLike = () => {
        setCount((prev) => prev + 1)
    }
  return (
    <>
      <span id="like">
        <BsFillHandThumbsUpFill onClick={handleLike} />
        {count}
      </span>
    </>
  );
}

export default Like;