import React from 'react';
import { useLoaderData } from 'react-router';

const TipDetails = () => {
    const tipDetailsData = useLoaderData()
    console.log(tipDetailsData)
    return (
        <div>
            
        </div>
    );
};

export default TipDetails;