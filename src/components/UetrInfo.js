import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HistoryIcon from '@mui/icons-material/History';

function UetrInfo({items, value}) {
    if (value === '') {
        return '';
    } else if (value === items.uetr) {
    return (
        <Box
                sx={{
                maxWidth: '90vw',
                width: '100%',
                background: "lightgrey",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: 1,
                margin: '0 auto',
                "& > :not(style)": { m: 1, width: "90%" }
                }}
                noValidate
                autoComplete="off"
            >
                <Toolbar style={{display: 'flex', flexWrap: 'wrap', marginLeft: '0%', width: '95%', gap: 20, margin: '10px auto'}}>
                <Box sx={{flex: "1", minWidth: 350, height: 75, bgcolor: '#eee', p: 1.5, borderRadius: 1}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <span>Final status</span>
                        <span>08 MAR 2023-10:30 PDT</span>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                        <TaskAltIcon sx={{fontSize: 50, color: 'green', marginRight: 1}} />
                        <Box>
                            <Typography variant='h6' color="green">{items.status}</Typography>
                            <Typography sx={{fontSize: 14,}}>Credited to beneficiary customers</Typography>
                        </Box>
                    </Box>
                    
                </Box>
                <Box sx={{flex: "1", minWidth: 280, height: 75, bgcolor: '#eee', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '40%'}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <span>Instructed amount</span>
                        <span>Credited amount</span>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 0}}>
                            <Typography variant='h6'>{items.instructed_amount}</Typography>
                            <ArrowForwardIcon sx={{fontSize: 30, color: 'gray', marginRight: 1}} />
                            <Typography variant='h6' >{items.credited_amount}</Typography>
                    </Box>
                    
                </Box>
                <Box sx={{flex: "1", minWidth: 100, height: 75, bgcolor: '#eee', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '-100px'}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <Box>Deducts</Box>
                    </Box>
                    <Box style={{marginTop: 10}}>
                            <Typography variant='h6'>70 USD</Typography>
                            <Typography variant='body1'>SHA</Typography>
                    </Box>
                </Box>
                <Box sx={{flex: "1", minWidth: 180, height: 75, bgcolor: '#eee', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '25%'}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <span>Total duration</span>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                            <HistoryIcon sx={{fontSize: 30, color: 'gray', marginRight: 1}}/>
                            <Typography variant='h6'>{items.elapsed_time}</Typography>
                    </Box>
                </Box>
                <Box sx={{flex: "1", minWidth: 350, height: 75, bgcolor: '#eee', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '32%'}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <span>Traking number</span>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                            <Typography>{items.uetr}</Typography>
                    </Box>
                </Box>
            </Toolbar>
        </Box>
    )}
}

export default UetrInfo;