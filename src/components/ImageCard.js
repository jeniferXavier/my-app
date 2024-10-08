import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ title, text, imgSrc, buttonLabel }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">{buttonLabel}</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
