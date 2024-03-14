import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
import banner5 from "../../assets/banner-5.jpg";

const HomeSlider = () => {
    const sliderImages = [
        banner2,
        banner3,
        banner4,
        banner5,
    ];
    const settings = {
        fade: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 700,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: false,
                    centerMode: true,
                    centerPadding: "20px",
                },
            },
        ],
    };
    return (
        <div className="py-5 mx-2 md:mx-0" style={{ height: '100%' }}>
            <Slider {...settings} className="">
                {sliderImages.map((img, index) => (
                    <div key={index}>
                        <img
                            className="h-[150px] rounded-[10px] md:rounded-none p-[5px] md:p-0 md:h-[225px] w-full"
                            src={img}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeSlider;
