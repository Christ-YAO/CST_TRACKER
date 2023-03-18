// import { Box, Typography } from '@mui/material';
// import React from 'react';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import HistoryIcon from '@mui/icons-material/History';

// function UetrData({data, value, inputValue, item, index}) {
//     return <Box
//             sx={{
//             position: 'relative',
//             maxWidth: '90vw',
//             width: '100%',
//             background: "lightgrey",
//             display: "flex",
//             justifyContent: 'space-around',
//             flexWrap: 'wrap',
//             gap: 2,
//             paddingBottom: "20px",
//             padding: '20px',
//             borderRadius: 1,
//             margin: '0 auto',
//             "& > :not(style)": { m: 1, width: "90%" }
//             }}
//             noValidate
//             autoComplete="off"
//         >
//             {data.map((item, index) => {
//                 const {title, bic, country, city, date1, date2, hour1, hour2, time, reference, deducts} = item;

//                 const func = ({date1, date2}) => {
//                     if (date1 && date2) {
//                         return (
//                             <Box sx={{height: '100px !important'}}>
//                                 <Box style={{ display: 'flex', justifyContent: 'space-between',}}>
//                                     <Box>
//                                         <Box>
//                                             <ArrowForwardIcon sx={{fontSize: 30, color: 'gray',}} />
//                                             <AccessTimeIcon sx={{fontSize: 30, color: 'gray',}} />
//                                         </Box>
//                                         <Box style={{textTransform: 'uppercase',}}>
//                                             <Typography variant='h6' sx={{fontSize: 15}}>{date1}</Typography>
//                                             <Typography>{hour1}</Typography>
//                                         </Box>  
//                                     </Box>
//                                     <Box style={{height: '85px', width: 1, background: 'gray'}}></Box>
//                                     <Box>
//                                         <Box>
//                                             <AccessTimeIcon sx={{fontSize: 30, color: 'gray',}} />
//                                             <ArrowForwardIcon sx={{fontSize: 30, color: 'gray',}} />
//                                         </Box>
//                                         <Box sx={{textTransform: 'uppercase',}}>
//                                             <Typography variant='h6' sx={{fontSize: 15}}>{date2}</Typography>
//                                             <Typography>{hour2}</Typography>
//                                         </Box>
//                                     </Box>
//                                 </Box>
//                                 <Box sx={{marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                                 <HistoryIcon sx={{fontSize: 30, color: 'gray', marginRight: 1}} />
//                                 <Typography>{time}</Typography>
//                             </Box>
//                         </Box>
//                         )
//                     }
//                     if (date1 || date2) {
//                         return (
//                             <Box>
//                                 <Box>
//                                     <AccessTimeIcon sx={{fontSize: 30, color: 'gray',}} />
//                                     <ArrowForwardIcon sx={{fontSize: 30, color: 'gray',}} />
//                                 </Box>
//                                 <Box style={{textTransform: 'uppercase',}}>
//                                     <Typography variant='h6' sx={{fontSize: 15}}>{date1} {date2}</Typography>
//                                     <Typography>{hour1} {hour2}</Typography>
//                                 </Box>  
//                             </Box>)
//                         }
//                 }
//                 if(inputValue === '') {
//                     return ''
//                 } 
//                 else if (inputValue === value) {
//                     return <Box key={index} sx={{
//                         maxWidth: '350px !important',
//                         width: '100% !important',
//                         bgcolor: '#eee',
//                         borderRadius: 1,
//                     }}>
            
//                         <h4 style={{height: 40,textTransform: 'uppercase', borderBottom: '1px solid #efe', padding: '0px 15px 10px 15px', textAlign: 'center'}}>{title}</h4>
//                         <Box style={{borderBottom: '1px solid #efe', paddingBottom: 15}}>
//                             <Typography style={{textTransform: 'uppercase', paddingLeft: 30}}>bic : {bic}</Typography>
//                             <Box style={{display: 'flex', alignItems: 'center', marginTop: 10, paddingLeft: 20}}>
//                                 <LocationOnIcon sx={{fontSize: 50, color: 'gray'}} />
//                                 <Box style={{textTransform: 'uppercase', paddingLeft: 10}}>
//                                     <Typography variant='h6'>{country}</Typography>
//                                     <Typography>{city}</Typography>
//                                 </Box>
//                             </Box>
//                         </Box>
//                         <Box style={{textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', borderBottom: '1px solid #efe', height: '120px'}}>
//                             {func({date1, date2})}
//                         </Box>
//                         <Box style={{padding: 10}}>
//                             <Typography>Senders's reference : {reference}</Typography>
//                             <Typography sx={{marginTop: 2}}>Senders's deducts : {deducts} USD</Typography>
//                         </Box>
//                     </Box>
//                     }

                

                
//             })}
//         </Box>
// }

// export default UetrData;


import { Box, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HistoryIcon from '@mui/icons-material/History';

function ProgressData({item, index, value, inputValue}) {
    const {title, bic, country, city, date1, date2, hour1, hour2, time, reference, deducts} = item;

    const func = ({date1, date2}) => {
        if (date1 && date2) {
            return (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between',}}>
                        <div>
                            <div>
                                <ArrowForwardIcon sx={{fontSize: 30, color: 'gray',}} />
                                <AccessTimeIcon sx={{fontSize: 30, color: 'gray',}} />
                            </div>
                            <div style={{textTransform: 'uppercase',}}>
                                <Typography variant='h6' sx={{fontSize: 15}}>{date1}</Typography>
                                <Typography>{hour1}</Typography>
                            </div>  
                        </div>
                        <div style={{height: '85px', width: 1, background: 'gray'}}></div>
                        <div>
                            <div>
                                <AccessTimeIcon sx={{fontSize: 30, color: 'gray',}} />
                                <ArrowForwardIcon sx={{fontSize: 30, color: 'gray',}} />
                            </div>
                            <div style={{textTransform: 'uppercase',}}>
                                <Typography variant='h6' sx={{fontSize: 15}}>{date2}</Typography>
                                <Typography>{hour2}</Typography>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <HistoryIcon sx={{fontSize: 30, color: 'gray', marginRight: 1}} />
                    <Typography>{time}</Typography>
                </div>
            </div>
            )
        }
        if (date1 || date2) {
            return (
                <div>
                    <div>
                        <AccessTimeIcon sx={{fontSize: 30, color: 'gray',}} />
                        <ArrowForwardIcon sx={{fontSize: 30, color: 'gray',}} />
                    </div>
                    <div style={{textTransform: 'uppercase',}}>
                        <Typography variant='h6' sx={{fontSize: 15}}>{date1} {date2}</Typography>
                        <Typography>{hour1} {hour2}</Typography>
                    </div>  
                </div>)
            }
    }
        return (
            <>
                    <Box key={index} className='box' sx={{
                        height: 480, 
                        width: 320,
                        bgcolor: '#eee',
                        position: 'absolute',
                        marginTop : 2,
                        transform: 'translateX(-38.5%)',
                        borderRadius: 2,
                    }}>
            
                        <h4 style={{height: 40,textTransform: 'uppercase', borderBottom: '1px solid #efe', padding: ' 0 15px 10px 15px', textAlign: 'center'}}>{title}</h4>
                        <div style={{borderBottom: '1px solid #efe', paddingBottom: 15}}>
                            <Typography style={{textTransform: 'uppercase', paddingLeft: 30}}>bic : {bic}</Typography>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: 10, paddingLeft: 20}}>
                                <LocationOnIcon sx={{fontSize: 50, color: 'gray'}} />
                                <div style={{textTransform: 'uppercase', paddingLeft: 10}}>
                                    <Typography variant='h6'>{country}</Typography>
                                    <Typography>{city}</Typography>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', borderBottom: '1px solid #efe', height: '110px'}}>
                            {func({date1, date2})}
                        </div>
                        <div style={{padding: 20}}>
                            <Typography>Senders's reference : {reference}</Typography>
                            <Typography>Senders's deducts : {deducts} USD</Typography>
                        </div>

                        {/* {console.log(id)} */}
                    </Box></>
        )
}
export default ProgressData;