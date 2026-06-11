import React, { useEffect } from "react";
import Header from '@src/components/header';
import Menu from '@src/components/menu'
import Footer from '@src/components/footer';
import { getRoutes } from '@src/utils/routes'
import routerList from '@src/config/content-router';
import { useHistory, useLocation } from 'react-router-dom'
import "./style/app.less";

function App() {
  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/index')
    }
  }, [])

  return (
    <div className="app">
      <div className="app-header">
        <Header />
        <Menu />
      </div>
      <div className="app-content">
        {getRoutes(routerList)}
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
