import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  InputGroup,
  FormControl,
  Col,
  Button
} from "react-bootstrap";
import { SearchIcon,LoginIcon } from "../icons";

export const TopMenu = () => {
  return (
    <>
        <Navbar className="p-0" style={{borderBottom:'1px solid #ddd'}} variant="light" bg="white" expand={false}>
            <div className="d-flex flex-column flex-md-row w-100">
              <div className="d-flex">
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                className="me-3 border-0"
              />
              <img
                className="me-3" width="150" src="/assets/images/fdn.jpg" /></div>
              <InputGroup className="w-100 my-2 me-5" size="sm" >
                <InputGroup.Text
                  id="inputGroup-sizing-default"
                  className="bg-white"
                >
                  <SearchIcon />
                </InputGroup.Text>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Search products, articles, topics, brands, etc"
                  style={{borderLeft: "none" }}
                />
              </InputGroup>
              <Button
                variant="danger"
                size="lg"
                active
                className="col-12 col-md-2 text-uppercase py-3 py-md-0 px-md-5 border-0 m-0 d-flex align-items-center"
                style={{ borderRadius: "0", fontSize:'15px',backgroundColor:'#dc294f' }}
              >
                <LoginIcon width="20" className="me-3"/>Login / SignUp
              </Button>
            </div>
        </Navbar>
    </>
  );
};
