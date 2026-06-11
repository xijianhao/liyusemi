import React from "react";
import {Container} from 'react-bootstrap';
import './style.less';

const Index = ({image}) => {
  return (
    <Container fluid >
        <div className="easy-banner"  style={{
          backgroundImage: `url(${image})`
        }}></div>
      </Container>
  )
}

export default Index