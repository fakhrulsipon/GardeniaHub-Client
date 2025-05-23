import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const ShareTip = () => {
    const {user} = use(AuthContext)

    const handleAddDb = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const allTip =  Object.fromEntries(formData.entries())

        const allTips = {
           ...allTip,
           totalLiked: 0
        }

        console.log(allTips)

        fetch('http://localhost:3000/share-garden',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(allTips)
        })
       .then(res => res.json())
       .then(data => {
       if(data.insertedId){
         Swal.fire({
                  title: "Congratulations!",
                  text: "Successfully added your gardening tip!",
                  icon: "success",
                  timer: 3000,
                  timerProgressBar: true,
                  showConfirmButton: false
                });
       }
       })
    }
    return (
      <>
      <Helmet>
        <title>Share Tips</title>
      </Helmet>
        <div className="max-w-xl mx-auto p-6 bg-green-100 dark:bg-gray-800 rounded-lg space-y-4 mt-10">
  <h2 className="text-2xl font-bold text-center text-green-800 dark:text-green-200">🌱 Share a Garden Tip</h2>

  <form onSubmit={handleAddDb} className="space-y-4">
    {/* Title */}
    <input
      type="text"
      name="title"
      placeholder="Title"
      className="w-full p-2 border border-green-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
      required
    />

    {/* Plant Type / Topic */}
    <input
      type="text"
      name="topic"
      placeholder="Plant Type / Topic"
      className="w-full p-2 border border-green-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
      required
    />

    {/* Difficulty Level */}
    <select
      name="difficulty"
      className="w-full p-2 border border-green-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
      required
    >
      <option value="">Select Difficulty</option>
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>

    {/* Description */}
    <textarea
      name="description"
      placeholder="Description"
      rows="4"
      className="w-full p-2 border border-green-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
      required
    ></textarea>

    {/* Image URL */}
    <input
      type="text"
      name="image"
      placeholder="Image URL"
      className="w-full p-2 border border-green-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
      required
    />

    {/* Category */}
    <select
      name="category"
      className="w-full p-2 border border-green-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
      required
    >
      <option value="">Select Category</option>
      <option>Composting</option>
      <option>Plant Care</option>
      <option>Vertical Gardening</option>
    </select>

    {/* Availability */}
    <select
      name="availability"
      className="w-full p-2 border border-green-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
      required
    >
      <option value="">Availability</option>
      <option>Public</option>
      <option>Hidden</option>
    </select>

    {/* User Name (read-only) */}
    <input
      type="text"
      name="userName"
      value={user.displayName}
      readOnly
      className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-white rounded"
    />

    {/* User Email (read-only) */}
    <input
      type="email"
      name="userEmail"
      value={user.email}
      readOnly
      className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-white rounded"
    />

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
    >
      Submit Tip
    </button>
  </form>
</div>
</>
    );
};

export default ShareTip;
