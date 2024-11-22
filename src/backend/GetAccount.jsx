import { useState, useEffect } from 'react';

const GetAccount = () => {
    const [dataAccount, setDataAccount] = useState([]);
    const db = import.meta.env.VITE_DB;

    useEffect(() => {
        fetch(db + "account.json")
            .then((res) => res.json())
            .then((data) => {
                // Convert CMS object to array with keys for access
                const acc = Object.entries(data).map(([key, value]) => ({
                    keyr: key,
                    ...value
                }));
                setDataAccount(acc);
            });
    }, []);

    return { dataAccount, setDataAccount };
};

export default GetAccount;
