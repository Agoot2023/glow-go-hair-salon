import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* BANNER image */}
      <img
        src={process.env.PUBLIC_URL + '/banner.jpg'}
        alt="Hair Salon Banner"
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
      />

      <Container className="text-center mt-5">
        <h1>Glow & Go Hair Salon</h1>
        <p>Book your next look!</p>

        <div className="mt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/booking')}
          >
            Book Appointment
          </Button>{' '}
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/family-booking')}
          >
            Book Family Appointment
          </Button>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default LandingPage;
