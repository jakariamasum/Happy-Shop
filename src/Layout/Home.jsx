import Features from "../components/Features/Features";
import TopNavbar from "../components/Navbar/TopNavbar/TopNavbar";
import HomeSlider from "../components/Slider/Slider";

const Home = () => {
    return (
        <div className="mx-32">
            <TopNavbar/>
            <HomeSlider/>
            <Features/>
        </div>
    );
};

export default Home;