
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Order from '../Order/Order';

const ManageOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [uniqUser, setUniqUser] = useState([]);
    const [updateAble, setUpdateAble] = useState(true);
    const [lengthChange, setLengthChange] = useState(false);
    useEffect(() => {
        axios.get(`https://chilling-caverns-52549.herokuapp.com/orders`)
            .then(res => {
                setOrders(res.data);
            })
    }, [])
    console.log(uniqUser)

    return (
        <div className="py-16">
            <div className="mb-8">
                <h2 className="text-2xl text-gray-500 pb-2">Orders Available: {lengthChange ? orders.length - 1 : orders.length}</h2>
                <div className="h-1 w-28 bg-gray-700 mx-auto"></div>
            </div>

            {
                orders.length &&
                orders.map(uniq => <Order key={uniq._id} setLengthChange={setLengthChange} updateAble={updateAble} uniq={uniq}></Order>)
            }
        </div>
    );
};

export default ManageOrders;