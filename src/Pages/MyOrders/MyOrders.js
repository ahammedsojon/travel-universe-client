
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Order from '../Order/Order';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [uniqUser, setUniqUser] = useState([]);
    const [updateAble, setUpdateAble] = useState(false);
    const [lengthChange, setLengthChange] = useState(false);
    useEffect(() => {
        axios.get(`https://chilling-caverns-52549.herokuapp.com/orders`)
            .then(res => {
                setOrders(res.data);
            })
    }, [])
    useEffect(() => {
        if (orders.length) {
            const filter = orders.filter(od => od.email === user.email);
            setUniqUser(filter)
        }
    }, [orders])
    console.log(uniqUser)
    // const hanldeDelete = id => {
    //     axios.delete(`http://localhost:5000/orders/${id}`)
    //         .then(res => console.log(res));
    // }

    return (
        <div className="py-16">
            <div className="mb-8">
                <h2 className="text-2xl text-gray-500 pb-2">Orders Available: {lengthChange ? uniqUser.length - 1 : uniqUser.length}</h2>
                <div className="h-1 w-28 bg-gray-700 mx-auto"></div>
            </div>

            {
                uniqUser.length === 0 ? <div className="flex justify-center items-center">
                    <div
                        className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
                    ></div>
                </div> :
                    uniqUser.map(uniq => <Order key={uniq._id} setLengthChange={setLengthChange} updateAble={updateAble} uniq={uniq}></Order>)
            }
        </div>
    );
};

export default MyOrders;