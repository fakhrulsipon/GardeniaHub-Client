import React from 'react';

const ActiveGardenerCard = ({ gardener }) => {
    console.log(gardener)
    return (
        <div className="bg-gradient-to-tr from-green-50 via-white to-green-50 rounded-2xl shadow-lg p-5 border border-green-300 hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
  <img 
    src={gardener.image} 
    alt={gardener.name} 
    className="w-full h-[300px] object-cover rounded-xl mb-5 border border-green-200"
  />
  <h1 className="text-2xl font-extrabold text-green-800 mb-2 tracking-wide drop-shadow-sm">{gardener.name}</h1>
  <p className="text-green-700 mb-1"><span className="font-semibold">Gender:</span> {gardener.gender}</p>
  <p className="text-green-700 mb-1"><span className="font-semibold">Experience:</span> {gardener.experience}</p>
  <p className="text-green-700"><span className="font-semibold">Age:</span> {gardener.age}</p>
</div>

    );
};

export default ActiveGardenerCard;