import { useState, useEffect } from 'react';

const GetCms = () => {
    const [cms, setCms] = useState([]);
    const db = import.meta.env.VITE_DB;
    useEffect(() => {
        fetch(db + "cms.json")
            .then((res) => res.json())
            .then((data) => setCms(Object.values(data)));
    }, []);

    return { cms, setCms };
}

export default GetCms;