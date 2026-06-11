import Index from '@src/pages/index';
import About from '@src/pages/about';
import ProductIntroduce from '@src/pages/product/introduce';
import ProductApplication from '@src/pages/product/application';
import News from '@src/pages/news';
import Contact from '@src/pages/contact';

export default [
  {
    path: "/index",
    Component: Index,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/product/introduce",
    Component: ProductIntroduce,
  },
  {
    path: "/product/application",
    Component: ProductApplication,
  },
  {
    path: "/news",
    Component: News,
  },
  {
    path: "/contact",
    Component: Contact,
  },
];
