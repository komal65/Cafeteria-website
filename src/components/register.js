import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css"
function RegisterForm() {
  const [formState, setFormState] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log("posted");
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        formState,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const userName = formState.username || "User";
      console.log(userName);
      localStorage.setItem("userName", userName);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="f-cont">
       <Link to="/"> <button className="back_btn" ><i class="fa fa-arrow-left"></i></button></Link>
      <div className="signup_form_container">
        <div className="right">
          <form action="/" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
            className="linput"
              name="fullname"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
            />
            <input
            className="linput"
              name="username"
              placeholder="Username"
              value={formState.username}
              onChange={handleChange}
            />
            <input
            className="linput"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
            className="linput"
              type="password"
              name="password"
              placeholder="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="lbtn"
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="left">
          <h1> Already have an account?</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Log in
            </button>
          </Link>
        </div>
       
        {/* <div>
        Already have an account? <Link to="/login">Click here to login</Link>.
      </div>
          */}
      </div>
    </div>
  );
}

export default RegisterForm;