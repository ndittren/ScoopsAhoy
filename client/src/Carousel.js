import React from "react";
// import ReactDOM from "react-dom";
import { images } from "./images";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const startIndx = 0;
function Carousel() {
  const [index, setIndex] = React.useState(startIndx);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(startIndx);
      } else {
        setIndex(index + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <Gallery
      style={{
        height: "100vh",
        width: "100vw",
        background: "navy"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Carousel />, rootElement);

export default Carousel;
