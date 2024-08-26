import BookingProcess from "./BookingProcess";
import ChooseUs from "./ChooseUs";
import FeaturedCar from "./FeaturedCars";
import Hero from "./Hero";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Hero />
            <BookingProcess />
            <FeaturedCar />
            <ChooseUs />
            <Testimonial />
        </div>
    );
};

export default Home;
