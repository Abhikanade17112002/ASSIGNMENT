import "./Profile.styles.css"
import Imports from '../../../imports'



const Profile = () => {
   const {UserProfile,InfoCards ,UserProducts,Link,useNavigate,useEffect } = Imports ;
  const navigate = useNavigate()
  const user = localStorage.getItem("jwt") ;
  

    useEffect(()=>{
      if( user === "" || user === null )
        {
          navigate("/user/signin");
        }
    },[]);
    
   if( user === "" || user === null )
   {
    return ;
   }

  return (
    <div className="container  profile-container">
      <div className="home-btn ">
        <Link to={"/"}>
        <button >home</button>
        </Link>
      
      </div>
      
      <UserProfile user={user}/>
      <InfoCards />
      <UserProducts user={user} />
    </div>
  )
}

export default Profile