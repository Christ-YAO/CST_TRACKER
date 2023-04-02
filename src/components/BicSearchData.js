import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components'
import Button from "@mui/material/Button";
import websearch from '../images/websearch.svg';

const Illustration = styled.img`
            min-width: 350px;
            max-width: 500px;
            width: 100%;y
            margin: 0;
            border-radius: 2rem;
          `

function BicSearchData({bic, input, inputValue, value}) {
    if (inputValue.length === 0 || value === '') {
        return <>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 10, width: "100%", margin: '0 auto',  marginTop: '20px', background: '#fff',boxShadow: "15px 15px 33px 0px rgba(0,0,0,0.37)",border: '5px solid #f8f8ff', p: '50px', borderRadius: 1}}>
                    <Box sx={{maxWidth: 400,}}>
                        <Typography variant='h2'  fontWeight='bold' color='#115293' textAlign='center'>Search BIC Informations</Typography>
                        <Typography color="#616161" sx={{marginTop: '40px', textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae enim quod vero quo voluptate autem laboriosam natus, minus quibusdam.</Typography>
                    </Box>
                    <Box>
                        <Illustration src={websearch} title='Bank image'/>
                    </Box>
            </Box><br /><br />
        </>
    } 

    return (
        <>
           {bic.filter((item) => {
                if(item.bic === inputValue) {
                    return item
                }
            })
            .map((item) => {
                const {id, bic, bank, map, description, details, image} = item     
                return(<>
                        <Box key={id} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', columnGap: 10, width: "100%", margin: '0 auto',  marginTop: '20px', background: '#fff',boxShadow: "15px 15px 33px 0px rgba(0,0,0,0.37)",border: '5px solid #f8f8ff', p: '50px', borderRadius: 1}}>
                            <Box sx={{position: "relative",}}>
                                <Illustration src={image} title='Bank image'/>
                                <Box sx={{position: "absolute", bottom: '-30px', right: '-40px', background: '#f8f8ff', p: '25px 0px 25px 40px', width: '80%', borderRadius: 3, opacity: 0.92}}><Typography color="#616161">{description}</Typography></Box>
                            </Box>
                            <Box sx={{ height: 500, p : '0 5px', flex: '1 1 30%', display: 'block',borderRadius: 3, maxWidth: 600, marginBottom: 5,}}>
                                <Typography variant="h3" color="#115293" sx={{fontWeight: 'bold', textTransform: 'uppercase', margin: '1.5rem 0'}}>{bank}</Typography>
                                <Typography variant="h3" color="#115293" sx={{fontWeight: 'bold', textTransform: 'uppercase', margin: '1.5rem 0'}}>{bic}</Typography>
                                <Typography variant="h5" color="#115293" sx={{fontWeight: 'bold',}}>{details}</Typography>
                                <Typography variant="body1" color="#616161" sx={{fontWeight: '100', margin: '3rem 0',}}>{map}</Typography>
                                <Button variant="outlined">En savoir plus</Button>
                            </Box><br />
                        </Box><br /><br />
                    </>)
                    
                })} 
        </>
    );
}

export default BicSearchData;