import "./login.style.css"
import signinhero from "./signin.png"
import Imports from '../../../imports';




const Login = () => {

  const {useState,Input,Link,toast,Bounce,axios,useNavigate} = Imports ;
  const navigate = useNavigate();
  

  const [ formValues , setFormValue ] = useState({
    email : "",
    password : ""
  }) ;
   const formInputs  = [
    {
          id : 1 ,
          label : "Email" ,
          type : "email" ,
          placeholder : "Email" ,
          name : "email" ,
          required : true ,
          errorMessage : "Email is required" ,
          pattern :"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" 
    } ,
    {
      id : 2 ,
      label : "Password" ,
      type : "password" ,
      placeholder : "Password" ,
      name:"password" ,
      required : true ,
      errorMessage : "Password is required" ,
      pattern:"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
    }
   ] ;


  const handleFormValues = (e) =>{
    e.preventDefault() ;
    setFormValue((prevState)=>({...prevState , [e.target.name] : e.target.value })) ;
 
  } ;


  const handleForm = (e)=>{
    e.preventDefault() ;
    toast.success(' 👍 User Signed In !', {
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
 
  }



  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    if (!form) {
      console.error('Form not found');
      return;
    }

    const formData = new FormData(form);
   
    try {
      const res = await axios.post("http://localhost:9000/signin", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
 
      const jwt = res.data.jsonwebtoken ;
      if( jwt )
      {
        localStorage.setItem("jwt",JSON.stringify(jwt)) ;
      }
       navigate("/");

    } catch (error) {
      console.error('Error:', error);
    }
  };


  



  return (
   <div className="login-form-container">
      <div className="home-btn ">
        <Link to={"/"}>
        <button >home</button>
        </Link>
      
      </div>
    <h2> Sign In </h2>
    <form className="login-form"    onSubmit={(e)=>handleForm(e)}>
      <div className="signin-hero">
      <img src={signinhero} alt="Sign In Hero" />
      </div>
      <div className="signin-inputs">
      {
    formInputs.map((input)=>{
      return (

      <Input
      key={input.id}
      fields={input}
      formValues={formValues}
      handleFormValues={handleFormValues}
      >
      </Input>


      ) ;
    })
   }
   <button type='submit' className="login-form-btn" onClick={(e)=>handleSignIn(e)}  >
    <h6>
    Sign In
    </h6>
    
   </button>
   
   <div className="create-account-link">
    <small>
    Dont have an account ?
    </small>
    
     <a href="">
      <Link to={"/user/signup"}>
      <small>
      Sign Up 
      </small>
      
      </Link>
      
     </a>
    
   </div>

      </div>
     
 
   </form>
   </div>
  )
}

export default Login