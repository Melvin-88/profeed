/**
 * Created by DzEN on 27.01.2017.
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid/lib';
import HeaderMenu from 'client/components/HeaderMenu';
import CONFIG from 'config/index';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    const URL = `${CONFIG.URL_ASSETS}/static/img/logo_profeed.svg`;

    return (<Row className='header' middle='lg'>
      <Col
        xs={9}
        sm={3}
        md={3}
        lg={3}
      >
        <Link to={`/${CONFIG.URLS.FARMS}`}>
          <img className='header__left__logo' src={URL} alt='Logo'/>
        </Link>
      </Col>
      <Col
        xs={3}
        sm={9}
        md={9}
        lg={9}
      >
        <HeaderMenu />
      </Col>
    </Row>);
  }
}

export default Header;
