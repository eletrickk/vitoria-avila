import { useEffect, useState } from "react";
import "./App.css";
import Lottie from "lottie-react";
import welcome from "./assets/welcome.json";
import welcomeText from "./assets/welcome-text.json";
import hearts from "./assets/heart-rain.json";
import Carousel from "react-multi-carousel";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      console.log("teste");
    }, 4500);
    return () => clearTimeout(timeout);
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="main">
      {isLoading ? (
        <>
          <Lottie className="lottie-1" animationData={welcomeText} />
          <Lottie className="lottie" animationData={welcome} />
        </>
      ) : (
        <>
          <Lottie className="lottie-2" animationData={hearts} />
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            autoPlaySpeed={8000}
            keyBoardControl={true}
            autoPlay
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <div>
              <img className="photo" src="/photo-1.jpg" alt="" />
              <div className="description">
                <h1 className="love-light-regular">O que é perfeição?</h1>
              </div>
            </div>
            <div>
              <img className="photo" src="/photo-4.jpg" alt="" />
              <div className="description">
                <h1 className="love-light-regular">
                  Perfeição é o brilho do seu sorriso.
                </h1>
              </div>
            </div>
            <div>
              <img className="photo" src="/photo-2.jpg" alt="" />
              <div className="description">
                <h1 className="love-light-regular">
                  Perfeição é o calor do seu abraço.
                </h1>
              </div>
            </div>
            <div>
              <img className="photo" src="/photo-3.jpg" alt="" />
              <div className="description">
                <h1 className="love-light-regular">
                  Perfeição é a paz que encontro ao te olhar.
                </h1>
              </div>
            </div>
            <div>
              <img className="photo" src="/photo-6.jpg" alt="" />
              <div className="description">
                <h1 className="love-light-regular">
                  Perfeição é cada momento que você transforma em eternidade.
                </h1>
              </div>
            </div>
            <div>
              <img className="photo" src="/photo-5.jpg" alt="" />
              <div className="description">
                <h1 className="love-light-regular">Ser perfeito é ser você.</h1>
              </div>
            </div>
          </Carousel>
        </>
      )}
    </div>
  );
}

export default App;
