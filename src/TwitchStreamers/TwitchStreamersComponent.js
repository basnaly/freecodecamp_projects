import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { Paper } from "@mui/material";
import TitleComponent from "./TitleComponent";

const streames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
    "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

const TwitchStreamersComponent = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        requestTwich()
    }, [])

    const requestTwich = () => {
        setLoading(true);

        const requestURL = 'https://twitch-proxy.freecodecamp.rocks/twitch-api/channels/'

        axios.all(streames.map((el) => axios.get(requestURL + el)))
            .then(data => {
                setData(data.map(el => el.data))
                setFilteredData(data.map(el => el.data))
                setLoading(false)
            });    
    }  

    console.log(data)

    return (
        <div className="parent-twc">
            <TitleComponent data={ data }
                    setFilteredData={ setFilteredData } />
            <div className="d-flex flex-column justify-content-center">
                {
                    !loading &&
                    filteredData.map(el =>
                        <Paper className={ `d-flex p-1 ${!el.partner ? 'paperOff-twc' : 'paperOn-twc'}` }
                            key={el._id}>
                            <div>
                                <img src={el.logo}
                                    className="img-twc" />

                            </div>
                            <div className="title-twc">
                                {el.display_name}
                            </div>
                            <div className="description-twc">
                                {el.partner ?
                                    el.game + ':' + el.status
                                    : 'Offline'
                                }
                            </div>
                        </Paper>
                    )
                }
                <Paper className="frame-twc"></Paper>
            </div>
        </div>
    )
}

export default TwitchStreamersComponent;