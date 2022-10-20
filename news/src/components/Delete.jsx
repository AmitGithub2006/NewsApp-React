// import axios from 'axios';
// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { AiTwotoneDelete } from "react-icons/ai";

// function Delete() {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//       axios.get(`https://saurav.tech/NewsAPI/everything/cnn.json`).then((res) => {
//         setPosts(res.data.articles);
//       })
//     })

//     const handleDeletePost = (url) => {
//       let filteredData = posts.filter((item) => item.url !== url);
//       // console.log(filteredData);
//       // setPosts(filteredData);
//     };

//   return (
//     <>
//     {posts.map((datas) => (
//       // <div key={datas.url}>
//       // </div>
//         // <AiTwotoneDelete id="dltBtn" onClick={handleDeletePost(datas.url)} />
//       ))}
//       </>
//   );
// }

// export default Delete;