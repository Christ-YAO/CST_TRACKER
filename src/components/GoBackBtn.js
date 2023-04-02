import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box } from '@mui/material';

const GoBackBtn = () => {
    const history = useNavigate();
    return (
        <Box sx={{ paddingTop: 5}}>
          <Button variant="contained" onClick={() => history("/", {goBack:true})} sx={{width: 100, height: 50,}}>Back</Button>
        </Box>
    );
};

export default GoBackBtn;