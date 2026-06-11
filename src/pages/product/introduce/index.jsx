import React, { useState } from 'react';
import EasyTitle from '@src/components/title';
import { Container, Row, Col, Modal,Button } from 'react-bootstrap';
import EasyTabs from '@src/components/tabs';
import EasyBanner from '@src/components/banner';
import { menuConfig, menuDataMap } from './config';
import product_banner from '@src/static/product_banner.webp'
import './style.less'
const Index = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(1);
  const [detail, setDetail] = useState({});
  return (
    <div className="product">
      <Modal show={visible} onHide={setVisible} size="lg" fullscreen="md-down">
        <Modal.Header closeButton>
          <Modal.Title>{detail.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product-detail">
            <div>
              <img src={detail.url} alt="" />
            </div>
            <div>
            {detail.content?.map((item) => (<div key={item}>{item}</div>))}
            </div>
          </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setVisible(false)}}>
            关闭
          </Button>
        </Modal.Footer>
      </Modal>
      <EasyBanner image={product_banner}/>
      <EasyTitle title="产品介绍" />
      <Container fluid='xl' className="about-info" >
        <Row>
          <Col md>
            <EasyTabs list={menuConfig} active={active} setActive={setActive} />
          </Col>
        </Row>
        <Row style={{paddingTop: '10px'}}>
          {menuDataMap[active].map((item) => {
            return (
              <Col
                key={item.url} 
                md={{ span: 3 }}
                className="product-imgcol"
                onClick={()=>{
                  if(item.title){
                    setDetail({
                      title: item.title,
                      content:item.content,
                      url: item.url,
                    })
                    setVisible(true)
                  }
                }}
              >
                <img src={item.url} alt="" className="product-img"/>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Index