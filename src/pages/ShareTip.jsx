import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const ShareTip = () => {
    const {user} = use(AuthContext)

    const handleAddDb = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const allTips =  Object.fromEntries(formData.entries())
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
        console.log('data after post', data)
       })
    }
    return (
        <div className="max-w-xl mx-auto p-6 bg-green-100 rounded-lg space-y-4 mt-10">
            <h2 className="text-2xl font-bold text-center text-green-800">🌱 Share a Garden Tip</h2>

            <form onSubmit={handleAddDb} className="space-y-4">
                {/* Title */}       
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full p-2 border border-green-300 rounded"
                    required
                />

                {/* Plant Type / Topic */}
                <input
                    type="text"
                    placeholder="Plant Type / Topic"
                    className="w-full p-2 border border-green-300 rounded"
                    required
                />

                {/* Difficulty Level */}
                <select className="w-full p-2 border border-green-300 rounded" required>
                    <option value="">Select Difficulty</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>

                {/* Description */}
                <textarea
                    placeholder="Description"
                    rows="4"
                    className="w-full p-2 border border-green-300 rounded"
                    required
                ></textarea>

                {/* Image URL */}
                <input
                    type="text"
                    placeholder="Image URL"
                    className="w-full p-2 border border-green-300 rounded"
                    required
                />

                {/* Category */}
                <select className="w-full p-2 border border-green-300 rounded" required>
                    <option value="">Select Category</option>
                    <option>Composting</option>
                    <option>Plant Care</option>
                    <option>Vertical Gardening</option>
                </select>

                {/* Availability */}
                <select className="w-full p-2 border border-green-300 rounded" required>
                    <option value="">Availability</option>
                    <option>Public</option>
                    <option>Hidden</option>
                </select>

                {/* User Name (read-only) */}
                <input
                    type="text"
                    value={user.displayName}
                    readOnly
                    className="w-full p-2 border border-gray-300 bg-gray-100 rounded"
                />

                {/* User Email (read-only) */}
                <input
                    type="email"
                    value={user.email}
                    readOnly
                    className="w-full p-2 border border-gray-300 bg-gray-100 rounded"
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
    );
};

export default ShareTip;
