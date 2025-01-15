import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const storedUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (storedUser) {
      console.log("Login successful");
      alert("Login successful");
      navigate("/landing-page");
    } else {
      console.log("Try again");
      alert("Incorrect email or password");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="form-input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      <p className="signup-link">
        Dont have an account? <Link to="/">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
