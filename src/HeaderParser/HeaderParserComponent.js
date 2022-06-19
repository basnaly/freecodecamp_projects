import React, { useState } from "react";
import axios from "axios";

import { Button } from "@mui/material";
import { styled } from "@mui/material";

const SubmitButton = styled(Button)({
    textTransform: 'none',
    color: 'cadetblue',
    border: '1px solid cadetblue',
    fontSize: '16px',
    backgroundColor: 'azure',
    padding: '3px 7px',
})

const requestURL = 'https://freecodecampbackend.basnaly.repl.co/req-header/api/whoami';

const HeaderParserComponent = ({setShowData}) => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const Submit = () => {
        setLoading(true);

        axios.get(requestURL)
            .then(result => {
                console.log(result.data)
                if (result?.data?.error) {
                    setError(result?.data?.error)
                } else {
                    setShowData(result.data)
                }
                setLoading(false)
            })
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <SubmitButton onClick={ Submit }
                variant={'outlined'}
                className="mt-4 mb-1 mx-3">
                Who Am I?
            </SubmitButton>
        </div>
    )
}

export default HeaderParserComponent;