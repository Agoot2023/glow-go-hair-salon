import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const services = [
    {
      title: 'Haircut',
      description: 'Professional haircut tailored to your style.',
      price: '$40',
      image: '/images/Haircut.jpg'
    },
    {
      title: 'Hair Coloring',
      description: 'Vibrant hair coloring using top-quality products.',
      price: '$70+',
      image: '/images/Hair coloring.jpg'
    },
    {
      title: 'Styling',
      description: 'Hair styling for events, parties, and everyday looks.',
      price: '$50+',
      image: '/images/Hair stylist.jpg'
    },
    {
      title: 'Kids Haircut',
      description: 'Fun and comfortable haircut experience for kids.',
      price: '$25',
      image: '/images/Kids haircut.jpg'
    },
    {
      title: 'Family Package',
      description: 'Discounted package for family appointments.',
      price: 'Varies',
      image: '/images/Kids haircut.jpg' // Reuse Kids haircut image or you can add another family image if you want
    }
  ];

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card>
                {/* Add Image */}
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + service.image}
                  alt={service.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
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
      <Footer />
    </>
  );
};

export default ServicesPage;
