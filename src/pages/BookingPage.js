import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';


const BookingPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    service: 'Hair Coloring',
    stylist: '',
    date: '',
    time: '',
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
        service: formData.service,
        stylist: formData.stylist,
        date: formData.date,
        time: formData.time
    }, 'cfDfqfbA4SCTQ-HrG')
    .then((result) => {
        console.log('Email successfully sent!', result.text);
    }, (error) => {
        console.log('Email sending failed...', error.text);
    });
    
    
    console.log('Booking Data:', formData);
    navigate('/confirmation');
  };

  return (
    <Container className="mt-5">
      <h2>Book an Appointment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Service</Form.Label>
          <Form.Control
            as="select"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option>Hair Coloring</option>
            <option>Haircut</option>
            <option>Styling</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Stylist</Form.Label>
          <Form.Control
            as="select"
            name="stylist"
            value={formData.stylist}
            onChange={handleChange}
          >
            <option value="">-- Select Stylist --</option>
            <option>Jessica</option>
            <option>Sarah</option>
            <option>Kelsey</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
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
          Confirm Booking
        </Button>
      </Form>
    </Container>
  );
};

export default BookingPage;
