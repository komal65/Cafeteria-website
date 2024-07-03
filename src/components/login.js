import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Login.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("hellooo you are logged in");
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      // If authentication was successful, store the user object in local storage and redirect the user to the home page
      localStorage.setItem('user', JSON.stringify(response.data));
      window.location.href = '/';
      
    } catch (error) {
      console.error(error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="g1">
      <Link to="/"> <button className="back_btn" ><i className="fa fa-arrow-left"></i></button></Link>
      <div className="login_form_container">
        <div className="left">

          
          <form onSubmit={handleSubmit} className="form_container">
            <h1>Welcome</h1>
            {error && <p className="error_msg">{error}</p>}
            <input
              className="linput"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="linput"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="lbtn" type="submit">
              Log In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here ?</h1>
          <Link to="/register">
            <button type="button" className="white_btn">
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;