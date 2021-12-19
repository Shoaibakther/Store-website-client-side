import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';


const Doctors = ({doctor}) => {
    const { name,image } = doctor;
    return (
        <>
            <Grid item xs={12} md={6} sm={4}>
                <img style={{width: '200px'}} src= {`data:image/png;base64,${image}`} alt=""/>
                <h3>{name}</h3>
             
          </Grid>
        </>
    );
};

export default Doctors;