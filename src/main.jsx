import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import PageHome from './pages/PageHome/PageHome.jsx';
import PageBlog from './pages/PageBlog/PageBlog.jsx';
import FirstBlog from './pages/PageBlog/Blog01.jsx';
import PageError from './pages/PageError/PageError.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageHome/>
    ),
    errorElement: <PageError/>
  },
  {
    path: "my-blog",
    element: (
      <PageHome/>
    ),
  },
  {
    path: "blog",
    element: (
      <PageBlog/>
    ),
  },
  {
    path: "blog/blog01",
    element: (
      <FirstBlog/>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
