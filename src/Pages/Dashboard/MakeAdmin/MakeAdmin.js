import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
            .then(data => {
            console.log(data);
        })
        e.preventDefault();
}

    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <TextField type="email" label="email" onBlur={handleOnBlur} variant="standard" />
                <Button type="submit" variant="contained">Submit</Button>
       </form>
        </div>
    );
};

export default MakeAdmin;