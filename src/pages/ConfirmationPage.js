import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5 text-center">
      <h2>Booking Confirmed!</h2>
      <p>Your appointment has been successfully booked.</p>
      <p>A confirmation email has been sent.</p>

      <div className="mt-4">
        <Button variant="primary" onClick={() => navigate('/')}>
          Return to Home
        </Button>{' '}
        <Button variant="secondary" onClick={() => navigate('/booking')}>
          Book Another Appointment
        </Button>
      </div>
    </Container>
  );
};

export default ConfirmationPage;
