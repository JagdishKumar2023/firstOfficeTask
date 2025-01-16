import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [inputValues, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validation = () => {
    if (!inputValues.name) {
      alert("Name is required.");
      return false;
    }

    if (!inputValues.email) {
      alert("Email is required.");
      return false;
    }

    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(inputValues.email)
    ) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!inputValues.password || inputValues.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.length >= 8) {
      alert("Maximum user  limit  reached.");
      return;
    }

    storedUsers.push(inputValues);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("User successfully registered.");
    console.log("User signed up:", inputValues);

    setInputValue({ name: "", email: "", password: "" });
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label className="signup-label" htmlFor="name">
            Name:
          </label>
          <input
            className="signup-input"
            type="text"
            placeholder="Enter your name"
            value={inputValues.name}
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="signup-label" htmlFor="email">
            Email:
          </label>
          <input
            className="signup-input"
            type="email"
            placeholder="Enter your email"
            value={inputValues.email}
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="signup-label" htmlFor="password">
            Password:
          </label>
          <input
            className="signup-input"
            type="password"
            placeholder="Enter password"
            value={inputValues.password}
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <button className="signup-button" type="submit">
          Submit
        </button>
      </form>
      <p className="signup-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
