import "./AddProduct.styles.css";
import addproducthero from "./AddProduct.webp"
import Imports from "../../../imports";

const AddProduct = ({ setUserProducts, user }) => {
  const { axios ,toast,Bounce,Input ,useEffect,useState} = Imports ;
  
  const fetchUserProdcts  =  async () =>{
    
    try {
      
      const response = await axios.get('http://localhost:9000/user/products', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':localStorage.getItem('jwt')
        }
      });
      setUserProducts(response.data.rows) ;
    } catch (error) {
      
    }
    finally{

    }
   
  }

  useEffect(()=>{
    fetchUserProdcts();
  },[]);
  const [formValues, setFormValue] = useState({
    label: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    productimage: null,
  });

  const nameFields = [
    {
      id: 1,
      label: "Label",
      type: "text",
      placeholder: "Label",
      name: "label",
      required: true,
      errorMessage: "Label is required",
      pattern: "^[A-Za-z]+(?:[-' ][A-Za-z]+)*$",
    },
    {
      id: 2,
      label: "Brand",
      type: "text",
      placeholder: "Brand",
      name: "brand",
      required: true,
      errorMessage: "Brand is required",
      pattern: "^[A-Za-z]+(?:[-' ][A-Za-z]+)*$",
    },
  ];

  const formInputs = [
    {
      id: 3,
      label: "Category",
      type: "text",
      placeholder: "Category",
      name: "category",
      required: true,
      errorMessage: "Category is required",
      pattern: "^[A-Za-z]+(?:[-' ][A-Za-z]+)*$",
    },
    {
      id: 4,
      label: "Price",
      type: "number",
      placeholder: "Price",
      name: "price",
      required: true,
      errorMessage: "Enter correct price",
      min: 1,
    },
    {
      id: 5,
      label: "Stock",
      type: "number",
      placeholder: "Stock",
      name: "stock",
      required: true,
      errorMessage: "Stock is required",
      min: 1,
    },
    {
      id: 6,
      label: "Description",
      type: "text",
      placeholder: "Description",
      className: "description",
      name: "description",
      required: true,
      errorMessage: "Product description is required",
    },
    {
      id: 7,
      label: "Product Image",
      type: "file",
      placeholder: "Product Image",
      name: "productimage",
      required: true,
      errorMessage: "Product Image is required",
    },
  ];

  const handleFormValues = (e) => {
    const { name, value, type, files } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleFormSubmit = async (e,fetchUserProdcts) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }

    const currentUserToken = localStorage.getItem("jwt");

    try {
      const res = await axios.post("http://localhost:9000/user/addproduct",formData,{
          headers: {
            "Content-Type": "multipart/form-data",
            userToken: currentUserToken,
          },
        }
      );
      toast.success("👍 Product added successfully!", {
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
      fetchUserProdcts();
      setFormValue({
        label: "",
        brand: "",
        category: "",
        price: "",
        stock: "",
        description: "",
        productimage: null,
      });
    } catch (error) {
      toast.error("Failed to add product. Please try again.", {
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
      console.error("Error:", error);
    }
    finally{
      console.log("FINALLY");
    }


    
  };

  return (
    <div className="addproduct-form-container">
      <form className="addproduct-form" onSubmit={(e)=>handleFormSubmit(e,fetchUserProdcts)}>
        <div className="addproduct-hero">
          <img src={addproducthero} alt="Add Product" />
        </div>
        <div className="addproduct-inputs">
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
          <button type="submit" className="addproduct-form-btn">
            <h6>Add Product</h6>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
