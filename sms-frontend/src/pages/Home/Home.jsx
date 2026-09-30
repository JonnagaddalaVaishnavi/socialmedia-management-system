import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import { GetAllPost } from "../../auth/HomeAuth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  async function displayPosts() {
    let res = await GetAllPost();
    setPosts(res);
    console.log(res);
  }

  useEffect(() => {
    displayPosts();
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">🚀 RockSocial</div>

        <nav>
          <button onClick={() => navigate("/Home")}>🏠 Home</button>

          <button onClick={() => navigate("/Post")}>➕ Create Post</button>

          <button onClick={() => navigate("/Profile")}>👤 Profile</button>
        </nav>

        <button className="logout">Logout</button>
      </header>

      <section className="hero">
        <h1>Welcome Back 👋</h1>

        <p>Discover amazing moments shared by everyone.</p>

        <button className="hero-btn" onClick={() => navigate("/Post")}>
          Share Your Story
        </button>
      </section>

      <div className="feed-title">
        <h2>Latest Posts</h2>

        <p>Explore what our community has been sharing.</p>
      </div>

      <div className="feed">
        {posts.length == 0 ? (
          <div className="no-posts">
            <h2>No Posts Yet</h2>

            <p>Be the first one to create a post.</p>
          </div>
        ) : (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-user">👤 User {post.userId}</div>

              <img src={post.postImage} alt="" />

              <div className="content">
                <h2>{post.title}</h2>

                <p>{post.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
