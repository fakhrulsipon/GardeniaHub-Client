import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateTips = () => {
    const navigate = useNavigate()
    const { user } = use(AuthContext)
    const updateTips = useLoaderData();
    console.log(updateTips)

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const updatedTips = Object.fromEntries(formData.entries())

        fetch(`http://localhost:3000/tip-details/${updateTips._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTips)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "You have successfully Update Tips",
                        icon: "success",
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    navigate('/myTips')
                }
            })
    }
    return (
        <div>
            <div className="max-w-xl mx-auto p-6 bg-green-100 rounded-lg space-y-4 mt-10">
                <h2 className="text-2xl font-bold text-center text-green-800">🌱 Share a Garden Tip</h2>

                <form onSubmit={handleUpdate} className="space-y-4">
                    {/* Title */}
                    <input
                        type="text"
                        name="title"
                        defaultValue={updateTips.title}
                        placeholder="Title"
                        className="w-full p-2 border border-green-300 rounded"
                        required
                    />

                    {/* Plant Type / Topic */}
                    <input
                        type="text"
                        name="topic"
                        defaultValue={updateTips.topic}
                        placeholder="Plant Type / Topic"
                        className="w-full p-2 border border-green-300 rounded"
                        required
                    />

                    {/* Difficulty Level */}
                    <select
                        name="difficulty"
                        defaultValue={updateTips.difficulty}
                        className="w-full p-2 border border-green-300 rounded"
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
                        defaultValue={updateTips.description}
                        placeholder="Description"
                        rows="4"
                        className="w-full p-2 border border-green-300 rounded"
                        required
                    ></textarea>

                    {/* Image URL */}
                    <input
                        type="text"
                        name="image"
                        defaultValue={updateTips.image}
                        placeholder="Image URL"
                        className="w-full p-2 border border-green-300 rounded"
                        required
                    />

                    {/* Category */}
                    <select
                        name="category"
                        defaultValue={updateTips.category}
                        className="w-full p-2 border border-green-300 rounded"
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
                        defaultValue={updateTips.availability}

                        className="w-full p-2 border border-green-300 rounded"
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
                        value={user?.displayName}
                        readOnly
                        className="w-full p-2 border border-gray-300 bg-gray-100 rounded"
                    />

                    {/* User Email (read-only) */}
                    <input
                        type="email"
                        name="userEmail"
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
        </div>
    );
};

export default UpdateTips;