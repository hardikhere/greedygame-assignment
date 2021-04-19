import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { monthNames, ordinal_suffix_of } from '../../utils/common';
import { APIS } from '../../utils/endpoints';
import AdsoulHeader from '../Home/AdsoulHeader';
import "./style.scss";
import leftArrow from "../../assets/arrow-left-solid.svg"
const AppProfile = () => {
    const params = useParams();
    const history = useHistory();
    const [basicDetails, setbasicDetails] = useState({
        id: "",
        publisherName: "",
        appName: ""
    });
    const [statsData, setStatsData] = useState([]);
    const [loading, setloading] = useState(false)
    useEffect(() => {
        if (!history.location.state)
            window.location.replace("/");
        else setbasicDetails(history.location.state);

        if (params.id) {
            setloading(true);
            axios.get(APIS._getStatsById(params.id))
                .then(res => {
                    console.log("found stat", res.data);
                    setStatsData(res.data)
                    setloading(false);
                })
        }
    }, [params.id]);
    const getRenderRate = (impression, adResponse) => {
        //console.log(impression , adResponse)
        return ((impression / adResponse) * 100).toFixed() + "%"
    };

    const formatDateString = (dateString) => {
        const dateArr = dateString.split("-");
        const day = dateArr[0];
        const month = dateArr[1];
        const year = dateArr[2];
        return `${ordinal_suffix_of(day)} ${monthNames[parseInt(month)]}, ${year}`
    }
    return (
        <div>
            <AdsoulHeader />
            <div className="name-area">
                <div className="flex card-head">
                    <div style={{ width: "5rem" }} onClick={
                        () => history.push("/")
                    }>
                        <img className="leftarrow"
                            src={leftArrow} style={{ height: "2rem" }} alt="" srcset="" />
                    </div>
                    <div className="card-logo"></div>
                    <div style={{ marginLeft: "0.7rem" }}>
                        <div className="headingtext">{basicDetails.appName}</div>
                        <small>{basicDetails.publisherName}</small>
                    </div>
                </div>
            </div>

            <div className="table-area">
                <table id="stats-table">
                    <tr id="table-head-row">
                        <th>Date</th>
                        <th>Revenue</th>
                        <th>Ad Requests</th>
                        <th>Ad Responses</th>
                        <th>Impressions</th>
                        <th>Render Rate</th>
                    </tr>

                    {!loading && statsData.map(row => {
                        return <tr>
                            <td>{formatDateString(row.date)}</td>
                            <td>{
                                Number(parseFloat(row.revenue).toFixed(1)).toLocaleString('en', {
                                    minimumFractionDigits: 1
                                })
                            }</td>
                            <td>{
                                Number(parseFloat(row.adRequest).toFixed(1)).toLocaleString('en', {
                                    minimumFractionDigits: 0
                                })}</td>
                            <td>{
                                Number(parseFloat(row.adResponse).toFixed(1)).toLocaleString('en', {
                                    minimumFractionDigits: 0
                                })
                            }</td>
                            <td>{Number(parseFloat(row.impressions).toFixed(0)).toLocaleString('en', {
                                minimumFractionDigits: 0
                            })}</td>
                            <td>{getRenderRate(row.impressions, row.adResponse)}</td>
                        </tr>
                    })}
                </table>
            </div>
        </div>
    )
}

export default AppProfile
