import "./UserProducts.styles.css";
import Imports from "../../../imports";

const UserProducts = ({ user }) => {
  const { AddProduct, UserProfileProduct, useState } = Imports;
  const [userProducts, setUserProducts] = useState([]);

  return (
    <>
      <div className="container-md  user-products-container">
        {userProducts.map((product) => (
          <UserProfileProduct product={product} />
        ))}
      </div>

      <AddProduct setUserProducts={setUserProducts} user={user}></AddProduct>
    </>
  );
};

export default UserProducts;
