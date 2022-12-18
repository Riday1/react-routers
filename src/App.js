
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './Layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import AllPost from './components/AllPost/AllPost';
import PostDetails from './components/PostDetails/PostDetails';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/products', element: <Products></Products> },
        {
          path: '/friends',
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          element: <FriendDetails></FriendDetails>,
          loader: async ({ params }) => {

            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          }
        },
        {
          path: '/allPost',
          element: <AllPost></AllPost>,
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          }
        },
        {
          path: '/post/:postId',
          element: <PostDetails></PostDetails>,
          loader: ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          }

        }

      ]
    },
    { path: '/about', element: <About></About>, },
    { path: '*', element: <div>Page Not Found ...!</div> }
  ])


  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
