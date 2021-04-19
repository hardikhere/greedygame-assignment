import React from 'react'
import { useHistory } from 'react-router'
import arrowRight from "../../assets/arrow-right-solid.svg";

const AppCard = (props) => {
    const history = useHistory();
    return (
        <div className="card flex flex-col" key={props.id + "app"}>
            <div className="flex card-head" onClick={
                () => history.push({
                    pathname: `/app/${props.info.id}`,
                    state: props.info
                })
            } >
                <div style={{ width: "90%" }} className="flex">
                    <div className="card-logo"></div>
                    <div style={{ marginLeft: "0.7rem" }}>
                        <div className="headingtext">{props.info.appName}</div>
                        <small>{props.info.publisherName}</small>
                    </div>
                </div>
                <div>
                    <img className="rightarrow"
                        src={arrowRight} style={{ height: "2rem" }} alt="" />
                </div>
            </div>

            <div className="card-details">
                <div className="card-details-item">
                    <small style={{ height: "20%" }}>Revenue</small>
                    <div style={{ height: "80%" }} className="xxltext">$89</div>
                </div>


                <div className="card-details-item">
                    <small style={{ height: "20%" }}>Ad requests</small>
                    <div style={{ height: "80%" }} className="xxltext">34M</div>
                </div>



                <div className="card-details-item">
                    <small style={{ height: "20%" }}>Ad response</small>
                    <div style={{ height: "80%" }} className="xxltext">10M</div>
                </div>


                <div className="card-details-item">
                    <small style={{ height: "20%" }}>Impressions</small>
                    <div style={{ height: "80%" }} className="xxltext">10M</div>
                </div>
            </div>
        </div>


    )
}

export default AppCard
