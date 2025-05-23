import React from 'react';

const TopCard = ({ toptip }) => {
    const { image, topic, category, difficulty, totalLiked } = toptip;

    return (
        <div className="relative bg-white/70 dark:bg-gray-800/80 rounded-3xl shadow-xl hover:shadow-green-300 border border-green-400 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03] m-4 overflow-hidden backdrop-blur-md">
  {/* Gradient border glow effect */}
  <div className="absolute -inset-0.5 bg-gradient-to-tr from-green-300 via-white to-green-300 opacity-20 blur-lg rounded-3xl pointer-events-none"></div>

  <img
    src={image}
    alt={topic}
    className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105 rounded-t-3xl"
  />

  <div className="relative z-10 p-6 bg-gradient-to-br from-white/80 via-white/60 to-green-50 dark:from-gray-900/80 dark:via-gray-800/70 dark:to-gray-900/60">
    <h2 className="text-2xl font-black text-green-700 dark:text-emerald-400 mb-2 tracking-wider">
      {topic}
    </h2>

    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
      <span className="font-bold text-green-600 dark:text-emerald-300">🌱 Category:</span> {category}
    </p>

    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
      <span className="font-bold text-green-600 dark:text-emerald-300">🎯 Difficulty:</span> {difficulty}
    </p>

    <p className="text-sm font-semibold text-green-800 dark:text-emerald-400 flex items-center gap-2">
      <span className="animate-pulse">👍</span> {totalLiked} Likes
    </p>
  </div>
</div>
    );
};

export default TopCard;
