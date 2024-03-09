import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import SocialButton from '../../components/SocialButton/SocialButton';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(res => {
                // TODO: modify user data
                console.log(res.user);
            })
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl underline text-center uppercase mb-4">Register / Sign Up</h2>
            <SocialButton />
            <p className=' font-bold text-center underline mb-3 uppercase text-2xl'>or</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 flex items-center border-b border-gray-300 pb-2">
                    <FaUser className="text-gray-500 mr-2" />
                    <input type="text" id="name" {...register("name", { required: true })} placeholder="Name" className="mt-1 block w-full rounded-md border-none focus:outline-none" />
                    {errors.name && <span className="text-red-500">Name is required</span>}
                </div>
                <div className="mb-4 flex items-center border-b border-gray-300 pb-2">
                    <FaEnvelope className="text-gray-500 mr-2" />
                    <input type="email" id="email" {...register("email", { required: true })} placeholder="Email" className="mt-1 block w-full rounded-md border-none focus:outline-none" />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="mb-4 relative flex items-center border-b border-gray-300 pb-2">
                    <FaLock className="text-gray-500 mr-2" />
                    <input type={passwordVisible ? "text" : "password"} id="password" {...register("password", { required: true })} placeholder="Password" className="mt-1 block w-full rounded-md border-none focus:outline-none" />
                    <button type="button" onClick={togglePasswordVisibility} className="absolute top-1/2 transform -translate-y-1/2 right-3">
                        {passwordVisible ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                    </button>
                    {errors.password && <span className="text-red-500">Password is required</span>}
                </div>
                <div className="mt-2 text-right">
                    <Link to="/forgot-password" className="text-indigo-600">Forgot password?</Link>
                </div>
                <button type="submit" className="bg-green-500 w-full mt-3 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Register</button>
            </form>
            <div className="mt-4 text-center">
                <span className="text-gray-600">Already have an account?</span>
                <Link to="/login" className="text-indigo-600 ml-1">Login now</Link>
            </div>

        </div>
    );
};

export default Register;
