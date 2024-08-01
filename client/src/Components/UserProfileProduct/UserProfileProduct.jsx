import "./UserProfileProduct.styles.css"
import Imports from "../../../imports"

const UserProfileProduct = ({product}) => {
    const {formatToIndianNumberSystem } = Imports ;

  return (

    <>
    <div class="user-profile-product-card">
      <div class="user-profile-product-image">
          <img src={product.product_image_url} alt="Product Image"/>
      </div>
      <div class="user-profile-product-info">
          <div class="user-profile-product-details">
              <p><strong>Label:</strong> {product.product_label}</p>
              <p><strong>Description:</strong> {product.product_description}</p>
              <p><strong>Price:</strong> {formatToIndianNumberSystem(product.product_price)}</p>
              <p><strong>Brand:</strong> {product.product_brand}</p>
              <p><strong>Category:</strong> {product.product_category}</p>
          </div>
          <div class="user-profile-product-actions">
              <button class="btn btn-primary btn-sm">View</button>
              <button class="btn btn-primary btn-sm">Edit</button>
              <button class="btn btn-primary btn-sm">Delete</button>
              <button class="btn btn-primary btn-sm">Share</button>
          </div>
      </div>
  </div>
  </>
  )
}

export default UserProfileProduct