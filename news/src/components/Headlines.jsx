import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineForward } from "react-icons/ai";

function Headlines() {
  const [headlines, setHeadlines] = useState([]);
  useEffect(() => {
    axios.get(`https://saurav.tech/NewsAPI/everything/cnn.json`).then((res) => {
      setHeadlines([...res.data.articles]);
    });
  }, [headlines]);
  return (
    <div className="headlines">
      {headlines.map((datas) => (
        <div className="headlines-container">
            <p>{<AiOutlineForward />}</p>
          <img id="headlinesImg" src={datas.urlToImage} alt="news-image" />
          <h4>
            {datas.title}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default Headlines;
