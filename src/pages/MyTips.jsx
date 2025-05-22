import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const MyTips = () => {
    const initialMyTips = useLoaderData();
    const [myTips, setMyTips] = useState(initialMyTips)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:3000/share-garden/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainig = myTips.filter(myTip => myTip._id !== id)
                            setMyTips(remainig)
                        }
                    })
            }
        });
    }
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
                                        <Link to='/updateTips'

                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                        >
                                            ✏️ Update
                                        </Link>
                                        <button onClick={() => handleDelete(tip._id)}

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