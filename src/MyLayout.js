import * as React from 'react';
import { Box } from '@mui/material';
import { AppBar, Menu, Sidebar } from 'react-admin';

const MyLayout = ({ children, dashboard }) => (
    <Box 
        display="flex"
        flexDirection="column"
        zIndex={1}
        minHeight="100vh"
        backgroundColor="theme.palette.background.default"
        position="relative"
    >
        <Box
            display="flex"
            flexDirection="column"
            overflowX="auto"
        >
            <Box display="flex" flexGrow={1}>
              
                <Box
                    display="flex"
                    flexDirection="column"
                    flexGrow={0}
                    p={0}
                    marginTop="0em"
                    paddingLeft={0}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    </Box>
);

export default MyLayout;