
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const TipDetails = () => {
    const tipDetails = useLoaderData();
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
        }
    };

    return (
        <div className="p-4 mt-10  border border-emerald-400 max-w-3xl mx-auto shadow-lg rounded-xl bg-white dark:bg-gray-800">
            <img src={tipDetails.image} alt={tipDetails.title} className="w-full h-64 object-cover rounded-xl mb-4" />
            <h1 className="text-3xl font-bold mb-2">{tipDetails.topic}</h1>
            <h2 className="text-xl text-green-600 mb-1">{tipDetails.category}</h2>
            <h3 className="text-lg font-semibold mb-2">{tipDetails.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{tipDetails.description}</p>
            <p className="text-sm text-gray-500 mb-4">Difficulty: {tipDetails.difficulty}</p>

            {/* Like Button */}
            <button
                onClick={handleLike}
                className={`px-4 py-2 rounded-lg text-white transition ${
                    liked ? 'bg-green-500' : 'bg-gray-500 hover:bg-green-600'
                }`}
            >
                👍 Like {likes > 0 && `(${likes})`}
            </button>
        </div>
    );
};

export default TipDetails;
