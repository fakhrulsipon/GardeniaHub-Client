import React, { use } from 'react';
import ActiveGardenerCard from './ActiveGardenerCard';

const promise = fetch('http://localhost:3000/active').then(res =>res.json());

const ActiveGardeners = () => {
    const activeGardeners = use(promise)
    return (
        <div>
            {
                activeGardeners.map((gardener, index) =><ActiveGardenerCard key={index} gardener={gardener}></ActiveGardenerCard>)
            }
        </div>
    );
};

export default ActiveGardeners;