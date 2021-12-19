import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51Jvn7kAAMccslK9IbXCMGpoFZtQpuY5FjeJVYW5cS1h5OR2CEr5uQ9s8hrLXDGSree4QGqDcCDuSqLoMOqInVlAr00AKsyK76x');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[appointmentId])
    return (
        <div>
            <h3>Please pay for {appointment.patientName} for {appointment.serviceName}</h3>
            <h4>Pay: $ {appointment.price}</h4>
            {
                appointment?.price && <Elements stripe={stripePromise}>
                <CheckOutForm

                    appointment={appointment}
                />
    </Elements>
             }
        </div>
    );
};

export default Payment;