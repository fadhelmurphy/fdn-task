import React from "react"
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap"

export const CategoryMenu = () =>{
    return(
        <>
        <Navbar className="py-2" variant="light" bg="white" expand="lg" style={{borderBottom:'1px solid #ddd'}}>
  <Nav className="justify-content-center ms-3 mx-md-auto fw-bolder" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/" className="text-dark">SKINCARE</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/" className="text-dark">MAKEUP</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/" className="text-dark">BODY</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/" className="text-dark">HAIR</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/" className="text-dark">FRAGRANCE</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/" className="text-dark">NAILS</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/" className="text-dark">TOOLS</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/" className="text-dark">BRANDS</Nav.Link>
    </Nav.Item>
  </Nav>
</Navbar>
</>
    )
}