import "./Home.styles.css"
import Imports from '../../../imports'

const Home = () => {
  const { useOutletContext ,Product,formatToIndianNumberSystem,Loader,useEffect,useState} = Imports ;
   const [ productList , setProductList ] = useState([]) ;
   const [ loading , setLoading ] = useState(true) ;
   const [navBarSearch] = useOutletContext() ;

  


   useEffect(  ()=>{

    ( async ()=>{
      try {
        const data = await fetch("http://localhost:9000")
        const response = await data.json() ;
     
        setProductList(response) ; 
        setLoading(false) ;
      } catch (error) {
        console.log(`FETCH HOME PRODUCTS ERROR :: ${error}`);
        
      }
    })() ;
     
   },[]) ;
 
       

  return loading ? <Loader></Loader> :(
    <div  className="container-lg home-container">
      
   
      {
        productList.filter((product)=>product.product_label.toLowerCase().includes(navBarSearch.toLocaleLowerCase())).map((product)=>{
          return (
            <Product key={product.product_id}
            label={product.product_label} 
            category={product.product_category}
            price={formatToIndianNumberSystem(product.product_price)}
            img_url={product.product_image_url}
            stock={product.product_stock}
            description={product.product_description}
            ></Product>  
          
      

          );
        })
      }
  
          

    </div>
  )
}

export default Home