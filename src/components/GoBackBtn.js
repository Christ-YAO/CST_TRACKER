import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const GoBackBtn = () => {
    const history = useNavigate();
    return (
        <>
          <Button variant="contained" onClick={() => history("/", {goBack:true})} sx={{width: 100, height: 50,}}>Back</Button>
        </>
    );
};

export default GoBackBtn;