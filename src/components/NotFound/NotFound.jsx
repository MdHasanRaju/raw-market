import Box  from '@mui/material/Box';
import React from 'react';
import PageNotFound from './PageNotFound';
import  Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const NotFound = () => {
    return (
        <Box sx={{width:"500px", margin:'30px auto'}}>
            <PageNotFound></PageNotFound>
            <Typography variant='h4' sx={{textAlign:'center', py:6, color:'red'}}>Opps Page Not Found 404.......</Typography>
        </Box>
    );
};

export default NotFound;