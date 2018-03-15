/**
 * Created by DzEN on 05.02.2017.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import Divider from 'material-ui/Divider';
import SideMenu from 'client/components/SideMenu';
import AdminSideMenu from 'client/components/AdminSideMenu';
import Header from 'client/components/Header';
import Footer from 'client/components/Footer';
import { modelSelector } from './selectors';
import { containerActions } from './actions.js';
import { MODE } from 'helpers/constants';

const propTypes = {
  permission : PropTypes.object,
  children: PropTypes.node,
  mode : PropTypes.string,
  checkPermissions : PropTypes.func,
  permissions : PropTypes.array
};

class MainPage extends Component {
  componentDidMount() {
    const { checkPermissions } = this.props;

    checkPermissions();
  }

  renderSideMenu() {
    const { mode } = this.props;

    if (mode === MODE.ADMIN) return <AdminSideMenu />;
    if (mode === MODE.COMMON) return <SideMenu />;
  }

  render() {
    console.log('MainPage | render | props ', this.props);
    const { permissions } = this.props;

    return (<Grid className='App__flex'>
      <Row>
        <Col
          sm={12}
          md={12}
          lg={12}
          xs={12}
        >
          <Header/>
          <Divider />
        </Col>
      </Row>
      <Row style={{ flex: '1 1 auto' }} className='main-page-block'>
        <Col
          xs={12}
          sm={12}
          md={2}
          lg={2}
        >
          {permissions.length > 0 ? this.renderSideMenu() : null}
        </Col>
        <Col
          xs={12}
          sm={12}
          md={10}
          lg={10}
        >
          {permissions.length > 0 ? this.props.children : null}
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Divider/>
          <Footer/>
        </Col>
      </Row>
    </Grid>);
  }
}

MainPage.propTypes = propTypes;

export default connect(modelSelector, containerActions)(MainPage);
