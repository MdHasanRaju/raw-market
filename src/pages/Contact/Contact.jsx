import React from 'react'; 
import  Box from '@mui/material/Box';
import ContactFromCom from '../../components/Contact/ContactFrom';
import ContactMapCom from '../../components/Contact/ContactMap'
const Contact = () => {
    return (
        <Box>
             <ContactFromCom></ContactFromCom>
             <ContactMapCom></ContactMapCom>
        </Box>
    );
};

export default Contact;