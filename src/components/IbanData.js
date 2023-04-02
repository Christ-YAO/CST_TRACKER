import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import Button from "@mui/material/Button";

function IbanData({inputValue, value, ibanList}) {
        if (inputValue === '') {
            return ""
        } else {
            return <>
            
                    {ibanList.filter((option) => {
                        if(option.label === value) {
                            return option.label
                        } 
                    })
                    .map((option, index) => {
                        return <>
                        <hr style={{margin: '10px -30px',}} />
                        
                        <Link key={index} href={`/uetrPage/${option.label}`} 
                        sx={{
                          // maxWidth : "75%",
                          minWidth : 460,
                            display: 'flex',
                            textDecoration: 'none',
                            // margin: '0 auto',
                            borderRadius: 1,
                            }}
                        >
                            <Button variant='outlined' sx={{position: 'relative', transition: '0.3s' ,margin: '10px', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between', width: {xl:'100%', md:'100%', sm:'100%', xs:'80%'},
                            background: '#0a62d0', height: '100px',
                            color: '#fff',
                            "&:hover": { background: '#fff', color: "#0a62d0"},}}>
                                <Typography variant="h6" sx={{fontSize:{md:'20px', sm:'16.5px', xs: '16px'}}}>{option.label}</Typography>
                                <Typography sx={{textTransform: 'capitalize'}}>{option.year}</Typography>
                            </Button>
                        </Link>
                    </>
                    })}
        </>
        }
}
export default IbanData;