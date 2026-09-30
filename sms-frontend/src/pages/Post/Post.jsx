import "./Post.css";
import { useState } from "react";
import React from "react";
import { UpdatePost } from "../../auth/PostAuth";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postImage, setPostImage] = useState("");
  const [uploading, setUploading] = useState("");
  const navigate = useNavigate();

  let cloudName = "gx8mdbyi"; //da2oe67ln
  let uploadPreset = "sms-preset";
  let userId = Number(localStorage.getItem("userId"));

  async function createPost() {
    let postData = {
      title: title,
      description: description,
      postImage: postImage,
      userId: userId,
    };

    try {
      let result = await UpdatePost(postData); //calling the API
      console.log(result);
      alert("Post added successfully");
      navigate("/Home");
      //   setEditing(false);
    } catch (err) {
      console.log(err);
    }
  }

  function onFileSelect(event) {
    let file = event.target.files[0];
    if (!file) return;

    let formData = new FormData(); //acc to story it acts as a box
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset); //internal folder inside cloudinary

    setUploading(true);

    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    }) //api call
      .then((res) => res.json())
      .then((data) => {
        setPostImage(data.secure_url);
        setUploading(false);
      })
      .catch((err) => console.log(err));
  }

  function chooseImage() {
    document.getElementById("postInput").click();
  }

  return (
    <div className="post-page">
      <div className="post-wrapper">
        <div className="post-top">
          <div>
            <h1>Create New Post</h1>
            <p>Share something with the world</p>
          </div>
        </div>

        <div className="post-body">
          <div className="image-side">
            <h2>Post Image</h2>

            <div className="image-box">
              {postImage === "" ? (
                <div className="empty-image">
                  <p>No Image Selected</p>
                  <span>Choose an image for your post</span>
                </div>
              ) : (
                <img src={postImage} alt="Post" className="preview-image" />
              )}
            </div>

            <input
              id="postInput"
              type="file"
              hidden
              accept="image/*"
              onChange={onFileSelect}
            />

            <button className="upload-btn" onClick={chooseImage}>
              Choose Image
            </button>

            {uploading && <p className="upload-text">Uploading...</p>}
          </div>

          <div className="details-side">
            <h2>Post Details</h2>

            <div className="form-group">
              <label>Title</label>

              <input
                type="text"
                className="post-input"
                placeholder="Enter your post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>description</label>

              <textarea
                className="post-textarea"
                placeholder="Write something..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button className="create-btn" onClick={createPost}>
              Create Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
