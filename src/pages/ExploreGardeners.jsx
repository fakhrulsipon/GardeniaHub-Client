import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';

const ExploreGardeners = () => {
  const exploreGardeners = useLoaderData();
  
  return (
    <>
    <Helmet>
      <title>Explore Gardeners</title>
    </Helmet>
    <div className="max-w-7xl mx-auto px-4 py-10">
  <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-200 mb-8">
    🌼 Explore Gardeners
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {exploreGardeners.map((gardener) => (
      <div
        key={gardener._id}
        className="bg-white dark:bg-gray-800 hover:shadow-xl border border-green-400 dark:border-green-600 p-5 rounded-2xl transition-all duration-300 group relative overflow-hidden"
      >
        {/* Image with overlay effect */}
        <div className="relative">
          <img
            src={gardener.image}
            alt={gardener.name}
            className="w-full h-[280px] object-cover rounded-xl transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute top-2 right-2 bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
            {gardener.status}
          </div>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-1 text-gray-800 dark:text-gray-100">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-300">{gardener.name}</h3>
          <p><span className="font-semibold">🎂 Age:</span> {gardener.age}</p>
          <p><span className="font-semibold">🚻 Gender:</span> {gardener.gender}</p>
          <p><span className="font-semibold">🧠 Experience:</span> {gardener.experience}</p>
          <p><span className="font-semibold">📌 Tips Shared:</span> {gardener.totalSharedTips}</p>
        </div>

        {/* Footer button */}
        <div className="mt-4">
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            View Profile
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
</>
  );
};

export default ExploreGardeners;
