import React from 'react';

const TopCard = ({ toptip }) => {
    const { image, topic, category, difficulty, totalLiked } = toptip;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden m-4 border border-green-300">
            <img
                src={image}
                alt={topic}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-xl font-bold text-green-700 mb-1">{topic}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <span className="font-medium">Category:</span> {category}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <span className="font-medium">Difficulty:</span> {difficulty}
                </p>
                <p className="text-sm font-semibold text-green-800 flex items-center">
                    👍 {totalLiked} Likes
                </p>
            </div>
        </div>
    );
};

export default TopCard;
