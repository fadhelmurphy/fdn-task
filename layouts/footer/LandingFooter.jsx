import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Row, Col, Container,Card } from "react-bootstrap";
import { AppStoreIcon, PlayStoreIcon } from "../../components/icons";
import Image from 'next/image'

export const LandingFooter = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col xs="12" md="8">
            <Row>
              <Col xs="12" md="4">
                <div class="d-flex flex-column bd-highlight mb-3">
                <p className="fw-bold">About Us</p>
                  <p className="fw-bold">Feedback</p>
                  <p className="fw-bold">Contact</p>
                </div>
              </Col>
              <Col xs="12" md="4">
                <div class="d-flex flex-column bd-highlight mb-3">
                <p className="fw-bold">Terms & Conditions</p>
                  <p className="fw-bold">Privacy Policy</p>
                  <p className="fw-bold">Help</p>
                </div>
              </Col>
              <Col xs="12" md="4">
                <div class="d-flex flex-column bd-highlight mb-3">
                <p className="fw-bold">Awards</p>
                  <p className="fw-bold">Newsletter</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs="12" md="4">
                <div class="d-flex flex-column bd-highlight mb-3">
                  <p className="fw-bold">Download Our Mobile App</p>
                <div class="d-flex flex-column flex-md-row bd-highlight mb-3">
                  <p className="me-5"><img width="150" src="/assets/images/app-store.png"/></p>
                  <p><img width="150" src="/assets/images/playstore.png"/></p>
                </div>
                </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="8">
                <div class="d-flex flex-column bd-highlight mb-3">
                
              <img
                className="me-3" width="150" src="/assets/images/fdn.jpg" />
                  <p>Copyright 2015-2017 Female Daily Network - All rights reserved</p>
                </div>
          </Col>
          <Col xs="12" md="4" className="align-self-center">
          <div className="d-flex my-5 justify-content-start">
            <Col xs="2" className="d-flex align-items-center justify-content-center me-2">
              <img
                width="35"
                className="img-fluid"
                src="/assets/images/facebook.png"
              />
            </Col>
            <Col xs="2" className="d-flex align-items-center justify-content-center me-2">
              <img
                width="35"
                className="img-fluid"
                src="/assets/images/twitter.png"
              />
            </Col>
            <Col xs="2" className="d-flex align-items-center justify-content-center me-2">
              <img
                width="35"
                className="img-fluid"
                src="/assets/images/instagram.png"
              />
            </Col>
            <Col xs="2" className="d-flex align-items-center justify-content-center me-2">
              <img
                width="35"
                className="img-fluid"
                src="/assets/images/youtube.png"
              />
            </Col>
          </div>
          </Col>
        </Row>
        <Card
          className="bottomFrame mt-5 mx-auto"
          style={{ borderRadius: "0" }}
        >
          <h1 className="text-center my-auto">Footer 970x250</h1>
        </Card>
      </Container>
    </footer>
  );
};
