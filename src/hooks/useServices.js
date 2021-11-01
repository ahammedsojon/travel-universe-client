import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('https://chilling-caverns-52549.herokuapp.com/services')
            .then(res => {
                setServices(res.data);
            })
    }, [])
    return [services, setServices];
}

export default useServices;