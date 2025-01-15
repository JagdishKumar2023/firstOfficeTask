import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [inputValues, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.length >= 8) {
      alert("Maximum user limit reached.");
      return;
    }

    storedUsers.push(inputValues);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    console.log("User signed up:", inputValues);
    alert("User is registered.");
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
          />
        </div>
        <button className="signup-button" type="submit">
          Submit
        </button>
      </form>
      <p className="signup-link">
        Already have an account? <Link to="/signup">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
