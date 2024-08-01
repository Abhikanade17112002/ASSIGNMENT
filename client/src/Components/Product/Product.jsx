import React from "react";
import "./Product.styles.css";

const Product = ({ label, category, price, img_url, stock, description }) => {
  return (
    <>
      <div class="container page-wrapper">
        <div class="page-inner">
          <div class="row">
            <div class="el-wrapper">
              <div class="box-up">
                <div class="img-container">
                  <img class="img" src={img_url} alt="" />
                </div>
                <div class="img-info">
                  <div class="info-inner">
                    <span class="p-name">{label}</span>
                    <span class="p-company">{category}</span>
                    <span>{description} </span>
                  </div>
                  <div class="a-size">
                    Available sizes : <span class="size">S , M , L , XL</span>
                  </div>
                </div>
              </div>

              <div class="box-down">
                <div class="h-bg">
                  <div class="h-bg-inner"></div>
                </div>

                <a class="cart" href="#">
                  <span class="price"> ₹ {price}</span>
                  <span class="add-to-cart">
                    <span class="txt">Add in cart</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
