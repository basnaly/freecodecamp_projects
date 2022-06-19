import React from "react";

const OutputComponent = ({ showData }) => {

    return (

        <div>
            { Object.keys(showData).length > 0 &&
                <div className="res-hdp d-flex flex-column align-items-center m-3">
                    <div className="format-hdp ">
                        ipaddress:
                        <span className="span-hdp">
                            {showData?.ipaddress}
                        </span>
                    </div>
                    <div className="format-hdp">
                        language:
                        <span className="span-hdp">
                            {showData?.language}
                        </span>
                    </div>
                    <div className="format-hdp">
                        software:
                        <span className="span-hdp">
                            {showData?.software}
                        </span>
                    </div>
                </div>
            }
        </div>
    )   
}

export default OutputComponent;