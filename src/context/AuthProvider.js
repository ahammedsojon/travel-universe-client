import React, { createContext, useState, useEffect } from 'react';
import useFirebase from '../hooks/useFirebase';
import { addToDb, getStoredCart } from '../utilities/fakedb';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const [booking, setBooking] = useState('')
    // useEffect(() => {
    //     const savedCart = getStoredCart();
    //     const storeCart = [];
    //     if (savedCart) {
    //         for (const key in savedCart) {
    //             storeCart.push(key)
    //         }
    //         setBooking(storeCart);
    //     }
    // }, [])
    const handleBooking = id => {
        // const exists = booking.find(booked => booked === id);
        // if (exists) {
        //     const remainingBooking = booking.filter(booked => booked !== id);
        //     const newBooking = [...remainingBooking, id];
        //     setBooking(newBooking);
        // } else {
        //     const newBooking = [...booking, id];
        //     setBooking(newBooking);
        // }
        // addToDb(id);
        setBooking(id);
    }
    const value = {
        ...allContext,
        handleBooking,
        booking
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;