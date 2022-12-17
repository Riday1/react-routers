
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Default from './components/Default/Default';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';



function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Default></Default> },
    { path: '/home', element: <Home></Home> },
    { path: '/about', element: <About></About> },
    { path: '/products', element: <Products></Products> }
  ])
  // path : where to go  (url)?      
  // element : what to show (component,html , jsx)? 
  
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
