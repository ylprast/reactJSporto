
import Card from 'react-bootstrap/Card';
import CardImg from '../img/card.JPG';

function CardPenawaran() {
  return (
    <div className='container'>

    <Card className="bg-dark text-white">
      <Card.Img src={CardImg} alt="Card image" />
    </Card>
    </div>
  );
}

export default CardPenawaran;