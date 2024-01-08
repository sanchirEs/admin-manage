import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.module.css';
import {  Drawer, List, Stack, Toolbar } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer
    variant='permanent'
      sx={{ width: '240',
           flexShrink: 0,
           "&.MuiDrawer-paper": {
            boxSizing: 'border-box',
            borderRight: '0px',
           }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{marginBottom: '20px'}}>
          <Stack
            sx={{ width: '100% '}}
            direction="row"
            justifyContent="center"
          >
            logo
          </Stack>
        </Toolbar>
      </List>


    </Drawer>
  );
};

export default Sidebar;
