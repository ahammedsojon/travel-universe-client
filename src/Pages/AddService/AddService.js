import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://chilling-caverns-52549.herokuapp.com/addService', {
            data
        })
            .then(res => {
                alert('Service Added Successfully');
                reset();
            })
    };
    return (
        <div className="py-16">
            <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-400 pb-4">Add a service</h2>
                <div className="h-1 w-28 bg-gray-700 mx-auto"></div>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <input  {...register("country", { required: true })} placeholder="Country Name" />

                    <input  {...register("place", { required: true })} placeholder="Place Name" />
                    <textarea {...register("description", { required: true })} placeholder="Description" />
                    <input type="number" {...register("duration", { required: true })} placeholder="Duration" />
                    <input type="number" {...register("price]", { required: true })} placeholder="Price" />
                    <input  {...register("img]", { required: true })} placeholder="Image URL Includes https://" />
                    <input type="number"  {...register("rating]", { required: true })} placeholder="Give a number between 1 to 5 for rating" />
                    <input className="cursor-pointer" type="submit" value="Add Service" />
                </form>
            </div>
        </div >
    );
};;

export default AddService;