import {  FaFacebookF, FaGoogle } from "react-icons/fa";

const SocialButton = () => {
    return (
        <div className="mt-4 flex justify-center gap-5 items-center mb-8">
            <button className="bg-[#3B5999] text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center gap-2"><FaFacebookF/> Facebook</button>
            <button className="bg-[#DD4832] text-white py-2 px-4 rounded-md hover:bg-red-700 flex items-center gap-2"><FaGoogle/> Google</button>
        </div>
    );
};

export default SocialButton;