import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          {/* {py means padding on the y axis} */}
          <Col className='text-center py-3'>Copyright &copy; Shop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
