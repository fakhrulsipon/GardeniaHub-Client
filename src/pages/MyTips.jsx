
import { use, useEffect, useState } from 'react';
import { Link, } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const MyTips = () => {
    const {user} = use(AuthContext)
    
    const [myTips, setMyTips] = useState([])
    

    
useEffect(() => {
    fetch(`http://localhost:3000/share-gardens/${user?.email}`)
    .then(res => res.json())
    .then(data =>{
        setMyTips(data)
    })
}, [])


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
                                text: "Your Tips has been deleted.",
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
        <>
        <Helmet>
            <title>My Tips</title>
        </Helmet>
       <div className="px-2 sm:px-4 md:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto mt-5">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-green-800 dark:text-green-200">
      My Garden Tips
    </h1>

    <div className="overflow-x-auto rounded shadow dark:bg-gray-800">
      <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm sm:text-base">
        <thead className="bg-green-100 dark:bg-green-700 text-gray-700 dark:text-green-100">
          <tr>
            <th className="border dark:border-gray-700 px-2 sm:px-4 py-2 text-left">Title</th>
            <th className="border hidden md:block dark:border-gray-700 px-2 sm:px-4 py-2 text-left">Category</th>
            <th className="border dark:border-gray-700 px-2 sm:px-4 py-2 text-left">Plant Type</th>
            <th className="border dark:border-gray-700 px-2 sm:px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {myTips.map(tip => (
            <tr key={tip._id} className="text-gray-800 dark:text-gray-100 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors">
              <td className="border dark:border-gray-700 px-2 sm:px-4 py-2">{tip.title}</td>
              <td className="border hidden md:block dark:border-gray-700 px-2 sm:px-4 py-2">{tip.category}</td>
              <td className="border dark:border-gray-700 px-2 sm:px-4 py-2">{tip.topic}</td>
              <td className="border dark:border-gray-700 px-2 sm:px-4 py-2 flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <Link
                  to={`/updateTips/${tip._id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                >
                  ✏️ Update
                </Link>
                <button
                  onClick={() => handleDelete(tip._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
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
</>
    );
};

export default MyTips;