import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../pages/home/Home.js';
import About from '../pages/about/About.js';
import Services from '../pages/services/Services.js';
import Contact from '../pages/contact/Contact.js';

const pages = [{
  url: '/',
  text: 'Početna',
  exact: true,
  component: Home
},{
  url: '/about',
  text: 'O nama',
  exact: false,
  component: About
},{
  url: '/services',
  text: 'Usluge',
  exact: false,
  component: Services
},{
  url: '/contact',
  text: 'Kontakt',
  exact: false,
  component: Contact
}];

const renderNavBar = (item) => <Link to={item.url}>{item.text}</Link>

const renderRoutes = (item) => <Route exact={item.exact} path={item.url} component={item.component} />

const Navigator = () => (
  <Router>
    <div>
      
      {pages.map(renderNavBar)}
      
      {pages.map(renderRoutes)}

    </div>
  </Router>
);

export default Navigator;

