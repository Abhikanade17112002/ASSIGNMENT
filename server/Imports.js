const express = require("express") ;
const connectToDataBase = require("./database/databaseconnection") ;
const path = require("path") ;
const cors = require("cors") ;
const autheticationRoute = require("./routes/authentication.routes") ;
const authorisedRoute = require("./routes/protected.routes") ;
const multer = require("multer") ;
const { handleAddProduct , handleGetAllProducts ,handleGetUserInfo ,handleGetAllUserProducts} = require("./controller/protectedroutes.controller") ;
const {handleUserSignIn,handleUserSignUp} = require("./controller/authentication.controllers") ;
const Imports = {
     express ,
     connectToDataBase ,
     path ,
     cors ,
     autheticationRoute ,
     authorisedRoute ,
     multer,
     handleAddProduct,
     handleGetAllProducts,
     handleGetUserInfo,
     handleGetAllUserProducts,
     handleUserSignIn,
     handleUserSignUp
} ;


module.exports = Imports ;

