import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const BrowseTips = () => {

    const [tips, setTips] = useState([])
    const [difficulty, setDifficulty] = useState("");

       useEffect(() => {
  fetch(
    `http://localhost:3000/share-garden${difficulty ? `?difficulty=${difficulty}` : ''}`
  )
    .then((res) => res.json())
    .then((data) => setTips(data))
}, [difficulty]);


    return (
        
        <div className="px-2 md:px-6 lg:px-16 py-6 overflow-x-auto">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-green-700 mb-6">
        🌿 Browse Garden Tips
      </h2>

      {/* Filter Dropdown */}
      <div className="mb-6 text-center">
        <label className="text-green-700 font-semibold mr-2">Filter by Difficulty:</label>
        <select
          onChange={(e) => setDifficulty(e.target.value)}
          className="border border-green-400 px-4 py-2 rounded focus:outline-none focus:ring focus:border-green-600"
        >
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-green-300 text-sm md:text-base lg:text-lg">
          <thead>
            <tr className="bg-green-200 text-left">
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tips.map(tip => (
              <tr key={tip._id} className="hover:bg-green-50 text-center">
                <td className="p-3 border">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-20 h-20 object-cover rounded mx-auto lg:w-24 lg:h-24"
                  />
                </td>
                <td className="p-3 border">{tip.title}</td>
                <td className="p-3 border">{tip.category}</td>
                <td className="p-3 border">
                  <Link
                    to={`/tip-details/${tip._id}`}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 text-sm lg:text-base"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default BrowseTips;




// useEffect(() => {
    //     fetch('http://localhost:3000/share-garden')
    //       .then(res => res.json())
    //       .then(data => {
    //         setTips(data);
    //       })
    //   }, []);