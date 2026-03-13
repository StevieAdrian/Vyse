import { Backdrop } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

// import { FooterPublicRoutes } from '../Footer';
// import { SideMenuPublicRoute } from '../SideMenu';
import { Header } from './Header';

export function LayoutPublicRoute({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Header />
      {children}
      {/* <FooterPublicRoutes /> */}
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={mobileMenu}
        onClick={() => setMobileMenu?.(!mobileMenu)}
      >
        {/* <SideMenuPublicRoute mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} /> */}
      </Backdrop>
    </Box>
  );
}

export default LayoutPublicRoute;
