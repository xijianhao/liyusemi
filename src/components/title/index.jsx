import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.less'
const Index = ({ title }) => {
  return (
    <Container fluid='md' className="easy-title" >
      <Row>
        <Col md>
          <span className="easymenu-text">{title}</span>
        </Col>
      </Row>
    </Container>
  )
}

export default Index