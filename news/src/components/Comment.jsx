import React, { useState } from "react";

function Comment() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleInput = (event) => {
    setCommentText(event.target.value);
  };

  const handleComment = () => {
    setComments([...comments, commentText]);
  };

  return (
    <>
      <div>
        <input
          id="commentInput"
          type="text"
          placeholder="Leave a comment..."
          value={commentText}
          onChange={handleInput}
        />
        <button id="commentBtn" onClick={handleComment}>
          Post
        </button>
      </div>
      {comments.map((comment) => (
        <div id="commentOutput">
          <span>{comment}</span>
          <button
            onClick={() => {
              let filteredComment = comments.filter(
                (value) => value !== comment
              );
              setComments([...filteredComment]);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default Comment;
