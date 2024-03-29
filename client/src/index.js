import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout';
import ErrorPage from './Pages/ErrorPage'
import Home from './Pages/Home';
import PostDetail from './Pages/PostDetail';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';
import UserProfile from './Pages/UserProfile';
import Author from './Pages/Author';
import CreatePost from './Pages/CreatePost';
import EditPost from './Pages/EditPost';
import DeletePost from './Pages/DeletePost';
import Dashboard from './Pages/Dashboard';
import Authorspost from './Pages/Authorspost';
import CategoryPost from './Pages/CategoryPost';
import LogOut from './Pages/LogOut';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: "posts/:id", element: <PostDetail/> },
      {path: "login", element: <LoginPage/> },
      {path: "register", element: <Register/> },
      {path: "profile/:id", element: <UserProfile/> },
      {path: "author", element: <Author/> },
      {path: "create", element: <CreatePost/> },
      {path: "posts/:id/edit", element: <EditPost/> },
      {path: "posts/:id/delete", element: <DeletePost/> },
      {path: "myposts/:id", element: <Dashboard/> },
      {path: "posts/users/:id", element: <Authorspost/> },
      {path: "posts/categories/category", element: <CategoryPost/> },
      {path: "logout", element: <LogOut/> },

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);


