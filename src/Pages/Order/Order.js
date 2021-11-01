import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Order = ({ uniq, updateAble, setLengthChange }) => {
    const [service, setService] = useState({});
    const [defaultStatus, setDefaultStatus] = useState(true);
    useEffect(() => {
        axios.get(`https://chilling-caverns-52549.herokuapp.com/orders/${uniq.order}`)
            .then(res => {
                setService(res.data)
            })
    }, [])
    console.log(uniq);
    const handleDeleteOrder = e => {
        const proceed = window.confirm('Are you sure, you want to delete this order?');
        if (proceed) {
            axios.delete(`https://chilling-caverns-52549.herokuapp.com/orders/${uniq._id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert('This order has been deleted successfully.');
                        setService({});
                        setLengthChange(true);
                    }
                })
        }
    }
    const handleUpdateStatus = e => {
        const updatedStatus = 'Approved';
        const updatedOrder = { ...uniq };
        updatedOrder.status = updatedStatus;
        axios.put(`https://chilling-caverns-52549.herokuapp.com/orders/${uniq._id}`, {
            updatedOrder
        })
            .then(res => {
                if (res.data.modifiedCount) {
                    setDefaultStatus(false)
                }
            })
    }
    return (
        <>
            {
                service._id &&
                <div className="max-w-md mx-auto h-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-left mb-4 pb-4 border-b-2 border-green-500" >
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="w-full h-full object-cover md:w-48" src={service.img} alt="Man looking at item at a store" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{service.country}</div>
                            <div className="block mt-1 text-lg leading-tight font-medium text-black">{service.place}</div>
                            <p className="mt-2 text-gray-500">{service.description}</p>
                            <p className="text-red-800">Flight Date: {uniq.date}</p>
                        </div>
                    </div>
                    {
                        updateAble ? <div className="text-right mt-4">
                            {
                                uniq.status === 'Pending' && defaultStatus ? <button onClick={handleUpdateStatus} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 shadow-lg rounded-lg duration-300 mr-2">
                                    Pending
                                </button> : <button onClick={handleUpdateStatus} className="bg-green-500  text-white font-bold py-2 px-4 shadow-lg rounded-lg duration-300 mr-2">
                                    Approved
                                </button>
                            }
                            <button onClick={() => handleDeleteOrder(service._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 shadow-lg rounded-lg duration-300 mr-2">
                                Delete
                            </button>
                        </div> : <div className="text-right mt-4">
                            <button className="bg-gray-500 text-white font-bold py-2 px-4 shadow-lg rounded-lg duration-300 mr-2">
                                Pending
                            </button>
                            <button onClick={handleDeleteOrder} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 shadow-lg rounded-lg duration-300 mr-2">
                                Delete
                            </button>
                        </div>
                    }
                </div>
            }
        </>
    );
};

export default Order;