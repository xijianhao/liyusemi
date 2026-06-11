import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import "./style.less"

const Index =  () => {
  return (
    <div className="header" >
      <Container fluid='xxl'>
      <Row  className="header-row" >
        <Col sm>欢迎来到徐州立羽高科技有限责任公司</Col>
        <Col sm className="header-email">邮箱：info@liyusemi.cn</Col>
      </Row>
    </Container>
    </div>
  )
}

export default Index