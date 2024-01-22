// AppLayout.js
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Header from '../../components/Header'; // Your Header component path
import Sidebar from '../../components/Sidebar'; // Your Sidebar component path


function AppLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <AppBar position="static">
        <Header />
      </AppBar>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* No need for a Toolbar spacer here since AppBar is static */}
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default AppLayout;

