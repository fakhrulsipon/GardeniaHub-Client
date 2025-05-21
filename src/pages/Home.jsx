
import Slider from '../components/Slider';
import SeasonalPlants from '../components/SeasonalPlants';
import ActiveGardeners from '../components/ActiveGardeners';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ActiveGardeners></ActiveGardeners>
            <SeasonalPlants></SeasonalPlants>
            {/* <TipsOfTheMonth></TipsOfTheMonth> */}

        </div>
    );
};

export default Home;