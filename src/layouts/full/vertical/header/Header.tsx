import { IconButton, Box, AppBar, useMediaQuery, Toolbar, styled, Stack } from '@mui/material';

import config from 'src/context/config'
import { useContext } from "react";
import { ProductProvider } from 'src/context/EcommerceContext/index'

import { IconMenu2, IconMoon, IconSun } from '@tabler/icons-react';
import Notifications from './Notification';
import Profile from './Profile';
import Cart from './Cart';
import Search from './Search';
import Language from './Language';
import Navigation from './Navigation';
import MobileRightSidebar from './MobileRightSidebar';
import { CustomizerContext } from 'src/context/CustomizerContext';
import Logo from '../../shared/logo/Logo';

const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));

  const TopbarHeight = config.topbarHeight;

  // drawer
  const { activeMode, setActiveMode, setIsCollapse, isCollapse, isMobileSidebar, setIsMobileSidebar } = useContext(CustomizerContext);


  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <ProductProvider>

      <AppBarStyled position="sticky" color="default">
        <ToolbarStyled>
          {/* ------------------------------------------- */}
          {/* Toggle Button Sidebar */}
          {/* ------------------------------------------- */}
          {/* <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => {
              // Toggle sidebar on both mobile and desktop based on screen size
              if (lgUp) {
                // For large screens, toggle between full-sidebar and mini-sidebar
                isCollapse === "full-sidebar" ? setIsCollapse("mini-sidebar") : setIsCollapse("full-sidebar");
              } else {
                // For smaller screens, toggle mobile sidebar
                setIsMobileSidebar(!isMobileSidebar);
              }
            }}
          >
            <IconMenu2 size="20" />
          </IconButton> */}
          <Logo />
          {/* ------------------------------------------- */}
          {/* Search Dropdown */}
          {/* ------------------------------------------- */}
          {/* <Search /> */}
          {lgUp ? (
            <>
              {/* <Navigation /> */}
            </>
          ) : null}

          <Box flexGrow={1} />
          <Stack spacing={1} direction="row" alignItems="center">
            {/* <Language /> */}
            {/* ------------------------------------------- */}
            {/* Ecommerce Dropdown */}
            {/* ------------------------------------------- */}
            <Cart />
            {/* ------------------------------------------- */}
            {/* End Ecommerce Dropdown */}
            {/* ------------------------------------------- */}
            <IconButton size="large" color="inherit">
              {activeMode === 'light' ? (
                <IconMoon size="21" stroke="1.5" onClick={() => setActiveMode("dark")}
                />
              ) : (
                <IconSun size="21" stroke="1.5" onClick={() => setActiveMode("light")} />
              )}
            </IconButton>
            {/* <Notifications /> */}
            {/* ------------------------------------------- */}
            {/* Toggle Right Sidebar for mobile */}
            {/* ------------------------------------------- */}
            {/* {lgDown ? <MobileRightSidebar /> : null} */}
            <Profile />
          </Stack>
        </ToolbarStyled>
      </AppBarStyled>
    </ProductProvider>
  );
};

export default Header;
