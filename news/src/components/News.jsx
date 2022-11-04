import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import Like from "./Like";
import Comment from "./Comment";
import Loader from "./Loader";

function News(props) {
  const [data, setData] = useState(null)
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
  });

  useEffect(() => {
    axios
      .get(
        `https://saurav.tech/NewsAPI/everything/cnn.json`
      )
      .then((response) => {
        setData([...response.data.articles]);
        // console.log(response.data.articles);
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
        backgroundColor: "white"
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
        <BsFillMoonFill />
      </button>
      <section className="section" style={theme}>
        {data
          ? data
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
                  <img id="img" src={datas.urlToImage} alt="" />
                  <h5 id="author">{datas.author}</h5>
                  <h3>{datas.title}</h3>
                  <h4>{datas.description}</h4>
                  <a href={datas.url} target="_blank">
                    Read more...
                  </a>
                  <div className="bottom">
                    <Like />
                    <Comment />
                    <AiTwotoneDelete
                      id="dltBtn"
                      onClick={() => handleDeletePost(datas.url)}
                    />
                  </div>
                </article>
              ))
          : <Loader />}
      </section>
    </>
  );
}
export default News;
