// React
import React from "react";
import ReactDOM from "react-dom";
// Router
import { BrowserRouter } from "react-router-dom";
import { getRoutes } from "@src/utils/routes";
import routerList from "@src/config/index-router";
/// comon css
import "./style/index.less";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>{getRoutes(routerList)}</BrowserRouter>,
  document.getElementById("root")
);
