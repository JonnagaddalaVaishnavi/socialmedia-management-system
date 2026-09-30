import { useState } from "react";
import "./register.css";
import { RegisterAuth } from "../../auth/RegisterAuth";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Register() {
  const [userName, setUserName] = useState(""); //step 1: creating variables using useState (used by importing useState from react)
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  let navigate = useNavigate();

  async function HandleSubmit() {
    //step 3: create the objects
    const user = {
      userName: userName,
      password: password,
      email: email,
      dob: dob,
    };

    if (userName == "" || password == "" || dob == "" || email == "") {
      alert("please fill all the details");
      return;
    }

    try {
      let result = await RegisterAuth(user);
      alert(result);
      navigate("/");
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="signup-container">
      <div className="left-section">
        <h1>Social Media</h1>

        <h2>Connect. Share. Inspire.</h2>

        <p>
          Share your memories with the world. Discover amazing people and
          connect with friends.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt="Social Media"
        />
      </div>

      <div className="right-section">
        <div className="signup-card">
          <h2>Create Account</h2>

          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)} //when any event is happenning set the user name to that typed value
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={HandleSubmit}>Sign Up</button>

          <p>
            Already have an account?
            <span onClick={() => navigate("/")}> Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
