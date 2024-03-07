import img1 from '../../assets/point.png'
import img2 from '../../assets/read.png'
import img3 from '../../assets/price.png'
const Features = () => {
    return (
        <div className='flex flex-wrap justify-evenly mt-12'>
            <img src={img3} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img1} alt="img3" />
        </div>
    );
};

export default Features;