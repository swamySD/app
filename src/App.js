import React from 'react';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Footer from './components/Footer/Footer';
import Orders from './pages/Orders/Orders';
import MyGigs from './pages/MyGigs/MyGigs';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message'
import Add from './pages/Add/Add'
import './App.css';


function App() {

  const Layout=()=>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      
      <Footer/>
      </>
    )
    
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/gigs',
          element:<Gigs/>
        },
        {
          path:'/gig/:id',
          element:<Gig/>
        },
        {
          path:'/orders',
          element:<Orders/>
        },
        {
          path:'/mygigs',
          element:<MyGigs/>
        },
        {
          path:'/messages',
          element:<Messages/>
        },
        {
          path:'/add',
          element:<Add/>
        },{
          path:'/message/:id',
          element:<Message/>
        },
      ]
    },
  ]);
  
  return (
    <div className='App'>
      <RouterProvider router={router}/>
      

    </div>
  );
  
}

export default App;
