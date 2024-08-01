import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"
import Imports from '../imports';
const {  Home ,Login ,Signout ,Signup , Profile ,ToastContainer ,Bounce} = Imports
import {createBrowserRouter,RouterProvider,} from "react-router-dom";



const router = createBrowserRouter(
  
  
  [{
  path: '/',
  element: <App />,
  children:[
    {
      path: '/',
      element:<Home></Home>,
    }
  ]
  
},
{
  path: '/user/signin',
  element: <Login />,
}
,
{
  path: '/user/signup',
  element: <Signup />,
}
,
{
  path: '/user/profile',
  element:<Profile />,
}
,
{
  path: '/user/signout',
  element:< Signout/>,
}


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss={false}
draggable={false}
pauseOnHover={false}
theme="dark"
transition:Bounce/>
  </React.StrictMode>,
)
