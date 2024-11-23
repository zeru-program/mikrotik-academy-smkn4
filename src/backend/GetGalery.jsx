import { useState, useEffect } from 'react';

const GetGalery = () => {
    const [dataGalery, setGalery] = useState([]);
    const db = import.meta.env.VITE_DB;

    useEffect(() => {
        fetch(db + "galery.json")
            .then((res) => res.json())
            .then((data) => {
                const galerys = Object.entries(data).map(([key, value]) => ({
                    keyr: key,
                    ...value
                }));
                setGalery(galerys);
            });
    }, []);

    return { dataGalery, setGalery };
};

export default GetGalery;
