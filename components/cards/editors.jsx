import { useState } from "react";
import { Card, Row } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
import Image from 'next/image'
export const EditorCards = ({data=[]}) => {
    const [rating, setRating] = useState(4.1) // initial rating value
    const maxrating = 5
      // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
  return (
    <>
    <Row className="py-5">
    {data.map(({editor,role,product},idx)=>(
    <Card key={idx} className="mx-auto col-8 col-md-2 my-5 my-md-0 me-md-3" style={{borderRadius:"10px" }}> 
    <div className="d-flex" style={{marginTop:'-60px'}}>
              
    <Image
          className="me-3" width="65" src="/assets/images/user.png" 
          style={{
              borderRadius:"50%"
          }}
          />
        <div className="d-flex flex-column">
            
  <Card.Title className="text-capitalize fw-bold mb-2 text-dark">{editor}</Card.Title>
  <p className="text-muted card-subtitle" style={{fontSize:'14px'}}>{role}</p>
            </div>
        </div>
      <Card.Body className="p-0">
      <Card.Img variant="top" src={product.image} />
         
          <Card.Text className="py-3">
          <div className="mb-3 d-flex align-items-center">
              <p className="mb-0 align-self-center fw-bold me-2">{product.rating+" "}</p>
              <Rating className="d-flex align-items-center" fillColor={"#db284e"} size={20}
              initialValue={product.rating}
              iconsCount={maxrating}
              readonly
            //   ratingValue={rating} /* Available Props */ 
              />
              <p className="mb-0 align-self-center">{`(${maxrating})`}</p>
            </div>
              <h6 className="text-uppercase fw-bolder">{product.name}</h6>
              <p className="fw-normal mb-2">{product.description}</p>
              <p className="fw-normal text-muted">Rosy Beige</p>
        </Card.Text>
      </Card.Body>
    </Card>
    ))}
    </Row>
    </>
  );
};
