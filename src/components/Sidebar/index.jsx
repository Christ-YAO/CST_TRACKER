import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCardIcon from '@mui/icons-material/AddCard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Header from '../header'
// import Footer from '../footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import IbanPage from '../../pages/IbanPage'
import UetrPage from '../../pages/UetrPage'
import RegisterIBAN from '../../pages/RegisterIBAN'
import Error from '../Error'
import Link from '@mui/material/Link';
import BicSearch from '../../pages/BicSearch';
import Clients from '../../pages/Clients';
import Loader from '../Loader';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function Sidebar({data, isLoading}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return <Box sx={{width: '95vw'}}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>

          {/*================= Header =================*/}
          <Header />

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Link href="/" sx={{color: '#444', textDecoration: 'none'}}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <AnalyticsIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0 }} >Trigger Tracking</ListItemText>
                  </ListItemButton>
            </Link>
            <Link href="/register" sx={{color: '#444', textDecoration: 'none'}}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <AddCardIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0 }} >Register an IBAN</ListItemText>
                  </ListItemButton>
            </Link>
            <Link href="/" sx={{color: '#444', textDecoration: 'none'}}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <AccountBalanceWalletIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0 }} >Tansactions</ListItemText>
                  </ListItemButton>
            </Link>
            <Link href="/bicsearch" sx={{color: '#444', textDecoration: 'none'}}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ManageSearchIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center',
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0 }} >BIC Banking Information</ListItemText>
                  </ListItemButton>
            </Link>
          </ListItem>
              
          
        </List>
      </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 0, marginTop: '70px'}}>
          {/* <Header /> */}
            <DrawerHeader />
            <Box paragraph 
                sx={{
                  paddingTop: 4, 
                  minHeight: '100vh', 
                  overflowX: 'none', }}>
              {/* =============React-Router-DOM============= */}
              {isLoading ? (
                <Box marginTop='15%'>
                  <Loader />
                </Box>
              ) : (
                <Router>
                    <Routes>
                        {/* <Route exact path='/' element={<IbanPage data={data} />} />
                        <Route path='/uetrpage/:urlValue' element={<UetrPage  />} />
                        <Route path='/register/' element={<RegisterIBAN />} />
                        <Route path='/bicsearch/' element={<BicSearch />} />
                        <Route path='/*' element={<Error />} /> */}
                        <Route path='/' element={<Clients />} />
                    </Routes>
                </Router>
              )}
            </Box>
        </Box>
    </Box>
            {/*================= Footer =================*/}
            {/* <Footer /> */}
  </Box>
}