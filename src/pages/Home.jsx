
import Slider from '../components/Slider';
import SeasonalPlants from '../components/SeasonalPlants';
import ActiveGardeners from '../components/ActiveGardeners';
import TopTrendingTips from '../components/TopTrendingTips';
import TipsOfTheMonth from '../components/TipsOfTheMonth';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ActiveGardeners></ActiveGardeners>
            <TopTrendingTips></TopTrendingTips>
            <SeasonalPlants></SeasonalPlants>
            <TipsOfTheMonth></TipsOfTheMonth>

        </div>
    );
};

export default Home;