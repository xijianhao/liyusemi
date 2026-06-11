import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutimg from '@src/static/about.jpg';
import EasyTitle from '@src/components/title';
import EasyBanner from '@src/components/banner';
import about_banner from '@src/static/about_banner.jpg';
import './style.less'
const Index = () => {
  return (
    <div className="about" >
      <EasyBanner image={about_banner}/>
      <EasyTitle title="关于立羽高科技" />
      <Container fluid='xl' className="about-info" >
        <Row>
          <Col md={{span: 5}} className="about-info-img">
            <img src={aboutimg} alt="" width="100%" />
          </Col>
          <Col md={{span: 7}}>
            <div className="about-info-title">徐州立羽高科技有限责任公司</div>
            <div className="about-info-entitle">Liyu Advanced Technology Co.Ltd</div>
            <div className="about-info-content">徐州立羽高科技有限责任公司，由资深半导体研发团队创立，采用自研外延炉设备和第三代半导体材料特色外延工艺，生产含有高铝组分的氮化镓（GaN）外延片和半导体器件。面向全球合作伙伴提供深紫外LED外延、芯片、封装和杀菌模组，致力于通过先进的深紫外杀菌技术，为人类的健康与卫生服务。</div>
            <div className="about-info-content">徐州立羽高科技开发的深紫外消毒芯片已广泛应用于家电、医疗卫生、个人健康护理等产品；比如杀菌空调、杀菌水龙头、母婴用品消毒器、口罩消毒器、电梯扶手消毒器等。我们期待不断提升芯片的性能和质量，为客户提供更便捷的紫外消毒方案。</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Index