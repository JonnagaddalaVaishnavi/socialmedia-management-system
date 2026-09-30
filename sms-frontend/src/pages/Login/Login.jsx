import React from "react";
import "./Login.css";
import { useState } from "react";
import { LoginAuth } from "../../auth/RegisterAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  async function handleSubmit() {
    const userLogin = {
      email: email,
      password: password,
    };

    if (email == "" || password == "") {
      alert("Please enter all the details");
      return;
    }

    try {
      let result = await LoginAuth(userLogin);
      localStorage.setItem("userId", result.id);
      console.log(localStorage.getItem("userId"));
      console.log(result);
      //alert(result);
      alert("Login successful");
      navigate("/Home");
    } catch (e) {
      alert("Login failed");
    }
  }
  return (
    <div className="login-container">
      <div className="left-section">
        <h1>Social Media</h1>

        <h2>Welcome Back!</h2>

        <p>
          Log in to reconnect with your friends, explore new posts, and continue
          sharing your moments.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt="Social Media"
        />
      </div>

      <div className="right-section">
        <div className="login-card">
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>Login</button>

          <p>
            Don't have an account?
            <span onClick={() => navigate("/Signup")}> Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
