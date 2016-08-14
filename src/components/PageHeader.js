import React, { Component } from 'react';
import { Link } from 'react-router';

import './PageHeader.css';


class PageHeader extends Component {
  render() {
    return (
      <header className="PageHeader">
        <nav> 
          <Link to={"/"} className="PageHeader_Brand">></Link>
        </nav>
      </header>
    );
  }
}

export default PageHeader;
