import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../App.css'

const CardProduct = ({ title, content, imageUrl }) => {
  return (
    <Card className='custom-card'>
        <div className='image-container'>
      <Card.Img variant="top" src={imageUrl} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

CardProduct.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  };

export default CardProduct;