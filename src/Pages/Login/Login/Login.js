import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const { googleSignIn } = useAuth();

    const redirect_uri = location.state?.from || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                history.push(redirect_uri);
            }).catch((error) => {
                console.log(error)
            }).finally(() => { })
    }
    return (
        <div className="py-8 min-h-screen">
            <h2 className="text-4xl text-gray-500 font-bold pb-4">Log in to your account</h2>
            <div className="h-1 w-28 bg-gray-700 mx-auto"></div>
            <li className="list-none mt-20">
                <button onClick={handleGoogleSignIn} className=" w-4/5 md:w-2/5 lg:1-/5 mx-auto  py-2 bg-gray-300 flex justify-around rounded-lg">
                    <img className="max-w-full w-8 h-8 object-cover" src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" />
                    <span className="font-bold text-lg">Sign in with google</span>
                </button>
            </li>
        </div>
    );
};

export default Login;