import React, { useEffect, useState } from 'react';
import TopCard from './TopCard';

const TopTrendingTips = () => {

    const [topTips, setTopTips] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3000/trending-tips')
        .then(res => res.json())
        .then(data => {
            setTopTips(data)
            setLoading(false)
        })
    }, [])
  

     if(loading){
    return <span className="loading loading-bars loading-xl"></span>
  }

    return (
        <div className='my-10 px-4'>
        <div className="text-center mb-5">
            <h2 className="text-3xl font-bold text-green-700 mb-5">Top Trending Gardening Tips</h2>
            <p className="text-gray-600 dark:text-gray-300 px-5 md:px-30 lg:px-70 mx-auto">
                Discover the most liked and popular gardening tips shared by our community! 
                These top 6 tips are trending based on the highest number of likes from gardeners around the world.
            </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-4'>
            {
                topTips.map((toptip, index) => (
                    <TopCard key={index} toptip={toptip} />
                ))
            }
        </div>
    </div>
    );
};

export default TopTrendingTips;