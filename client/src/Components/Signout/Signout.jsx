import Imports from '../../../imports';

const Signout = () => {
  const { useEffect , useNavigate , React } = Imports ;
  const navigate = useNavigate();


    useEffect(()=>{
        localStorage.removeItem('jwt') ;
        navigate("/") ;
    },[])
  return (
    <div></div>
  )
}

export default Signout