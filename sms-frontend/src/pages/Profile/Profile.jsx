import { GetPostById, UpdateProfile } from "../../auth/ProfileAuth";
import "./Profile.css";
import { useState, useEffect } from "react";

export default function Profile() {
  let userId = localStorage.getItem("userId");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [editing, setEditing] = useState("");
  const [uploading, setUploading] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    GetPostById(userId)
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function chooseImage() {
    document.getElementById("profileInput").click();
  }

  let cloudName = "gx8mdbyi"; //da2oe67ln
  let uploadPreset = "sms-preset";

  function onFileSelect() {
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
        setProfileImage(data.secure_url);
        setUploading(false);
      })
      .catch((err) => console.log(err));
  }

  async function onSaveProfile() {
    const profileData = {
      name: name,
      bio: bio,
      profileImage: profileImage,
      userId: Number(userId),
      email: email,
    };

    try {
      let res = await UpdateProfile(profileData);
      alert(res);
      setEditing(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-image-section">
          {profileImage === "" ? (
            <div className="profile-image">
              {name === "" ? "A" : name.charAt(0).toUpperCase()}
            </div>
          ) : (
            <img src={profileImage} alt="Profile" className="profile-image" />
          )}

          {editing && (
            <button className="edit-btn" onClick={chooseImage}>
              ✏
            </button>
          )}

          <input
            id="profileInput"
            type="file"
            hidden
            accept="image/*"
            onChange={onFileSelect}
          />
        </div>

        {uploading && <p style={{ marginTop: "15px" }}>Uploading...</p>}

        {editing ? (
          <>
            <input
              className="profile-input"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              className="profile-textarea"
              placeholder="Enter Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <input
              className="email-input"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        ) : (
          <>
            <h2 className="profile-name">{name === "" ? "Your Name" : name}</h2>

            <p className="bio">{bio === "" ? "No Bio Added" : bio}</p>

            <p className="email">{email === "" ? "No Email Added" : email}</p>
          </>
        )}

        <div className="profile-stats">
          <div>
            <h3>0</h3>

            <span>Posts</span>
          </div>
        </div>

        {editing ? (
          <button className="profile-btn" onClick={onSaveProfile}>
            Save Profile
          </button>
        ) : (
          <button className="profile-btn" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        )}
      </div>

      <div className="posts-section">
        <h2>📸 My Posts</h2>

        <div className="post-grid">
          {posts.length === 0 ? (
            <div className="post-card">
              <h3>No Posts Yet</h3>
              <p>Share your first post.</p>
            </div>
          ) : (
            posts.map((post) => (
              <div className="post-card" key={post.id}>
                <div className="post-header">
                  <div className="post-user-image">
                    {name === "" ? "A" : name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3>{name}</h3>
                  </div>
                </div>

                <img src={post.postImage} alt="Post" className="post-image" />

                <div className="post-content">
                  <h3>{post.title}</h3>

                  <p>{post.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
