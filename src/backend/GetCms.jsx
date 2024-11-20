import { useState, useEffect } from 'react';

const GetCms = () => {
    const [dataCms, setDataCms] = useState([]);
    const db = import.meta.env.VITE_DB;

    useEffect(() => {
        fetch(db + "cms.json")
            .then((res) => res.json())
            .then((data) => {
                // Convert CMS object to array with keys for access
                const cmsArray = Object.entries(data).map(([key, value]) => ({
                    id: key,
                    ...value
                }));
                setDataCms(cmsArray);
            });
    }, []);

    return { dataCms, setDataCms };
};

export default GetCms;
