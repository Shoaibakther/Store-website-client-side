import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Doctors from '../Home/Doctor/Doctors';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    } ,[])
    return (
        <div>
            <h2>Our doctors: {doctors?.length}</h2>

            <Container>
            <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctors
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctors>)
                }
 
            </Grid>
            </Container>
    
        </div>
    );
};

export default Doctor;