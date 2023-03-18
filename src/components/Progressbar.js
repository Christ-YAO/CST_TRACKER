import DoneIcon from '@mui/icons-material/Done';
import UetrData from '../components/UetrData';
import { Box } from '@mui/material';

function Progressbar({ data, value, inputValue }) {

    if (inputValue === '') {
        return '';
    } else if (inputValue === value){
    return<>
        <Box className='progressbar'>
            <Box className="line"></Box>

            {data.map((item, index) => {
                return <Box className='circles'>
                       <Box key={index} className='circle'><DoneIcon sx={{color: 'green', fontSize: 30}}/> </Box>
                        <UetrData key={index} item={item} index={index} value={value} inputValue={inputValue}/>
                    </Box>
            })}
        </Box>
    </>
}}
export default Progressbar;