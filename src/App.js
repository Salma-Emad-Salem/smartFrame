import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import About from './component/About/About';
import Details from './component/details/Details';
import Footer from './component/footer/Footer';
import Home from './component/Home/Home';
import Portfilio from './component/portfilio/Portfilio';
import Contact from './component/contact/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/Layout/Layout';

const myRouter =createBrowserRouter([
  {path:'/',element:<Layout/> ,children:[
  {path:'/', element:<Home/>},
  {path:'/about', element:<About/>},
  {path:'/portfolio', element:<Portfilio/>},
  {path:'/contact', element:<Contact/>},
]
}

]

)



function App() {
  return (
    <>
    <RouterProvider router={myRouter}/>
    </>

  );
}

export default App;
