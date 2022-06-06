import React, { useState } from "react";

import { Paper } from "@mui/material";

const TitleComponent = ({ data, setFilteredData }) => {

    const [active, setActive] = useState('All');

    const filterData = (arg) => {

        if (arg === 'All') {
            setFilteredData(data)
            setActive('All')
        }
        else if (arg === 'On') {
            setFilteredData(data.filter(el => el.partner));
            setActive('On')
        }
        else {
            setFilteredData(data.filter(el => !el.partner));
            setActive('Off')
        }
    }

    return (

        <Paper className="div-twc d-flex align-items-start justify-content-between">
            <div className="twitch-twc d-flex flex-column">
                TWITCH STREAMERS
            </div>
            <div className="status-twc d-flex flex-column align-items-end justify-content-center">
                <div className={(active === 'All' ? "active-twc" : "") + " hover-twc spanAll-twc"}>
                    <div onClick={() => filterData('All')}>
                        <span className="p-3">◀</span>
                        All
                    </div>
                </div>
                <div className={(active === 'On' ? "active-twc" : "") + " hover-twc spanOnline-twc"}>
                    <div onClick={() => filterData('On')}>
                        <span className="p-3">◀</span>
                        Online
                    </div>
                </div>
                <div className={(active === 'Off' ? "active-twc" : "") + " hover-twc spanOffline-twc"}>
                    <div onClick={() => filterData()}>
                        <span className="p-3">◀</span>
                        Offline
                    </div>
                </div>
            </div>
        </Paper>
    )
}

export default TitleComponent;