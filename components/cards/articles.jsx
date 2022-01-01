import { useState } from "react";
import { Card,Row,Col } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
export const ArticleCards = ({data=null}) => {
  return (
    <>
    <style global>
      {`
      .article-text-sponsored{
        position: absolute;
        top: 0px;
        left: 8px;
        margin: 0;
        background-color: #FFFFFF;
        color: #DB284E;
        font-size: 10px;
        line-height: 10px;
        letter-spacing: 0px;
        text-align: left;
        text-transform: uppercase;
      }
      `}
    </style>
    <Row>
      {data.map(({title,image,author},idx)=>(
        
    <Card key={idx} className="col-12 col-md-4 border-0" style={{borderRadius:"10px" }}> 
      <Card.Body className="p-0">
      <Card.Img variant="top" className="img-fluid w-100" 
      style={{maxHeight:'200px',borderRadius:"10px"}} 
      src={image} />
         {((idx%2)==0)&&<p class="article-text-sponsored fw-bolder px-2 py-1">Sponsored</p>}
          <Card.Text className="py-3">
              <h4 className="fw-bolder">{title}</h4>
              <p><span className="fw-normal">{author}</span>
              <span className="fw-normal text-muted"> {" | 2 hours ago"}</span>
              </p>
        </Card.Text>
      </Card.Body>
    </Card>
      ))}
    </Row>
    </>
  );
};
