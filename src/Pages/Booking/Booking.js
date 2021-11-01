import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import useAuth from '../../hooks/useAuth';
import './Booking.css';
import axios from 'axios';

const Booking = () => {
    const { user, booking } = useAuth();
    const { id } = useParams();
    const [services] = useServices();
    const matchedService = services.find(service => service._id === id);
    console.log(booking)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'Pending';
        data.order = booking;
        axios.post('https://chilling-caverns-52549.herokuapp.com/orders', {
            data
        })
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your order has been placed successfully');
                    reset();
                }
            })
    };
    return (
        <div className="py-8">
            {
                !matchedService ?
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
                        ></div>
                    </div>
                    :
                    <div className="max-w-md mx-auto h-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-left">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="w-full h-full object-cover md:w-48" src={matchedService.img} alt="Man looking at item at a store" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{matchedService.country}</div>
                                <div className="block mt-1 text-lg leading-tight font-medium text-black">{matchedService.place}</div>
                                <p className="mt-2 text-gray-500">{matchedService.description}</p>
                            </div>
                        </div>
                    </div>
            }

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <input defaultValue={user?.displayName} {...register("name", { required: true })} placeholder="Name" />
                    <input defaultValue={user?.email} type="email" {...register("email", { required: true })} placeholder="Email" />
                    <input {...register("country", { required: true })} placeholder="Country" />
                    <input {...register("address", { required: true })} placeholder="Address" />
                    <input {...register("date", { required: true })} placeholder="Trip starting date dd-mm-yyyy" />
                    <input type="number" {...register("phone", { required: true })} placeholder="Phone" />
                    <input className="cursor-pointer" type="submit" value="Place Order" />
                </form>
            </div>
        </div >
    );
};

export default Booking;