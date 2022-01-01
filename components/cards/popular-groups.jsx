import { useState } from "react";
import { Row,Col,Card, Dropdown, DropdownButton } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { HiUser, HiAnnotation } from "react-icons/hi";
import { AiOutlineUnorderedList } from "react-icons/ai";
export const PopularGroups = ({data=Array.from(Array(4).keys())}) => {
  const [rating, setRating] = useState(4.1); // initial rating value
  const maxrating = 5;
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
      <Row className="justify-content-center">
          {data.map(_=>(
              
      <Card
      className="popular mx-auto mx-md-0 col-8 col-md-3 p-3 shadow-sm border-0 me-md-4 mb-3"
      style={{ borderRadius: "10px" }}
    >
      <Card.Body className="p-0">
        <Card.Img
          className="img-fluid px-5"
          variant="top"
          style={{
            borderRadius: "50%",
            maxHeight: "350px"
          }}
          src="/assets/images/user.png"/>

        <Card.Text className="py-3">
          <h4 className="fw-bolder text-center mb-5">Embrace the curl</h4>
          <div className="d-flex justify-content-between">
            <Dropdown>
              <Dropdown.Toggle variant="light" className="bg-transparent border-0" id="dropdown-basic">
                <HiUser style={{ verticalAlign: "0.055rem" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="light" className="bg-transparent border-0" id="dropdown-basic">
                <AiOutlineUnorderedList style={{ verticalAlign: "0.055rem" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="light" className="bg-transparent border-0" id="dropdown-basic">
                <HiAnnotation style={{ verticalAlign: "0.055rem" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <p className="text-center fw-normal mb-2">May our curls pop and never stop!</p>
        </Card.Text>
      </Card.Body>
    </Card>
          ))}
      </Row>
  );
};
