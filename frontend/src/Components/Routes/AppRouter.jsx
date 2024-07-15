import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import AllPosts from '../AllPosts';
import CreatePost from '../CreatePost';
import PostDetails from '../PostDetails';
import UpdatePost from '../UpdatePost';
import Home from '../Common/Home';

function AppRouter() {
  const currentUser = useSelector(state => state.auth.currentUser);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {currentUser && (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/all-posts" element={<AllPosts />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post-details/:id" element={<PostDetails />} />
          <Route path="/update-post/:id" element={<UpdatePost />} />
        </>
      )}
    </Routes>
  );
}

export default AppRouter;
