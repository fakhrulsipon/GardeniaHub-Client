import React from 'react';

const ActiveGardenerCard = ({ gardener }) => {
    return (
        <div>
            <img src={gardener.image} alt="" />
            <h1>{gardener.name}</h1>
            <p>{gardener.gender}</p>
            <p>{gardener.experience}</p>
            <p>{gardener.age}</p>
        </div>
    );
};

export default ActiveGardenerCard;