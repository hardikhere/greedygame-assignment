import React from 'react'
import "./style.scss";
import asset1 from "../../assets/asset1.svg"
import fillRateIcon from "../../assets/icon1.svg"
import ctrIcon from "../../assets/icon2.svg"
import refreshIcon from "../../assets/icon3.svg"
import quickIntegrationIcon from "../../assets/icon4.svg"


const Home = () => {
    return (
        <div className="container">
            <div className="left-container flex flex-col">
                <div className="left-top">
                    <div className="heading">adsoul</div>
                    <center>
                        <img src={asset1} alt="" srcset="" />
                    </center>
                </div>
                <div className="left-bottom text-white">
                    <h2>Revenue Optimization</h2>
                    <div className="flex flex-wrap iconsbox">
                        <div className="iconitem">
                            <img src={fillRateIcon} alt="" srcset="" />
                            <p>Fill Rate</p>
                        </div>
                        <div className="iconitem">
                            <img src={ctrIcon} alt="" srcset="" />
                            <p>Improve CTR</p>
                        </div>

                        <div className="iconitem">
                            <img src={refreshIcon} alt="" srcset="" />
                            <p>Improve Refresh Rate</p>
                        </div>

                        <div className="iconitem">
                            <img src={quickIntegrationIcon} alt="" srcset="" />
                            <p>Quick Integration</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-fakecontainer"></div>
            <div className="right-container">
                <div className="right-top">
                    <h1>Apps</h1>
                </div>
                <div className="right-fake-top"></div>
                <div className="right-bottom flex">
                    <div className="app-card">

                    </div>

                    <div className="app-card">

                    </div>

                    <div className="app-card">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
