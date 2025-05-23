
import Slider from '../components/Slider';
import SeasonalPlants from '../components/SeasonalPlants';
import ActiveGardeners from '../components/ActiveGardeners';
import TopTrendingTips from '../components/TopTrendingTips';
import TipsOfTheMonth from '../components/TipsOfTheMonth';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
        <Helmet>
                <title>GardeniaHub || Home</title>
            </Helmet>
       
        <div>
            
            <Slider></Slider>
            <ActiveGardeners></ActiveGardeners>
            <TopTrendingTips></TopTrendingTips>
            <SeasonalPlants></SeasonalPlants>
            <TipsOfTheMonth></TipsOfTheMonth>

        </div>
         </>
    );
};

export default Home;