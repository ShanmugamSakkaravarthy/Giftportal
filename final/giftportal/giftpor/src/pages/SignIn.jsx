// import React from "react";
// import About from "./Navbar";
// import { Link } from "react-router-dom";
// function SignInForm() {
//   const [state, setState] = React.useState({
//     email: "",
//     password: ""
//   });
//   const handleChange = evt => {
//     const value = evt.target.value;
//     setState({
//       ...state,
//       [evt.target.name]: value
//     });
//   };

//   const handleOnSubmit = evt => {
//     evt.preventDefault();

//     const { email, password } = state;
//     // alert(You are login with email: ${email} and password: ${password});

//     for (const key in state) {
//       setState({
//         ...state,
//         [key]: ""
//       });
//     }
//   };

//   return (
//     <div className="form-container sign-in-container">
//       <form className="sign" onSubmit={handleOnSubmit}>
//        <h1>Sign in</h1>
        
//         {/* <div className="social-container">
//           <a href="#" className="social">
//             <i className="fab fa-facebook-f" />
//           </a>
//           <a href="#" className="social">
//             <i className="fab fa-google-plus-g" />
//           </a>
//           <a href="#" className="social">
//             <i className="fab fa-linkedin-in" />
//           </a>
//         </div> */}
//         {/* <span>or use your account</span> */}
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={state.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={state.password}
//           onChange={handleChange}
//         />
//         <a href="#">Forgot your password?</a>

//         <About />
//         <Link to='/userll'>
//         <button>Sign In</button>
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default SignInForm;

import React from "react";
import axios from "axios"; // Import Axios
import { Link } from "react-router-dom";
import About from "./Navbar";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();

    const { email, password } = state;

    try {
      // Make a POST request to your backend endpoint
      const response = await axios.get("http://localhost:8081/api/v1/auth/authenticate", { email, password });
      console.log("Login successful", response.data);

      // Clear the input fields after successful login
      setState({
        email: "",
        password: ""
      });
      

      // Redirect the user to another page upon successful login
      // You can use 'history' from 'react-router-dom' to do this
      // history.push('/dashboard'); // Example redirection
    } catch (error) {
      console.error("Login failed", error.response.data);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form className="sign" onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <About />
        <Link to="/userll">
          <button>Sign In</button>
        </Link>
      </form>
    </div>
  );
}

export default SignInForm;
