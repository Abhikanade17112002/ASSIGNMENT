const {handleUserSignIn, handleUserSignUp} = require("../controller/authentication.controllers") ;
const authenticationRoute = require("express").Router();
const multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/userprofile');
    },
    filename: function (req, file, cb) {
        cb(null, `profileimage-${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

authenticationRoute.post("/signup", upload.single("userProfile"), handleUserSignUp);
authenticationRoute.post("/signin",handleUserSignIn);

module.exports = authenticationRoute;