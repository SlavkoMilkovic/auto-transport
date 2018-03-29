import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Nav } from "react-router-dom";
import './Navigator.css';
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

class Navigator extends Component {

  renderNavBar = (item, index) =>
    <NavLink 
      exact={item.exact}
      onMouseOver={this.handleMouseOver} 
      activeStyle={{ color: 'red' }} 
      className={"navigator-nav-item"}
      key={index} 
      to={item.url}
    >
      {item.text}
    </NavLink>
  

  renderRoutes = (item,index) => <Route key={index} exact={item.exact} path={item.url} component={item.component} />

  render(){
    return (
      <Router>
        <div>

          <div className="navigator-container">
            <div>      
              {pages.map(this.renderNavBar)}
            </div> 
          </div>

          <div>    
           {pages.map(this.renderRoutes)}
          </div>

        </div>
      </Router>
    );
  }
}

export default Navigator;

