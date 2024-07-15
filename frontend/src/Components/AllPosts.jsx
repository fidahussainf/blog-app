import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import postAPI from '../api/post/post';
import MainLayout from './Common/MainLayout';
import { useNavigate } from 'react-router-dom';

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        postAPI.getAllPosts()
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    const handleLike = (postId) => {
        postAPI.likePost(postId)
            .then((response) => {
                setPosts(posts.map(post => post._id === postId ? response.data : post));
            })
            .catch((error) => {
                console.error('Error liking post:', error);
            });
    };

    const handleEdit = (postId) => {
        navigate(`/update-post/${postId}`)
    };

    const handleView = (postId) => {
        navigate(`/post-details/${postId}`)
    };

    const handleDelete = (postId) => {

        postAPI.deletePost(postId)
            .then(() => {
                setPosts(posts.filter(post => post._id !== postId));
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
            });

    };

    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto my-8">
                <h1 className="text-4xl font-bold text-center mb-4">Blog Posts</h1>
                <p className="text-center text-gray-600 mb-8">Explore the latest posts from our community</p>
                {posts.map(post => (
                    <div key={post._id} className="bg-white p-6 rounded-md shadow-md mb-4">
                        <h3 className="text-2xl font-bold mb-2">Title: {post.title}</h3>
                        <p className="text-gray-700 mb-4">Content: {post.content}</p>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm text-gray-500">Author: {post.author.username}</p>
                                <p className="text-sm text-gray-500">Likes: {post.likes}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleLike(post._id)}
                                    className="flex items-center mt-2 py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <FaThumbsUp className="mr-2" /> Like
                                </button>
                                <button
                                    onClick={() => handleView(post._id)}
                                    className="flex items-center mt-2 py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    <FaEye className="mr-2" /> View
                                </button>
                                <button
                                    onClick={() => handleEdit(post._id)}
                                    className="flex items-center mt-2 py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                                >
                                    <FaEdit className="mr-2" /> Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(post._id)}
                                    className="flex items-center mt-2 py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    <FaTrashAlt className="mr-2" /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
};

export default AllPosts;
