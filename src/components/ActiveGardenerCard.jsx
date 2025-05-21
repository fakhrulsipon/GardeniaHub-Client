import React from 'react';

const ActiveGardenerCard = ({ gardener }) => {
    console.log(gardener)
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 border border-green-600 hover:shadow-xl transition duration-300">
            <img 
                src={gardener.image} 
                alt={gardener.name} 
                className="w-full h-[400px] object-cover rounded-xl mb-4"
            />
            <h1 className="text-xl font-bold text-green-700 mb-1">{gardener.name}</h1>
            <p className="text-gray-600"><span className="font-medium">Gender:</span> {gardener.gender}</p>
            <p className="text-gray-600"><span className="font-medium">Experience:</span> {gardener.experience}</p>
            <p className="text-gray-600"><span className="font-medium">Age:</span> {gardener.age}</p>
        </div>
    );
};

export default ActiveGardenerCard;