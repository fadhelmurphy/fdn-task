import { useState } from "react";
import { Card,Row,Col } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
export const ProductCards = ({data=Array.from(Array(3).keys())}) => {
    const [rating, setRating] = useState(4.1) // initial rating value
    const maxrating = 5
      // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
  return (
    <>
    <Row>
    {data.map((_,idx)=>(
      
    <Card key={idx} className="mx-auto col-8 col-md-3 ms-md-0 me-md-5 border-0 mb-5 mb-md-0 p-3" style={{ borderRadius:"10px" }}> 
    <Card.Body className="p-0">
    <Card.Img className="img-fluid" style={{minHeight:"150px"}} variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e0fd05314%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e0fd05314%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100.24835968017578%22%20y%3D%2297.5%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
       
        <Card.Text className="py-3">
            <p className="mb-2 align-self-center fw-bold me-2" style={{color:"#db284e"}}>Match skin type</p>
        <div className="mb-3 d-flex align-items-center">
            <p className="mb-0 align-self-center fw-bold me-2">{rating+" "}</p>
            <Rating className="d-flex align-items-center" fillColor={"#db284e"} onClick={handleRating} size={20}
            initialValue={rating}
            iconsCount={maxrating}
            readonly
          //   ratingValue={rating} /* Available Props */ 
            />
            <p className="mb-0 align-self-center">{`(${maxrating})`}</p>
          </div>
            <h6 className="text-uppercase fw-bolder">JUICE BEAUTY</h6>
            <p className="fw-normal mb-2">Phyto-Pigments</p>
            <p className="fw-normal text-muted">Rosy Beige</p>
      </Card.Text>
    </Card.Body>
  </Card>
    ))}
    </Row>
    </>
  );
};
