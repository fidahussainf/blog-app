import React, { useState, useEffect } from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import postAPI from '../api/post/post';
import MainLayout from './Common/MainLayout';
import { toast } from 'react-toastify';

const UpdatePost = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    useEffect(() => {
        postAPI.viewPost(id)
            .then((response) => {
                setFormData({
                    title: response.data.title,
                    content: response.data.content,
                });
            })
            .catch((error) => {
                console.error('Error fetching post:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postAPI.updatePost(id, formData)
            .then(() => {
                toast.success('Post updated successfully');
                setTimeout(() => {
                  navigate('/all-posts');
                }, 1000);
                
            })
            .catch((error) => {
                toast.error('Failed to update post');
                console.error('Error updating post:', error);
            });
    };

    return (
        <MainLayout>
            <div className="max-w-md mx-auto my-8 bg-white p-6 rounded-md shadow-md">
                <h2 className="text-2xl mb-4">Edit Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

export default UpdatePost;
