
import { useEffect, useState } from 'react';
import ActiveGardenerCard from './ActiveGardenerCard';

const ActiveGardeners = () => {
    
    const [activeGardeners, setActiveGardeners] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/active')
      .then(res => res.json())
      .then(data => {
        setActiveGardeners(data);
      })
  }, []);


    return (
      <>
      <h1 className='text-4xl font-extrabold text-green-800 text-center mt-10 mb-5'>Active Gardeners</h1>
     
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                activeGardeners.map((gardener, index) =><ActiveGardenerCard key={index} gardener={gardener}></ActiveGardenerCard>)
            }
        </div>
         </>
    );
};

export default ActiveGardeners;