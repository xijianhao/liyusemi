import React from 'react';
import EasyTitle from '@src/components/title';
import { Container, Row, Col } from 'react-bootstrap';
import EasyBanner from '@src/components/banner';
import product_banner from '@src/static/product_banner.webp'
import product_application from '@src/static/product_application.jpg'
import product_use from '@src/static/product_use.jpg'
import './style.less'
const Index = () => {
  return (
    <div className="product-application">
      <EasyBanner image={product_banner} />
      <EasyTitle title="产品应用" />
      <Container fluid='xl' className="about-info" >
      <Row>
           <Col>
            <div>
              深紫外LED杀菌无副作物产生，杀菌过程不受温度、浓度、活性等化学平衡条件影响，而且无毒、无残留、无异味，紫外线对DNA、RNA造成统一破坏，不必更换药品，不必使用组合药剂。
            </div>
          </Col>
        </Row>
        <Row md>
          <Col style={{textAlign: 'center'}}>
            <img src={product_application} alt="" style={{ maxWidth:'440px' }} />
          </Col>
        </Row>
       
        <Row >
          <Col>
            <div className="product-application-use">
              应用分为B端（工业、商业客户）和C端（终端消费者）；B端包含向家电制造商、厨电、卫浴等为主的商业客户提供标准的消毒杀菌模块，应用于冰箱、空气净化器、净水机、消毒柜、空调等产品中；C端包含深紫外杀菌水杯，隐形眼镜清洗灭菌器、牙刷灭菌器等个人卫生、健康和护理终端产品。
            </div>
          </Col>
        </Row>
        <Row md>
          <Col style={{textAlign: 'center'}}><img src={product_use} alt="" style={{ width: '80%' }} /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Index