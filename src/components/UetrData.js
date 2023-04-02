import { Box, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HistoryIcon from '@mui/icons-material/History';

function ProgressData({data, intermediary}) {
    // console.log(senderData)
    const {status, bank_name, bic, country, city, deduct} = data.event_data;
    let bgColor = status === "Completed" ? "#1976d2" : "#f8f8ff";
    let color = status === "Completed" ? "#fff" : "#667";

    const func = () => {
        if (data.send_date && data.received_date) {
            return <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                <div>
                    <div>
                        <ArrowForwardIcon sx={{fontSize: 30,}} />
                        <AccessTimeIcon sx={{fontSize: 30,}} />
                    </div>
                    <div>
                        {data.received_date}
                    </div>
                </div>
                <div>
                    <div>
                        <AccessTimeIcon sx={{fontSize: 30,}} />
                        <ArrowForwardIcon sx={{fontSize: 30,}} />
                    </div>
                    <div>
                        {data.send_date}
                    </div>
                </div>
        </div>
        } else if (data.send_date) {
            return <div>
                <div>
                    <ArrowForwardIcon sx={{fontSize: 30,}} />
                    <AccessTimeIcon sx={{fontSize: 30,}} />
                </div>
                <div>
                    {data.send_date}
                </div>
        </div>
        } 
        if (data.credit_date) {
            return <div>
                <div>
                    <AccessTimeIcon sx={{fontSize: 30,}} />
                    <ArrowForwardIcon sx={{fontSize: 30,}} />
                </div>
                <div>
                    {data.credit_date}
                </div>
            </div>
        } 
    }
    

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
            <Box>
                <Box className='box' bgcolor={bgColor} color={color} sx={{
                        height: 500, 
                        width: 320,
                        position: 'absolute',
                        marginTop : 2,
                        transform: 'translateX(-38.5%)',
                        borderRadius: 2,
                    }}
                    >
                        <div style={{borderBottom: '1px solid', paddingBottom: 15}}>
                            <h4 style={{marginTop: 0, borderRadius: 3,textTransform: 'uppercase', borderBottom: '1px solid', padding: ' 15px 15px 10px 15px', textAlign: 'center',}}>{bank_name}</h4>
                            <Typography style={{textTransform: 'uppercase', paddingLeft: 30}}>bic : {bic}</Typography>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: 10, paddingLeft: 20}}>
                                <LocationOnIcon sx={{fontSize: 50,}} />
                                <div style={{textTransform: 'uppercase', paddingLeft: 10}}>
                                    <Typography variant='h6'>{country}</Typography>
                                    <Typography>{city}</Typography>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', borderBottom: '1px solid', height: '150px'}}>
                            {func()}
                        </div>
                        <div style={{padding: 20}}>
                            <Typography>Senders's reference : {data.sender_reference}</Typography><br />
                            <Typography>Senders's deducts : {deduct}</Typography>
                        </div>
                    </Box> 
                    {/* {status === "Completed" ? <Box className='box' sx={{
                        // height: 410, 
                        width: 320,
                        position: 'absolute',
                        marginTop : 2,
                        transform: 'translateX(-38.5%)',
                        bgcolor: "#1976d2",
                        color: "#fff",
                        borderRadius: 2,
                    }}
                    >
                        <div style={{borderBottom: '1px solid #f8f8ff', paddingBottom: 15}}>
                            <h4 style={{height: 60, marginTop: 0, borderRadius: 3,textTransform: 'uppercase', borderBottom: '1px solid #f8f8ff', padding: ' 15px 15px 10px 15px', textAlign: 'center',}}>{bank_name}</h4>
                            <Typography style={{textTransform: 'uppercase', paddingLeft: 30}}>bic : {bic}</Typography>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: 10, paddingLeft: 20}}>
                                <LocationOnIcon sx={{fontSize: 50, color: '#fff'}} />
                                <div style={{textTransform: 'uppercase', paddingLeft: 10}}>
                                    <Typography variant='h6'>{country}</Typography>
                                    <Typography>{city}</Typography>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', borderBottom: '1px solid #f8f8ff', height: '105px'}}>
                            <div>
                            <div>
                                <div>
                                    <AccessTimeIcon sx={{fontSize: 30, color: '#fff',}} />
                                    <ArrowForwardIcon sx={{fontSize: 30, color: '#fff',}} />
                                </div>
                            </div>
                                <div style={{marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <HistoryIcon sx={{fontSize: 30, color: '#fff', marginRight: 1}} />
                                    <Typography>{elapsed_time}</Typography>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: 20}}>
                            <Typography>Senders's reference : {sender_reference}</Typography><br />
                            <Typography>Senders's deducts : {deduct}</Typography>
                        </div>
                    </Box> 
                    : 
                    <Box className='box' sx={{
                        // height: 410, 
                        width: 320,
                        position: 'absolute',
                        marginTop : 2,
                        transform: 'translateX(-38.5%)',
                        bgcolor: '#f8f8ff',
                        borderRadius: 2,
                    }}
                    >
                        <div style={{borderBottom: '1px solid gray', paddingBottom: 15}}>
                            <h4 style={{ marginTop: 0, borderRadius: 3,textTransform: 'uppercase', borderBottom: '1px solid gray', padding: ' 15px 15px 10px 15px', textAlign: 'center', color: '#000' ,}}>{bank_name}</h4>
                            <Typography style={{textTransform: 'uppercase', paddingLeft: 30}}>bic : {bic}</Typography>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: 10, paddingLeft: 20}}>
                                <LocationOnIcon sx={{fontSize: 50, color: 'gray'}} />
                                <div style={{textTransform: 'uppercase', paddingLeft: 10}}>
                                    <Typography variant='h6'>{country}</Typography>
                                    <Typography>{city}</Typography>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', borderBottom: '1px solid gray', height: '105px'}}>
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
                    </Box>} */}
            </Box>
        )
}
export default ProgressData;