
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';

const TipDetails = () => {
    const tipDetails = useLoaderData();
    const [likes, setLikes] = useState(tipDetails.totalLiked || 0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
       if (!liked) {
      fetch(`http://localhost:3000/share-garden/like/${tipDetails._id}`, {
        method: 'PATCH',
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setLikes(likes + 1);
            setLiked(true);
          } else {
            alert('Could not update like count. Please try again.');
          }
        })
        .catch(err => {
          console.error('Error updating like:', err);
          alert('Something went wrong. Please try again later.');
        });
    }
    };

    return (
      <>
      <Helmet>
        <title>Tips Details</title>
      </Helmet>
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
        </>
    );
};

export default TipDetails;
