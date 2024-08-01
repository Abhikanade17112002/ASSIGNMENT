import "bootstrap/dist/css/bootstrap.min.css"
import Imports from "../imports.js"
const { React , Navbar , Outlet , Footer , useEffect , useState} = Imports ;



const App = () => {
const [ navBarSearch , setNavBarSearch ] = useState("") ;

  useEffect(()=>{
    const jwt = localStorage.getItem("jwt") ;

    if( jwt == null )
    {
      localStorage.setItem("jwt","") ;
    }
   
  },[])


 
  return (
    <>
    
    <Navbar  navBarSearch={navBarSearch} setNavBarSearch={setNavBarSearch} ></Navbar>
    <Outlet context={[navBarSearch]} ></Outlet>
    <Footer></Footer>

    </>
  )
}

export default App