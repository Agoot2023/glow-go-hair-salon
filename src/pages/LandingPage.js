import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1>Glow & Go Hair Salon</h1>
      <p>Book your next look!</p>

      <div className="mt-4">
        <Button variant="primary" size="lg" onClick={() => navigate('/booking')}>
          Book Appointment
        </Button>{' '}
        <Button variant="secondary" size="lg" onClick={() => navigate('/family-booking')}>
          Book Family Appointment
        </Button>
      </div>
    </Container>
  );
};

export default LandingPage;
