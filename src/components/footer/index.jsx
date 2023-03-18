import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';


export default function SimpleContainer() {
  return (
    <React.Fragment><hr />
      <Toolbar>
      <Box component="main" sx={{ textAlign: "center",flexGrow: 1, p: 2, bgcolor: '#eee', mb : 1.5 }}>
          <Typography
            variant='h6'
            color= 'primary'
          >
            2023 React_Materia_UI Web Site
          </Typography>
      </Box>
      </Toolbar>
    </React.Fragment>
  );
}