import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigationbar() {
  return (
    <>
          <Navbar bg="dark" variant="dark">
              <Container>
                  <Navbar.Brand href="/">Online Course</Navbar.Brand>
                  <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/add-course">Add Courses</Nav.Link>
                      <Nav.Link href="/courses">All Courses</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
    </>
  )
}

export default Navigationbar