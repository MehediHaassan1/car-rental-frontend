import ChooseUs from "./ChooseUs";
import FeaturedCar from "./FeaturedCars";
import Hero from "./Hero";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedCar />
            <ChooseUs />
            <Testimonial />
        </div>
    );
};

export default Home;
