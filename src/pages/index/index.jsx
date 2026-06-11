import React from 'react';
import { Carousel, Container ,Row, Col } from 'react-bootstrap';
import EasyTitle from "@src/components/title";
import index1 from '@src/static/index1.jpg';
import index2 from '@src/static/index2.jpg';
import index3 from '@src/static/index3.jpg';
import {recommendList} from './config'

import './style.less'
const Index = () => {
  return (
    <div className="index">
      <Carousel>
        <Carousel.Item>
          <div
            className="index-carousel-img"
            style={{
              backgroundImage: `url(${index1})`
            }} />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="index-carousel-img"
            style={{
              backgroundImage: `url(${index2})`
            }} />
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="index-carousel-img"
            style={{
              backgroundImage: `url(${index3})`
            }} />
        </Carousel.Item>
      </Carousel>
      <EasyTitle title="推荐产品应用" />
      <Container fluid='xl' className="index-recommend" >
        <Row>
          {recommendList.map((item) => {
            return (
              <Col md key={item.text} >
                <div
                  className="index-recommend-img"
                  style={{
                    backgroundImage: `url(${item.image})`
                  }} 
                />
                <div  className="index-recommend-text">{item.text}</div>
            </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Index