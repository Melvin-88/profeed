/**
 * Created by DzEN on 27.01.2017.
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid/lib';
import CONFIG from 'config/index';

class Footer extends Component {
  render() {
    const URL = `${CONFIG.URL_ASSETS}/static/img/logo_ferma.svg`;

    return (<Row className='footer'>
      <Col
        md={5}
        lg={5}
        sm={12}
        xs={12}
      >
        <p>ООО «Прогрессивные фермы»</p>
        <p>02094, Украина, г.. Киев, ул. Красногвардейская, д. 12, оф. 177</p>
      </Col>
      <Col
        md={7}
        lg={7}
        sm={12}
        xs={12}
      >
        <Row end='lg'>
          <Col
            md={3}
            lg={3}
            sm={6}
            xs={6}
          >
            <img className='footer__right__logo' src={URL} alt='Logo'/>
          </Col>
          <Col
            md={9}
            lg={9}
            sm={6}
            xs={6}
            className='footer__right'
          >
            <p>Тел.: +38 (044) 391-20-27</p>
            <p><a href='mailto:info@progressivefarm.com.ua'>info@progressivefarm.com.ua</a></p>
          </Col>
        </Row>
      </Col>
    </Row>);
  }
}

export default Footer;
