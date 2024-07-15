import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import postAPI from '../api/post/post';
import MainLayout from './Common/MainLayout';
import Loader from "./Common/Loader"
const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    postAPI.viewPost(id)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  if (!post) {
    return (
      <MainLayout>
       <Loader />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto my-8 bg-white p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.content}</p>
        <p className="text-sm text-gray-500">Author: {post.author.username}</p>
        <p className="text-sm text-gray-500">Publication Date: {new Date(post.publicationDate).toLocaleDateString()}</p>
        <p className="text-sm text-gray-500">Likes: {post.likes}</p>
      </div>
    </MainLayout>
  );
};

export default PostDetails;
