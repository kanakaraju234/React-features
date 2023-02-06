import "./slider.css";

function Slider() {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const leftMove = () => {
    let sliderLeft = document.querySelector(".slider-main-container");
    sliderLeft.scrollLeft = sliderLeft.scrollLeft - 600;
  };

  const rightMove = () => {
    let sliderLeft = document.querySelector(".slider-main-container");
    sliderLeft.scrollLeft = sliderLeft.scrollLeft + 600;
  };
  return (
    <div className="slider-container">
      <button className="left-arrow" onClick={leftMove}>
        -
      </button>
      <div className="slider-main-container">
        {slides.map((v) => (
          <div className="slide">{v}</div>
        ))}
      </div>
      <button className="right-arrow" onClick={rightMove}>
        +
      </button>
    </div>
  );
}

export default Slider;
