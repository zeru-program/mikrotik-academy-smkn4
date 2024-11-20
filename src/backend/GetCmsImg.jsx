import { useState, useEffect } from 'react';

const GetCmsImg = () => {
    const [dataCmsImg, setDataCmsImg] = useState([]);
    const db = import.meta.env.VITE_DB;

    useEffect(() => {
        fetch(db + "cms_img.json")
            .then((res) => res.json())
            .then((data) => {
                const cmsArray = Object.entries(data).map(([key, value]) => ({
                    id: key,
                    ...value
                }));
                setDataCmsImg(cmsArray);
            });
    }, []);

    return { dataCmsImg, setDataCmsImg };
};

export default GetCmsImg;
