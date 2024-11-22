import { useState, useEffect } from 'react';

const GetTrainer = () => {
    const [dataTrainer, setDataTrainer] = useState([]);
    const db = import.meta.env.VITE_DB;

    useEffect(() => {
        fetch(db + "trainer.json")
            .then((res) => res.json())
            .then((data) => {
                // Convert CMS object to array with keys for access
                const trainer = Object.entries(data).map(([key, value]) => ({
                    key: key,
                    ...value
                }));
                setDataTrainer(trainer);
            });
    }, []);

    return { dataTrainer,setDataTrainer };
};

export default GetTrainer;
