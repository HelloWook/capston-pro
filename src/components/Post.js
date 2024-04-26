// Post.js
import React, { useEffect } from "react";
import Card from "./Card";
import "../styles/post.css";
import useGetPosts from "../hooks/useGetPosts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
function Post() {
  const [deleteCard, isDeleteCard] = useState(false);
  const posts = useGetPosts();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  useEffect(() => {
    console.log(deleteCard);
  }, [deleteCard]);

  const toggleDeleteCard = () => {
    isDeleteCard((data) => !data);
  };
  return (
    <div className="post">
      {isLoggedIn && (
        <div className="button-list">
          <h2 className="img-head">이미지 게시판</h2>
          {isLoggedIn && (
            <button className="upload-button">
              <Link to="/community/upload">등록</Link>
            </button>
          )}
          {isLoggedIn && (
            <button className="upload-button" onClick={toggleDeleteCard}>
              삭제
            </button>
          )}
        </div>
      )}
      <div className="cards">
        <div className="card-section">
          {posts.map((post) => (
            <Card
              key={post.PostID}
              title={post.Title}
              email={post.email}
              deleteCard={deleteCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
