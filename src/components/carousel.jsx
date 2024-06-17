import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

const images = [
  "https://i.pinimg.com/564x/b4/75/44/b4754401fd6f697af112f80bb780b65e.jpg",
  "https://i.pinimg.com/564x/b4/75/44/b4754401fd6f697af112f80bb780b65e.jpg",
  "https://i.pinimg.com/564x/b4/75/44/b4754401fd6f697af112f80bb780b65e.jpg",
  "https://i.pinimg.com/736x/f8/f4/2d/f8f42d643397fdf2bf1e8858b197e294.jpg",
];

function App() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide" key={index}>
            <img alt="sample_file" src={URL} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
