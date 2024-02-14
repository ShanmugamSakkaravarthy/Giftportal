import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupForm() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    role: "user"
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { name, email, password, confirmPassword, mobileNumber, role } = state;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }

    // Send signup request to backend
    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/register', {
        name,
        email,
        password,
        mobileNumber,
        role
      });
      
      // Assuming successful signup redirects user to login page
      navigate('/user');
    } catch (error) {
      console.error("Signup error:", error);
      // Handle signup error here
      // You may set an error state to display to the user
    }

    // Clear form fields after submission
    setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNumber: "",
      role: "user"
    });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <input
          type="text"
          name="mobileNumber"
          value={state.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;