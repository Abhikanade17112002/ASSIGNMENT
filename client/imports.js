import  React  ,  { useEffect , useState } from "react";
import Navbar from "./src/Components/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "./src/Components/Footer/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css" ;
import Home from "./src/Components/Home/Home.jsx";
import Login from "./src/Components/Login/Login.jsx";
import Signout from "./src/Components/Signout/Signout.jsx";
import Signup from "./src/Components/Signup/Signup.jsx";
import Profile from "./src/Components/Profile/Profile.jsx";
import { Bounce, toast, ToastContainer } from "react-toastify";
import formatToIndianNumberSystem from "./src/utility/numbersystem.js";
import { IoIosContact } from "react-icons/io";
import { RiMessageLine } from "react-icons/ri";
import { FaRegShareSquare } from "react-icons/fa";
import axios from "axios";
import AddProduct from "./src/Components/AddProduct/AddProduct.jsx";
import UserProfile from "./src/Components/UserProfile/UserProfile.jsx";
import UserProfileProduct from "./src/Components/UserProfileProduct/UserProfileProduct.jsx";
import { useNavigate } from "react-router-dom";
import Input from "./src/Components/Input/Input.jsx";
import InfoCards from "./src/Components/InfoCards/InfoCards.jsx";
import UserProducts from "./src/Components/UserProducts/UserProducts.jsx";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import NavbarDropDown from "./src/NavbarDropDown/NavbarDropDown.jsx";
import { FaUserGraduate, FaChalkboardTeacher, FaSchool, FaHandHoldingUsd } from 'react-icons/fa';
import Loader from "./src/Components/Loader/Loader.jsx";
import { useOutletContext } from 'react-router-dom'
import Product from "./src/Components/Product/Product.jsx";

const Imports = {
    Product ,
    useOutletContext ,
    Loader,
    FaUserGraduate,
    FaChalkboardTeacher,
    FaSchool,
    FaHandHoldingUsd,
    NavbarDropDown,
    FaSearch ,
    TiShoppingCart ,
    GiHamburgerMenu ,
    ImCross ,
    UserProducts,
    useNavigate ,
   toast ,
   Input,
    AddProduct ,
    UserProfile,
    UserProfileProduct,
    Navbar,
    InfoCards ,
    Footer,
    useEffect ,
    useState ,
    Outlet ,
    React ,
  axios,
    Home ,
    Login ,
    Signout ,
    Signup ,
    Profile ,
    Bounce ,
    ToastContainer,
    Link,
    formatToIndianNumberSystem ,
    IoIosContact,
    RiMessageLine,
    FaRegShareSquare,

} ;






export default Imports ;