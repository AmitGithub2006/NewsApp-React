import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";
import Like from "./Like";
import Comment from "./Comment";
import Loader from "./Loader";

function News(props) {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
  });

  useEffect(() => {
    axios
      .get(`https://saurav.tech/NewsAPI/everything/cnn.json`)
      .then((response) => {
        setData([...response.data.articles]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTheme = () => {
    if (theme.color === "black") {
      setTheme({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setTheme({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  const handleDeletePost = (url) => {
    let filteredData = data.filter((item) => item.url !== url);
    console.log(filteredData);
    setData(filteredData);
  };

  return (
    <>
      <button className="toggleBtn" onClick={handleTheme}>
        <MdOutlineLightMode />
      </button>
      <section className="section" style={theme}>
        {data ? (
          data
            .filter((val) => {
              if (props.search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(props.search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((datas) => (
              <article className="article" key={datas.url}>
                <div className="first">
                  <img id="img" src={datas.urlToImage} alt="news-pic" />
                  <h3 className="title">{datas.title}</h3>
                </div>
                <h4 id="author">Author : {datas.author}</h4>
                <h4 className="desc">{datas.description}</h4>
                {/* <button className="url"> */}

                <a href={datas.url} target="_blank" rel="noreferrer">
                  Read more...
                </a>
                {/* </button> */}
                <div className="bottom">
                  <Like />
                  <AiTwotoneDelete
                    id="dltBtn"
                    onClick={() => handleDeletePost(datas.url)}
                  />
                </div>
                <Comment />
              </article>
            ))
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
}
export default News;
