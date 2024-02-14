import React from "react";

function SignUpForm1() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: ""
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };
  const navi = () =>{
    alert("Admin can't sign up")
  }

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { name, email, password, confirmPassword, mobileNumber, role } = state;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }

    // alert(You are sign up with Name: ${name}, Email: ${email}, Password: ${password}, Mobile Number: ${mobileNumber}, Role: ${role});

    // Clear form fields after submission
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <>
    <div className="form-container sign-up-container">
      <form className="sign" onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        {/* <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div> */}
        {/* <span>or use your email for registration</span> */}
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
        <div>
        </div>
        <button onClick={navi}>Sign Up</button>
      </form>
    </div>
    </>
  );
}

export default SignUpForm1;