import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Blog from './BlogLayout.jsx';
import './index.css';
import BlogLayout from './BlogLayout.jsx';
import BlogPage from './pages/BlogPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NewPostPage from './pages/NewPostPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogLayout />}>
          <Route index element={<HomePage />} />
          <Route path="new-post" element={<NewPostPage />} />
          <Route path=":postId" element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
