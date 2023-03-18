import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Header from '../components/header'
import Footer from '../components/footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import IbanPage from '../pages/IbanPage'
import UetrPage from '../pages/UetrPage'
import Error from '../components/Error'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function Sidebar() {

  const [data] = useState([
    {
        title: 'profitable and efficient financial institution',
        bic: 'pefijpjt',
        country: 'tokyo',
        city: 'japan',
        date1: '14 mar 2023',
        hour1: '17:25',
        reference: 5688442224442233,
        deducts: 20
    },
    {
        title: 'save with us bank',
        bic: 'swubdeff',
        country: 'frankfurt',
        city: 'germany',
        date1: '14 mar 2023',
        date2: '14 mar 2023',
        hour1: '09:35 CET',
        hour2: '11:45 CET',
        time: '2hr 10min',
        reference: 4586322488662566,
        deducts: 10
    },
    {
        title: 'siply delightful bank',
        bic: 'sdebfrpp',
        country: 'paris',
        city: 'france',
        date1: '14 mar 2023',
        date2: '14 mar 2023',
        hour1: '11:50 CET',
        hour2: '14:10 CET',
        time: '2hr 20min',
        reference: 7846318431435174,
        deducts: 30
    },
    {
        title: 'broker dealer of absolute perfection',
        bic: 'bdapus33',
        country: 'new york',
        city: 'united states',
        date1: '14 mar 2023',
        date2: '14 mar 2023',
        hour1: '09:20 EST',
        hour2: '10:30 EST',
        time: '1hr 10min',
        reference: 7846318431435174,
        deducts: 10
    }
])
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 0}}>
      <Header />
        <DrawerHeader />
        <Box paragraph style={{padding: 30, minHeight: '100vh', overflowX: 'none', }}>
          {/* =============React-Router-DOM============= */}
        <Router>
            <Routes>
                <Route exact path='/' element={<IbanPage />} />
                <Route path='/uetrpage/' element={<UetrPage data={data} />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </Router>
        </Box>
        {/*================= Footer =================*/}
        <Footer />
      </Box>
  );
}