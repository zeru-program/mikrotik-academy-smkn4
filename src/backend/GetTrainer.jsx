import { useState, useEffect } from 'react';

const GetTrainer = () => {
    const [dataTrainer, setDataTrainer] = useState([]);
    const db = import.meta.env.VITE_DB;

    useEffect(() => {
        fetch(db + "trainer.json")
            .then((res) => res.json())
            .then((data) => {
                setDataTrainer(Object.values(data));
            });
    }, []);

    return { dataTrainer, setDataTrainer };
};

export default GetTrainer;
