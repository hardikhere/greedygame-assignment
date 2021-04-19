import React from 'react'
import asset1 from "../../assets/asset1.svg"
import fillRateIcon from "../../assets/icon1.svg"
import ctrIcon from "../../assets/icon2.svg"
import refreshIcon from "../../assets/icon3.svg"
import quickIntegrationIcon from "../../assets/icon4.svg"
import AdsoulHeader from './AdsoulHeader'

const HomeLeftComponent = () => {
    return (
        <div className="left-container flex flex-col">
            <div className="left-top">
                <AdsoulHeader />
                <center>
                    <img src={asset1} style={{ height: "12rem" }} alt="" srcset="" />
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

    )
}

export default HomeLeftComponent
