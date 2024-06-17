
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../App.css'
import sprite from "./sprite.svg";
import Footer from "../components/footer";
import CardPenawaran from "../components/cardpenawaran";
import CardProduct from "../components/cardproduct";
import image1 from '../img/vivoy17s.jpg';
import image2 from '../img/macbookair.jpg';
import image3 from '../img/lenolegion5.jpg';
import image4 from '../img/iphone14promax.jpg';
import image5 from '../img/huaweiwatchfit3.jpg';
import image6 from '../img/huaweimatte40+.jpg';
import image7 from '../img/zflip3.jpg';
import image8 from '../img/huaweimatebook14.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cardData = [
  {
    title: 'Vivo Y17s',
    content: 'Rp. 2.500.000',
    imageUrl: image1
  },
  {
    title: 'Macbook Air',
    content: 'Rp. 11.000.000',
    imageUrl: image2
  },
  {
    title: 'Lenovo Legion 5',
    content: 'Rp.18.500.000',
    imageUrl: image3
  },
  {
    title: 'IPhone 14 Pro Max',
    content: 'Rp. 17.000.000',
    imageUrl: image4
  },
  {
    title: 'Huawei Watch Fit 3',
    content: 'Rp. 1.999.000',
    imageUrl: image5
  },
  {
    title: 'Huawei Mate 40+',
    content: 'Rp. 14.899.000',
    imageUrl: image6
  },
  {
    title: 'Samsung Z Flip 3',
    content: 'Rp. 15.999.000',
    imageUrl: image7
  },
  {
    title: 'Huawei Matebook 14',
    content: 'Rp. 9.399.000',
    imageUrl: image8
  }
];

const images = [
  "https://i.pinimg.com/564x/b4/75/44/b4754401fd6f697af112f80bb780b65e.jpg",
  "https://i.pinimg.com/564x/28/be/23/28be2364af7b10716aba1ec15dde39d8.jpg",
  "https://i.pinimg.com/564x/55/0b/bb/550bbb836286200e044355e55c227d8d.jpg",
  "https://i.pinimg.com/736x/f8/f4/2d/f8f42d643397fdf2bf1e8858b197e294.jpg",

];

function HomePage({ transitionTime }) {
  const rotateAnimationHandler = (props, state) => {
    const transitionDuration = transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";
    let slideStyle = {
      display: "flex",
      minHeight: "30%",
      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
      transform: `rotate(0)`,
      position:
        state.previousItem === state.selectedItem ? "relative" : "absolute",
      inset: "0 0 0 0",
      zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
      opacity: state.previousItem === state.selectedItem ? "1" : "0",
      WebkitTransitionDuration: transitionDuration,
      MozTransitionDuration: transitionDuration,
      OTransitionDuration: transitionDuration,
      transitionDuration: transitionDuration,
      msTransitionDuration: transitionDuration,
    };
    return {
      slideStyle,
      selectedStyle: {
        ...slideStyle,
        opacity: 1,
        position: "relative",
        zIndex: 2,
        filter: `blur(0)`,
      },
      prevStyle: {
        ...slideStyle,
        transformOrigin: " 0 100%",
        transform: `rotate(${
          state.previousItem > state.selectedItem ? "-45deg" : "45deg"
        })`,
        opacity: "0",
        filter: `blur(${
          state.previousItem === state.selectedItem ? "0px" : "5px"
        })`,
      },
    };
  };

  return (

  <div>
    <CardPenawaran/>
    <div className="box">
          
      <Carousel
        showIndicators
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="nav_btn nav_btn_right" onClick={clickHandler}>
                <svg>
                  <use xlinkHref={sprite + "#right"}></use>
                </svg>
              </button>
            )
          );
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button onClick={clickHandler} className="nav_btn nav_btn_left">
                <svg>
                  <use xlinkHref={sprite + "#left"}></use>
                </svg>
              </button>
            )
          );
        }}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <li
              onClick={clickHandler}
              className={`ind ${isSelected ? "active" : ""}`}
              key={index}
              role="button"
            />
          );
        }}
        statusFormatter={(currentItem, total) => {
          return (
            <p>
              image {currentItem} of {total}
            </p>
          );
        }}
        transitionTime={transitionTime}
        animationHandler={rotateAnimationHandler}
        swipeable={false}
      >
        {images.map((URL, index) => (
          <div className="slide" key={index}>
            <img alt="sample_file" src={URL} />
          </div>
        ))}
      </Carousel>

    </div>
    <Container>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <CardProduct
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
    </div>
  );

}

HomePage.propTypes = {
  transitionTime: PropTypes.number.isRequired,
};

HomePage.defaultProps = {
  transitionTime: 310,
};

export default HomePage;
