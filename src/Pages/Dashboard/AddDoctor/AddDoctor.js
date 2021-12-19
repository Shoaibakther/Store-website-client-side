import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/doctors', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
        
    }
  
})
.catch(error => {
  console.error('Error:', error);
});

        e.preventDefault();
    }
    return (
        <div>
            <h3>Add a Doctors</h3>

            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{width: '50%'}}
                    label="Name"
                    required
                    type="text"
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br /> 
                <TextField
                    sx={{width: '50%'}}
                    label="Email"
                    required
                    type="email"
                     onChange={e => setEmail(e.target.value)}
                    variant="standard" />
                <br /> <br />
                <Input accept="image/*"
                    sx={{width: '50%'}}
                    required
                    onChange={e => setImage(e.target.files[0])}
                    multiple type="file" />
                <br />
  <Button variant="contained"  sx={{width: '50%'}} type="submit">
    Add Doctor
  </Button>
            </form>
            {
                success &&
               <p style={{color: 'green'}}> {success}</p>
            }
        </div>
    );
};

export default AddDoctor;