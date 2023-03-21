import DoneIcon from '@mui/icons-material/Done';
import UetrData from '../components/UetrData';
import { Box } from '@mui/material';

function Progressbar({ data, items, value, inputValue }) {
    // console.log(items.uetr)

    
    if (value === '') {
        return ''
    } 
    if (value !== items.uetr) {
        return 'UETR NOT FOUND !!!';
    }
    else if (value === items.uetr){
    return<>
        <Box className='progressbar'>
            <Box className="line"></Box>

            {data.map((items, index) => {

                const dataItem = (items.sender_data)
                return(

                dataItem.map((item) => {
                    return <Box className='circles'>
                    <Box key={index} className='circle'><DoneIcon sx={{color: 'green', fontSize: 30}}/> </Box>
                     <UetrData key={index} item={item} index={index} value={value} inputValue={inputValue}/>
                 </Box>
                })
                )
            })}
        </Box>
    </>
}}
export default Progressbar;