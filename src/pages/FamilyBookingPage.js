import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';


const FamilyBookingPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    adultTime: '',
    childTime: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_yb29gkq', 'template_7lu5bu3', {
        name: formData.name,
        email: formData.email,
        service: 'Family Booking',
        stylist: 'N/A',
        date: new Date().toLocaleDateString(), // or your date field
        time: formData.adultTime + ' + Child: ' + formData.childTime
    }, 'cfDfqfbA4SCTQ-HrG')
    .then((result) => {
        console.log('Email successfully sent!', result.text);
    }, (error) => {
        console.log('Email sending failed...', error.text);
    });
    
    
    
    console.log('Family Booking Data:', formData);
    navigate('/confirmation');
  };

  return (
    <Container className="mt-5">
      <h2>Book a Family Appointment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Adult Haircut Time</Form.Label>
          <Form.Control
            type="time"
            name="adultTime"
            value={formData.adultTime}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Child Haircut Time</Form.Label>
          <Form.Control
            type="time"
            name="childTime"
            value={formData.childTime}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Confirm Family Booking
        </Button>
      </Form>
    </Container>
  );
};

export default FamilyBookingPage;
