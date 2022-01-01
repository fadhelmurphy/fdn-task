import { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import Slider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
export const ReviewCards = ({ data = null }) => {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        className="my-5"
        style={{
          padding: "10px",
          bottom: "-60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "3rem 0"
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
    ),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  const RevCard = ({
    user = "atikaxr",
    profile = ["Oily", "Medium Dark", "Warm", "19 - 24"],
    product = {
      image:
        "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
      name: "Tony Moly",
      desc: "Delight Tony Tint"
    },
    star = 3,
    comment = "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi"
  }) => (
    <Card className="p-3 me-md-5" style={{ borderRadius: "10px" }}>
      <div className="d-flex align-items-center">
        <img className="me-3" width="80" src={product.image} />
        <div className="d-flex flex-column">
          <Card.Title className="fw-bold text-dark text-uppercase">
            {product.name}
          </Card.Title>
          <p className="text-dark card-subtitle">{product.desc}</p>
        </div>
      </div>
      <Card.Body className="p-0">
        <Card.Text className="py-3">
          <div className="mb-3 d-flex self-items-center justify-content-between">
            <Rating
              className="d-flex align-items-center"
              fillColor={"#db284e"}
              // onClick={handleRating}
              size={20}
              initialValue={star}
              iconsCount={maxrating}
              readonly
              //   ratingValue={rating} /* Available Props */
            />
            <p className="text-black-50">2 hours ago</p>
          </div>
          <p className="fw-normal mb-2">{comment}</p>

          <div
            className="d-flex flex-column justify-content-center"
            style={{ marginBottom: "-100px" }}
          >
            <img
              className="mx-auto"
              width="45"
              src="/assets/images/user.png"
              style={{
                borderRadius: "50%"
              }}
            />
            <Card.Title className="fw-normal text-capitalize my-2 mx-auto text-dark">
              {user}
            </Card.Title>
            <p className="text-muted card-subtitle mx-auto fs-6">
              {`${profile[0]} Skin, ${profile[3]}`}
            </p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
  return (
    <>
      <style>{`
    
    .review-slider .slick-list{
      padding-bottom:100px
  }
    `}</style>
      <Slider
        className="review-slider"
        ref={(c) => (sliderOnClick = c)}
        {...settings}
      >
        {data.map((el,idx) => (
          <div key={idx}>
            <RevCard {...el}/>
          </div>
        ))}
      </Slider>
      <style jsx>{`
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
    </>
  );
};
