import { Box, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HistoryIcon from '@mui/icons-material/History';

function ProgressData({item, index}) {
    const {bank_name, bic, country, city, elapsed_time, sender_reference, deduct} = item;


    // const func = ({date1, date2}) => {
    //     if (date1 && date2) {
    //         return (
    //             <div>
    //                 <div style={{ display: 'flex', justifyContent: 'space-between',}}>
    //                     <div>
    //                         <div>
    //                             <ArrowForwardIcon sx={{fontSize: 30, color: 'gray',}} />
    //                             <AccessTimeIcon sx={{fontSize: 30, color: 'gray',}} />
    //                         </div>
    //                         <div style={{textTransform: 'uppercase',}}>
    //                             <Typography variant='h6' sx={{fontSize: 15}}>{date1}</Typography>
    //                             <Typography>{hour1}</Typography>
    //                         </div>  
    //                     </div>
    //                     <div style={{height: '85px', width: 1, background: 'gray'}}></div>
    //                     <div>
    //                         <div>
    //                             <AccessTimeIcon sx={{fontSize: 30, color: 'gray',}} />
    //                             <ArrowForwardIcon sx={{fontSize: 30, color: 'gray',}} />
    //                         </div>
    //                         <div style={{textTransform: 'uppercase',}}>
    //                             <Typography variant='h6' sx={{fontSize: 15}}>{date2}</Typography>
    //                             <Typography>{hour2}</Typography>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div style={{marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    //                 <HistoryIcon sx={{fontSize: 30, color: 'gray', marginRight: 1}} />
    //                 <Typography>{elapsed_time}</Typography>
    //             </div>
    //         </div>
    //         )
    //     }
    //     if (date1 || date2) {
    //         return (
    //             <div>
    //                 <div>
    //                     <AccessTimeIcon sx={{fontSize: 30, color: 'gray',}} />
    //                     <ArrowForwardIcon sx={{fontSize: 30, color: 'gray',}} />
    //                 </div>
    //                 <div style={{textTransform: 'uppercase',}}>
    //                     <Typography variant='h6' sx={{fontSize: 15}}>{date1} {date2}</Typography>
    //                     <Typography>{hour1} {hour2}</Typography>
    //                 </div>  
    //             </div>)
    //         }
    // }
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
            
                        <h4 style={{height: 40,textTransform: 'uppercase', borderBottom: '1px solid gray', padding: ' 0 15px 10px 15px', textAlign: 'center'}}>{bank_name}</h4>
                        <div style={{borderBottom: '1px solid gray', paddingBottom: 15}}>
                            <Typography style={{textTransform: 'uppercase', paddingLeft: 30}}>bic : {bic}</Typography>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: 10, paddingLeft: 20}}>
                                <LocationOnIcon sx={{fontSize: 50, color: 'gray'}} />
                                <div style={{textTransform: 'uppercase', paddingLeft: 10}}>
                                    <Typography variant='h6'>{country}</Typography>
                                    <Typography>{city}</Typography>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', borderBottom: '1px solid gray', height: '110px'}}>
                            <div>
                            <div>
                                <div>
                                    <AccessTimeIcon sx={{fontSize: 30, color: 'gray',}} />
                                    <ArrowForwardIcon sx={{fontSize: 30, color: 'gray',}} />
                                </div>
                            </div>
                                <div style={{marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <HistoryIcon sx={{fontSize: 30, color: 'gray', marginRight: 1}} />
                                    <Typography>{elapsed_time}</Typography>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: 20}}>
                            <Typography>Senders's reference : {sender_reference}</Typography><br />
                            <Typography>Senders's deducts : {deduct}</Typography>
                        </div>

                        {/* {console.log(id)} */}
                    </Box></>
        )
}
export default ProgressData;