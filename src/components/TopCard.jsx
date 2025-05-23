import React from 'react';

const TopCard = ({ toptip }) => {
    const { image, topic, category, difficulty, totalLiked } = toptip;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out m-4 border border-green-300 hover:border-green-500">
  <img
    src={image}
    alt={topic}
    className="w-full h-52 object-cover rounded-t-2xl"
  />

  <div className="p-5 space-y-2">
    <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">{topic}</h2>

    <p className="text-sm text-gray-700 dark:text-gray-300">
      <span className="font-semibold text-gray-900 dark:text-white">Category:</span> {category}
    </p>

    <p className="text-sm text-gray-700 dark:text-gray-300">
      <span className="font-semibold text-gray-900 dark:text-white">Difficulty:</span> {difficulty}
    </p>

    <div className="text-green-800 dark:text-green-300 text-sm font-semibold flex items-center gap-1">
      👍 {totalLiked} Likes
    </div>
  </div>
</div>

    );
};

export default TopCard;
