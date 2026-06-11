import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "./style.less"

const Index = () => {
  return (
    <div className="footer">
      <Container flui="xxl">
        <Row className="footer-info">
          <Col md>地址：徐州市铜山区经纬路与珠江东路交叉路口往南约200米</Col>
          <Col md>联系方式：0516-83915118</Col>
          <Col md>邮箱：info@liyusemi.cn</Col>
        </Row>
        <Row className="footer-info">
          <Col >苏ICP备2021046818</Col>
        </Row>
      </Container>
    </div>

  )
}

export default Index