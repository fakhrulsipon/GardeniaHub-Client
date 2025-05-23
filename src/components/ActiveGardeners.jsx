
import { useEffect, useState } from 'react';
import ActiveGardenerCard from './ActiveGardenerCard';

const ActiveGardeners = () => {
    
    const [activeGardeners, setActiveGardeners] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/active')
      .then(res => res.json())
      .then(data => {
        setActiveGardeners(data);
        setLoading(false)
      })
  }, []);

  if(loading){
    return <span className="loading loading-bars loading-xl"></span>
  }


    return (
      <>
      <h1 className='text-4xl font-extrabold text-green-800 text-center mt-10 mb-5'>🌿 Meet Our Featured Gardeners</h1>
      <p className="text-gray-600 mb-6 dark:text-gray-300 px-5 md:px-30 lg:px-70 mx-auto">Discover six of our most active and inspiring gardeners who are making a difference in the community. From composting experts to balcony garden innovators — get to know the green thumbs behind the magic!

</p>
     
        <div className='grid lg:grid-cols-3 gap-8'>
            {
                activeGardeners.map((gardener, index) =><ActiveGardenerCard key={index} gardener={gardener}></ActiveGardenerCard>)
            }
        </div>
         </>
    );
};

export default ActiveGardeners;