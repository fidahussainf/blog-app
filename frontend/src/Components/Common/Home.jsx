import React from 'react';
import MainLayout from './MainLayout';

const Home = () => {
    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto my-8">
                <h1 className="text-4xl font-bold text-center mb-4">Welcome to My New Posts App</h1>
                <p className="text-center text-gray-600 mb-8">Explore and enjoy the latest posts from our community</p>
            </div>
        </MainLayout>
    );
};

export default Home;
