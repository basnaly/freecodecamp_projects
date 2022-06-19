import React, { useState } from "react";
import HeaderParserComponent from "./HeaderParserComponent";

import './HeaderParser.css';
import OutputComponent from "./OutputComponent";

const AppHeaderParser = () => {

    const [showData, setShowData] = useState({});

    return (
        <div className="parent-hdp d-flex flex-column align-items-center">

            <h3 className="d-flex m-4">
                API Project: Request Header Parser Microservice
            </h3>

            <div className="data-hdp d-flex m-2">
                Get your data:
            </div>

            <HeaderParserComponent setShowData={ setShowData }/>

            <div className="data-hdp d-flex m-2 mt-4">
                There is the output:
            </div>
            
            <OutputComponent showData={ showData }/>
                
        </div>
    )
}

export default AppHeaderParser;