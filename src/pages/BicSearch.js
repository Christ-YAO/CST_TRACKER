import React, { useState } from "react";
import { Box } from '@mui/material';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import bank from '../images/bank.jpg';
import erreur from '../images/404.svg';
import BicSearchData from "../components/BicSearchData";

const banks = [     
                {
                    id: 0,
                    bic: "BICXXXXX01",
                    bank: 'NSIA Bank',
                    details: 'Détails du code BIC de BANQUE INTERNATIONALE POUR LE COMMERCE ET L\'INDUSTRIE DE LA COTE D\'IVOIRE',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eius maiores, fugit enim inventore at quisquam incidunt! Odit, harum iusto?',
                    map: 'BANQUE INTERNATIONALE POUR LE COMMERCE ET L\'INDUSTRIE DE LA COTE D\'IVOIRE, AVENUE FRANCHET D\'ESPEREY, ABIDJAN, Cote D\'ivoire',
                    image: bank
                },
                {
                    id: 2,
                    bic: "BICXXXXX02",
                    bank: 'NSIA Bank',
                    details: 'Détails du code BIC de BANQUE INTERNATIONALE POUR LE COMMERCE ET L\'INDUSTRIE DE LA COTE D\'IVOIRE',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eius maiores, fugit enim inventore at quisquam incidunt! Odit, harum iusto?',
                    map: 'BANQUE INTERNATIONALE POUR LE COMMERCE ET L\'INDUSTRIE DE LA COTE D\'IVOIRE, AVENUE FRANCHET D\'ESPEREY, ABIDJAN, Cote D\'ivoire',
                    image: erreur
                },
            ]

const options = [
                "BICXXXXX01",
                "BICXXXXX02",
            ]


function BicSearch() {

    const [bic] = useState(banks)
    const [input, setInput] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)
    const value = (input[0])
    console.log(input.length)

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(false)
        setInput([inputValue])
        // setInputValue('')

        if (inputValue === '') {
          setError(!error)
        }
      }


    return (
        <Box margin='0 auto' sx={{width:{xl: "80%", lg: "80%", md: "80%", sm: "85%", xs: "95%",}}}>
        <Container maxWidth="xl" sx={{display: {sm: 'flex',},justifyContent: 'center',marginTop: '-80px', }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                maxWidth: 820,
                width: '100%',
                // background: "#eee",
                marginLeft: '-5px !important',
                display: {md : 'flex'} ,
                borderRadius: 1,
                marginBottom: 1,
                marginTop: 1,
                "& > :not(style)": { m: 1, width: "90%" }
                }}
                noValidate
                autoComplete="off"
            >
<Autocomplete
        // value={inputValue}
        onChange={(newValue) => {
          setInput(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField variant="filled" required error={error} {...params} label="BIC" />}
      />
                <Button type="submit" sx={{maxWidth: 130, height: 55}} variant="contained" onClick={handleSubmit}>Search BIC</Button>
            </Box>
        </Container>
        <BicSearchData bic={bic} input={input} inputValue={inputValue} value={value} />
    </Box>
    )
}

export default BicSearch;