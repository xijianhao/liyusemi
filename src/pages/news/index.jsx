import React, { useState } from 'react';
import EasyTitle from '@src/components/title';
import { Container, Row, Col} from 'react-bootstrap';
import EasyTabs from '@src/components/tabs';
import EasyBanner from '@src/components/banner';
import { menuConfig, newsConfig } from './config';
import news_banner from '@src/static/news_banner.webp'
import './style.less'
const Index = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="news">
      <EasyBanner image={news_banner}/>
      <EasyTitle title="新闻中心" />
      <Container fluid='xl' className="about-info" >
        <Row>
          <Col md>
            <EasyTabs list={menuConfig} active={active} setActive={setActive} />
          </Col>
        </Row>
        <Row className="news-content">
          {
            newsConfig.map((item) => {
              return (
                <Col key={item.url}>
                  <div
                    className="news-card"
                    onClick={() => {
                      window.open(item.url)
                    }}
                  >
                    <div className="news-card-title">{item.title}</div>
                    <div className="news-card-content">{item.content}</div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default Index