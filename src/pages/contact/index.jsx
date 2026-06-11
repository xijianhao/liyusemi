import React from 'react';
import EasyTitle from '@src/components/title';
import EasyBanner from '@src/components/banner';
import contact_banner from '@src/static/contact_banner.jpeg';
import { Container } from 'react-bootstrap';
import { ReactBingmaps } from 'react-bingmaps';
import './style.less';

const infolist = [
  { label: '地址', value: '徐州市铜山区经纬路与珠江东路交叉路口往南约200米' },
  // {label: '联系人', value: '林先生'},
  { label: '电话', value: '0516-83915118' },
  { label: '邮箱', value: 'info@liyusemi.cn' },
]

const Index = () => {
  return (
    <div className="contact">
      <EasyBanner image={contact_banner} />
      <EasyTitle title="联系我们" />
      <Container fluid='xl' className="contact-map">
        <ReactBingmaps
          bingmapKey="AshYdI7MoAgcFf1dHkQVoOLeXYQ3qlJeNmWfDQqdXy8rqzYG3nc6J--d-5juWOHh"
          center={[34.160316, 117.20187]}
          infoboxes={[
            {
              location: [34.160316, 117.20187],
              option: { title: '徐州立羽高科技有限责任公司', showCloseButton: false, },

            }
          ]}
          zoom={15}
          supportedMapTypes={["road"]}
        >
        </ReactBingmaps>
      </Container>
      <Container fluid='xl' className="contact-content">
        {
          infolist.map((item) => {
            return (
              <div key={item.label} className="contact-info">
                <span className="contact-info-label">{item.label}：</span>
                <span className="contact-info-value">{item.value}</span>
              </div>
            )
          })
        }
      </Container>
    </div>
  )
}

export default Index