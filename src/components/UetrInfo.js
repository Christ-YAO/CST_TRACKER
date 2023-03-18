import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HistoryIcon from '@mui/icons-material/History';

function UetrInfo({inputValue, value}) {
    if (inputValue === '') {
        return '';
    } else if (inputValue === value) {
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
                <Box sx={{flex: "1", minWidth: 300, height: 75, bgcolor: '#eee', p: 1.5, borderRadius: 1}}>
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
                            <Typography variant='h6' color="green">Completed</Typography>
                            <Typography sx={{fontSize: 14,}}>Credited to beneficiary customers</Typography>
                        </Box>
                    </Box>
                    
                </Box>
                <Box sx={{flex: "1", minWidth: 320, height: 75, bgcolor: '#eee', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '10%'}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <span>Final status</span>
                        <span>08 MAR 2023-10:30 PDT</span>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 0}}>
                            <Typography variant='h6'>485,000.00 USD</Typography>
                            <ArrowForwardIcon sx={{fontSize: 30, color: 'gray', marginRight: 1}} />
                            <Typography variant='h6' >484,930.00 USD</Typography>
                    </Box>
                    
                </Box>
                <Box sx={{flex: "1", minWidth: 100, height: 75, bgcolor: '#eee', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '-100px'}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <Box>Final status</Box>
                    </Box>
                    <Box style={{marginTop: 10}}>
                            <Typography variant='h6'>70 USD</Typography>
                            <Typography variant='body1'>SHA</Typography>
                    </Box>
                </Box>
                <Box sx={{flex: "1", minWidth: 160, height: 75, bgcolor: '#eee', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '25%'}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <span>Total duration</span>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                            <HistoryIcon sx={{fontSize: 30, color: 'gray', marginRight: 1}}/>
                            <Typography variant='h6'>6hr 10min</Typography>
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
                            <Typography>3546553e-0967-4c5b-b380-036dcb1cbf46</Typography>
                    </Box>
                </Box>
            </Toolbar>
        </Box>
    )}
}

export default UetrInfo;