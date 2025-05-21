import React from 'react';
import { useLoaderData } from 'react-router';

const MyTips = () => {
    const myTips = useLoaderData();
    return (
        <div>
            <div className="max-w-5xl mx-auto p-4 mt-5">
            <h1 className="text-2xl font-bold mb-4">My Garden Tips</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border border-gray-300">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Category</th>
                            <th className="border px-4 py-2">Plant Type</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myTips.map(tip => (
                            <tr key={tip._id} className="text-center">
                                <td className="border px-4 py-2">{tip.title}</td>
                                <td className="border px-4 py-2">{tip.category}</td>
                                <td className="border px-4 py-2">{tip.topic}</td>
                                <td className="border px-4 py-2 space-x-2">
                                    <button
                                        
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                    >
                                        ✏️ Update
                                    </button>
                                    <button
                            
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    >
                                        🗑️ Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyTips;