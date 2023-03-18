import React, { useState } from "react";
import { Box } from '@mui/material';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import UetrInfo from "../components/UetrInfo";
import GoBackBtn from "../components/GoBackBtn";
import Progressbar from "../components/Progressbar";

function UetrPage({data}) {

    const [uetrValue, setUetrValue] = useState([])
    const [input, setInput] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)
    const value = (uetrValue[0])

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(false)
        setUetrValue([inputValue])
        setInput([inputValue])
        // setInputValue('')

        if (inputValue === '') {
          setError(!error)
        }
      }


    return (
        <>
        <Container maxWidth="xl" sx={{display: {sm: 'flex',},justifyContent: 'space-between',marginTop: '-80px', alignItems: 'center' ,gap: 5}}>
            <GoBackBtn />
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                maxWidth: 800,
                width: '100%',
                // background: "#eee",
                marginLeft: '-5px !important',
                display: "flex",
                flexWrap: "wrap",
                borderRadius: 1,
                marginBottom: 1,
                marginTop: 1,
                "& > :not(style)": { m: 1, width: "90%" }
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="UETR" variant="filled" error={error} value={inputValue} onChange={(e) => setInputValue(e.target.value)} required sx={{maxWidth: 600}}/>
                <Button sx={{maxWidth: 150}} variant="contained" onClick={handleSubmit}>Rechercher</Button>
            </Box>
    </Container>
            <hr />
        <UetrInfo inputValue={inputValue} value={value}/>
        <hr />
        <Progressbar data={data} inputValue={inputValue} value={value}/>
        
    </>
    )
}

export default UetrPage;