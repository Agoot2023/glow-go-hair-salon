import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ServicesPage = () => {
  const services = [
    {
      title: 'Haircut',
      description: 'Professional haircut tailored to your style.',
      price: '$40'
    },
    {
      title: 'Hair Coloring',
      description: 'Vibrant hair coloring using top-quality products.',
      price: '$70+'
    },
    {
      title: 'Styling',
      description: 'Hair styling for events, parties, and everyday looks.',
      price: '$50+'
    },
    {
      title: 'Kids Haircut',
      description: 'Fun and comfortable haircut experience for kids.',
      price: '$25'
    },
    {
      title: 'Family Package',
      description: 'Discounted package for family appointments.',
      price: 'Varies'
    }
  ];

  return (
    <Container className="mt-5">
      <h2>Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Text>
                  <strong>Price: {service.price}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
