import { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import Slider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
export const TrendingCards = () => {
  const [rating, setRating] = useState(4.1); // initial rating value
  const maxrating = 5;
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  let sliderOnClick = null;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
          bottom: "-60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <HiChevronLeft
          className="chevronLeft"
          style={{ cursor: "pointer" }}
          size="30"
          onClick={() => sliderOnClick.slickPrev()}
        />
        <ul className="d-flex p-0" style={{ margin: "0px" }}>
          {" "}
          {dots}{" "}
        </ul>
        <HiChevronRight
          className="chevronRight"
          style={{ cursor: "pointer" }}
          size="30"
          onClick={() => sliderOnClick.slickNext()}
        />
      </div>
    )
  };
  const RevCard = () => (
    <Card className="border-0 p-3" style={{ width: "15rem", borderRadius:"10px" }}> 
      <Card.Body className="p-0">
      <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e0fd05314%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e0fd05314%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100.24835968017578%22%20y%3D%2297.5%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
         
          <Card.Text className="py-3">
          <div className="mb-3 d-flex align-items-center">
              <p className="mb-0 align-self-center fw-bold me-2">{rating+" "}</p>
              <Rating className="d-flex align-items-center" fillColor={"#db284e"} onClick={handleRating} size={20}
              initialValue={rating}
              iconsCount={maxrating}
              readonly
              />
              <p className="mb-0 align-self-center">{`(${maxrating})`}</p>
            </div>
              <h6 className="text-uppercase fw-bolder">JUICE BEAUTY</h6>
              <p className="fw-normal mb-2">Phyto-Pigments</p>
              <p className="fw-normal text-muted">Rosy Beige</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
  return (
    <>
    <style global jsx>{`
      .slick-dots li button:before {
        color: #db284e;
      }
      .slick-dots li.slick-active button:before {
        color: #db284e;
      }
      .chevronLeft,
      .chevronRight {
        color: #f4bec9;
      }
      .chevronLeft:hover,
      .chevronRight:hover {
        color: #db284e;
      }
    `}</style>
      <Slider ref={(c) => (sliderOnClick = c)} {...settings}>
        <div>
          <RevCard />
        </div>
        <div>
          <RevCard />
        </div>
        <div>
          <RevCard />
        </div>
        <div>
          <RevCard />
        </div>
        <div>
          <RevCard />
        </div>
        <div>
          <RevCard />
        </div>
        <div>
          <RevCard />
        </div>
        <div>
          <RevCard />
        </div>
      </Slider>
    </>
  );
};
