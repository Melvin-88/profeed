import React, { Component } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import Warning from 'material-ui/svg-icons/alert/warning';
import config from 'config';
import messages from './messages';

const iconStyles = {
  margin: 12
};

class NotFoundPage extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12} lg={12}>
            <Row className='NotFound'>
              <FormattedMessage {...messages.title}/>
              <br/>
              <Warning style={iconStyles}/>
              <div>
                <h2>404</h2>
              </div>
              <Link to={`/${config.URLS.FARMS}`}>Index</Link>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
