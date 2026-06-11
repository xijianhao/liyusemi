import React from 'react';
import {Container, Navbar, Row, Col, Nav, NavDropdown} from 'react-bootstrap';
import logo from '@src/static/logo.png';
import {useHistory} from 'react-router-dom'
import "./style.less";

const menuConfig = [
  {label: '首页', herf: '/index'},
  {label: '关于我们', herf: '/about'},
  {label: '产品中心', child: [
    {label: '产品介绍', herf: '/product/introduce'},
    {label: '产品应用', herf: '/product/application'},
  ]},
  {label: '新闻中心', herf: '/news'},
  {label: '联系我们', herf: '/contact'},
]

const Index = () => {
  const history = useHistory()
  return (
  <Navbar expand="lg" className="easymenu">
  <Container>
    <Navbar.Brand>
      <Row>
        <Col md>
          <img src={logo} alt="" className="easymenu-logo"/>
          <span className="easymenu-text">徐州立羽高科技</span>
        </Col>
      </Row>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {
          menuConfig.map((item) => {
            if(item.child){
              return (
                <NavDropdown title={item.label} >
                  {item.child.map((child) => (
                      <NavDropdown.Item
                        key={child.label} onClick={() => {
                          history.push(child.herf)
                        }} 
                      >
                        {child.label}
                      </NavDropdown.Item>
                  ))}
                </NavDropdown>
              )
            }
            return (
            <Nav.Link key={item.label} onClick={() => {
              history.push(item.herf)
            }}>{item.label}</Nav.Link>
            )
          })
        }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Index