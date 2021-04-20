import React, { useEffect, useState } from 'react'
import "./style.scss";

import HomeLeftComponent from './HomeLeftComponent';
import axios from 'axios';
import { APIS } from '../../utils/endpoints';
import AppCard from './AppCard';


const Home = () => {
    const [appsData, setappsData] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        const getApps = async () => {
            setloading(true);
            axios.get(APIS._getApps)
                .then(res => {
                    console.log(res);
                    if (res.data instanceof Array)
                        setappsData(res.data);
                    else setappsData([])
                    setloading(false)
                })
        };
        getApps();
    }, []);
    return (
        <div className="container">
            <HomeLeftComponent />
            <div className="left-fakecontainer"></div>
            <div className="right-container">
                <div className="right-top">
                    <h1>Apps</h1>
                </div>
                <div className="right-fake-top"></div>
                <div className="right-bg"></div>
                <div className="right-bottom flex">
                    {
                        !loading && appsData?.map(app => {
                            return <AppCard info={app} />

                        })
                    }
                    {
                        !loading && appsData.length === 0 && <h3>
                            No apps Available
                        </h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
