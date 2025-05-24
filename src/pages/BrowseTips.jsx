import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const BrowseTips = () => {

  const [tips, setTips] = useState([])
  const [difficulty, setDifficulty] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)

    let url = 'http://localhost:3000/share-garden';

    if (difficulty) {
      url += `?difficulty=${difficulty}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTips(data)
        setLoading(false)
      })
       
  }, [difficulty]);
 

  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>
  }


  return (
    <>
  <Helmet>
    <title>Browse Tips</title>
  </Helmet>
    <div className="px-2 md:px-6 lg:px-16 py-6 overflow-x-auto">
  <h2 className="text-2xl lg:text-3xl font-bold text-center text-green-700 dark:text-green-200 mb-6">
    🌿 Browse Garden Tips
  </h2>

  {/* Filter Dropdown */}
  <div className="mb-6 text-center">
    <label className="text-green-700 dark:text-green-200 font-semibold mr-2">Filter by Difficulty:</label>
    <select
      onChange={(e) => setDifficulty(e.target.value)}
      className="border border-green-400 dark:border-green-600 px-4 py-2 rounded focus:outline-none focus:ring focus:border-green-600 dark:bg-gray-800 dark:text-white"
    >
      <option value="">All</option>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
    </select>
  </div>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-green-300 dark:border-green-600 text-sm md:text-base lg:text-lg">
      <thead>
        <tr className="bg-green-200 dark:bg-green-700 text-left text-green-900 dark:text-green-100">
          <th className="p-3 border dark:border-green-600">Image</th>
          <th className="p-3 border dark:border-green-600">Title</th>
          <th className="p-3 border dark:border-green-600">Category</th>
          <th className="p-3 border text-center dark:border-green-600">Action</th>
        </tr>
      </thead>
      <tbody>
        {tips.map(tip => (
          <tr key={tip._id} className="hover:bg-green-50 dark:hover:bg-gray-700 text-center text-gray-800 dark:text-gray-100">
            <td className="p-3 border dark:border-green-600">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-20 h-20 object-cover rounded mx-auto lg:w-24 lg:h-24"
              />
            </td>
            <td className="p-3 border dark:border-green-600">{tip.title}</td>
            <td className="p-3 border dark:border-green-600">{tip.category}</td>
            <td className="p-3 border dark:border-green-600">
              <Link
                to={`/tip-details/${tip._id}`}
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 hover:underline transition duration-300 text-sm lg:text-base"
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
</>
  );
};

export default BrowseTips;
