import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
    return (
        <nav className=" p-4 bg-white flex items-center justify-between">
            <div className="flex items-center">
                {/* TODO:add logo here */}
                {/* <img src={} alt="Happy Shop Logo" className="h-8 mr-4" /> */}
                <span className=" text-lg font-bold">Happy Shop</span>
            </div>

            <div className="flex items-center justify-center w-7/12">
                <div className="flex w-full items-center border border-gray-500 border-b-[#FF9900] rounded-lg p-2">
                    <select className="text-gray-600 bg-transparent outline-none pr-2">
                        <option value="all">All</option>
                        <option value="book">Books</option>
                        <option value="gift">Super-store</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-transparent focus:outline-none ml-2"
                    />
                    <FaSearch size={30} className="text-blue-500 ml-2 cursor-pointer" />
                </div>
            </div>

            <div className="flex items-center">
                <FaShoppingCart size={35} className="mr-10 cursor-pointer" />
               <Link to='/login'> <button className="bg-white border border-gray-500 text-gray-800 py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white">Sign Up</button></Link>
            </div>
        </nav>
    );
};

export default TopNavbar;