const authorisedRoute = require("express").Router();
const multer = require("multer");
const{ handleGetAllUserProducts , handleAddProduct , handleGetUserInfo} =  require("../controller/protectedroutes.controller");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/products');
    },
    filename: function (req, file, cb) {
        cb(null, `postimage-${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

authorisedRoute.post("/user/addproduct", upload.single("productimage"), handleAddProduct);
authorisedRoute.get("/user/products",handleGetAllUserProducts);
authorisedRoute.get("/user/userinfo",handleGetUserInfo) ;



module.exports = authorisedRoute ;
