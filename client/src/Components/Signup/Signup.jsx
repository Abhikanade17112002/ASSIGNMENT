import React, { useState } from "react";
import "./signup.styles.css";
import signuphero from "./signup.png"
import Imports from "../../../imports";


const Signup = () => {

  const {useNavigate ,toast,Input,axios,Link,Bounce} = Imports ;
  const navigate = useNavigate();
  const [formValues, setFormValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    userProfile: "",
  });

  const nameFields = [
    {
      id: 1,
      label: "First Name",
      type: "text",
      placeholder: "First Name",
      name: "firstname",
      required: true,
      errormessage: "First Name is required",
    },
    {
      id: 2,
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
      name: "lastname",
      required: true,
      errormessage: "Last Name is required",
    },
  ];

  const formInputs = [
    {
      id: 3,
      label: "Username",
      type: "text",
      placeholder: "Username",
      name: "username",
      required: true,
      errormessage: "Username is required",
      pattern: "^[a-zA-Z0-9]{3,16}$",
    },
    {
      id: 4,
      label: "Email",
      type: "email",
      placeholder: "Email",
      name: "email",
      required: true,
      errormessage: "Email is required",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    },
    {
      id: 5,
      label: "Password",
      type: "password",
      placeholder: "Password",
      name: "password",
      required: true,
      errormessage: "Password is required",
      pattern: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$",
    },
    {
      id: 6,
      label: "Profile Image",
      type: "file",
      placeholder: "Profile Image",
      name: "userProfile",
      required: true,
      errormessage: "Profile Image is required",
    },
  ];

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    if (!form) {
      console.error('Form not found');
      return;
    }

    const formData = new FormData(form);
    try {
      const res = await axios.post("http://localhost:9000/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      const jwt = res.data.jsonwebtoken ;
      console.log(res,"RESPONSE");
      if( jwt )
      {
        localStorage.setItem("jwt",JSON.stringify(jwt)) ;
      }
      navigate("/") ;


    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFormValues = (e) => {
    e.preventDefault();
    if (e.target.name === "userProfile") {
      setFormValue((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files[0],
      }));
    } else {
      setFormValue((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    toast.success("👍 User Signed Up!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    console.log(formValues);
  };

  return (
    <>
      <div className="signup-form-container">
      <div className="home-btn ">
        <Link to={"/"}>
        <button >home</button>
        </Link>
      
      </div>
        <h2> Sign Up </h2>
        <form className="signup-form" onSubmit={handleForm}>
          <div className="signup-hero">
            <img src={signuphero} alt="" />
          </div>
          <div className="signup-inputs">
            <div className="form-name-fields">
              {nameFields.map((input) => (
                <Input
                  key={input.id}
                  fields={input}
                  formValues={formValues}
                  handleFormValues={handleFormValues}
                />
              ))}
            </div>
            {formInputs.map((input) => (
              <Input
                key={input.id}
                fields={input}
                formValues={formValues}
                handleFormValues={handleFormValues}
              />
            ))}
            <button type="submit" className="signup-form-btn" onClick={handleSignUp}>
              <h6>Sign Up</h6>
            </button>
            <div className="signup-account-link">
              <small>Already have an account?</small>
              <Link to="/user/signin">
                <small>Sign In</small>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

