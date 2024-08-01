const authorisedRoute = require("express").Router();
const connectToDataBase = require("../database/databaseconnection");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const jwt = require("jsonwebtoken");

const handleGetAllProducts = async (request, response) => {
  connectToDataBase.then(async (connectionInstance) => {
    const [rows, fields] = await connectionInstance.execute(
      "SELECT * FROM products"
    );
    response.json(rows);
  });
};

const handleGetUserInfo = async (request, response) => {

  let userToken = request.headers.authorization;

  userToken = userToken.replace(/^"|"$/g, "");
  connectToDataBase.then(async (connectionInstance) => {
    try {
      const decoded = jwt.verify(userToken, process.env.JSWEBTOKENSECRET);
      const seller_id = decoded.id;
      const [rows, fields] = await connectionInstance.execute(
        "SELECT * FROM sellers WHERE seller_id = ?",
        [seller_id]
      );
      console.log(rows);
      response.json(rows);
    } catch (error) {
      console.log(`SERVER ERROR :: ERROR TO FETCH USER INFO FROM DB ${error}`);
    }
  });
};
const handleGetAllUserProducts = async (request, response) => {
  let userToken = request.headers.authorization;

  userToken = userToken.replace(/^"|"$/g, "");
  console.log(userToken, "here I Am Here");

  const decoded = jwt.verify(userToken, process.env.JSWEBTOKENSECRET);

  connectToDataBase.then(async (connectionInstance) => {
    try {
      const sellerId = decoded.id;

      const [rows, fields] = await connectionInstance.execute(
        "SELECT * FROM products WHERE seller_id = ?",
        [sellerId]
      );

      response.json({ rows });
    } catch (error) {
      console.error("Error executing query:", error);
    }
  });
};
const handleAddProduct = async (request, response) => {
  const { label, brand, category, price, stock, description } = request.body;
  const productImage = request.file;
  let currentSellerToken = request.headers["usertoken"];
  currentSellerToken = currentSellerToken.replace(/^"(.*)"$/, "$1");

  const currentSeller = jwt.verify(
    currentSellerToken,
    process.env.JSWEBTOKENSECRET
  );
  const product_id = uuidv4();

  console.log(
    product_id,
    currentSeller.id,
    label,
    brand,
    category,
    description,
    price,
    stock,
    `http://localhost:9000/uploads/products/${productImage.filename}`
  );

  connectToDataBase
    .then(async (connectionInstance) => {
      try {
        const query = `
        INSERT INTO products (
            product_id,
            seller_id,
            product_label,
            product_brand,
            product_category,
            product_description,
            product_price,
            product_stock,
            product_image_url
        ) VALUES (?, ?,?, ?, ?, ?, ?, ?, ?);
    `;

        const values = [
          product_id, 
          currentSeller.id,
          label,
          brand,
          category,
          description,
          price,
          stock || 0,
          `http://localhost:9000/uploads/products/${productImage.filename}`,
        ];

        try {
          const [res] = await connectionInstance.execute(query, values);
          console.log("Product added successfully:", res);
          response.json({ message: "Product added successfully", res });
        } catch (error) {
          console.error("Error executing query:", error);
          throw error;
        }
      } catch (error) {
        console.error("Error executing query:", error);
        response.status(500).json({ message: "Creation error" });
      }
    })
    .catch((dbError) => {
      console.error("Database connection error:", dbError);
      response.status(500).json({ message: "Database connection error" });
    });
};

module.exports = {
  handleAddProduct,
  handleGetAllProducts,
  handleGetAllUserProducts,
  handleGetUserInfo,
};
