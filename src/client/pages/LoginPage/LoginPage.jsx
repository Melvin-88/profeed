import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import AppBar from 'material-ui/AppBar';
import AssignmentInd from 'material-ui/svg-icons/action/assignment-ind';
import { red300, green500, red900, red600, white } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import LockOpen from 'material-ui/svg-icons/action/lock-open';
import { TextField } from 'redux-form-material-ui';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { required } from 'helpers/validators';
import { FormattedMessage } from 'react-intl';
import LanguagesModal from 'client/components/dialogs/languageSelect/DialogCheckLanguage';
import messages from './messages';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const iconStyles = {
  margin: 12
};

class LoginForm extends Component {

  componentWillMount() {
    // console.log('LoginForm | componentWillMount | props ', this.props);
  }

  componentDidMount() {
    // console.log('LoginForm | componentDidMount | props ', this.props);
    this.usernameInput            // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus();                // on TextField
  }

  handleShowLanguagesDialog(event) {
    event.preventDefault(); // Let's stop this event.
    event.stopPropagation(); // Really this time.

    const { showLanguagesDialog } = this.props;

    showLanguagesDialog();
  }

  render() {
    const { handleSubmit, login, loginStatuses } = this.props;

    // console.log('LoginForm | render | props ', this.props);

    return (
      <Grid>
        <Row>
          <Col md={12} lg={12}>
            <Row className='Login'>
              <Col mdOffset={3} md={6} lgOffset={4}
                lg={4}
              >
                <Row style={{ backgroundColor : green500 }}>
                  <AppBar
                    title={
                      <FormattedMessage {...messages.form.title} />
                    }
                    iconElementLeft={<AssignmentInd style={iconStyles} color={white} />}
                  />
                </Row>
                <br/>
                <form onSubmit={handleSubmit(login)}>
                  <Row>
                    <Col md={12} lg={12}>
                      <Field name='username'
                        disabled={loginStatuses.loginStart}
                        component={TextField}
                        fullWidth
                        hintText={<FormattedMessage {...messages.form.login.title} />}
                        validate={[ required ]}
                        ref={(input) => this.usernameInput = input}
                        withRef
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} lg={12}>
                      <Field name='password'
                        disabled={loginStatuses.loginStart}
                        component={TextField}
                        fullWidth
                        type='password'
                        hintText={<FormattedMessage {...messages.form.password.title} />}
                        validate={[ required ]}
                      />
                    </Col>
                  </Row>
                  <br/>
                  {loginStatuses.loginError ? <Chip className='error-message' backgroundColor={red600} labelColor='white'>
                    <Avatar size={32} color={red300} backgroundColor={red900}>E</Avatar>
                    <FormattedMessage {...messages.form.bad} />
                  </Chip> : null }
                  <Row>
                    <Col  mdOffset={3} md={6} lgOffset={4}
                      lg={4}
                    >
                      <FlatButton
                        label={<FormattedMessage {...messages.button.login} />}
                        labelPosition='before'
                        primary
                        icon={<LockOpen />}
                        disabled={loginStatuses.loginStart}
                        type='submit'
                      />
                    </Col>
                  </Row>
                  <Row className='login-page-registration-lnk'>
                    <Col md={6}>
                      <Link to='/register'>Registration</Link>
                    </Col>
                    <Col md={6} className='languages-link-container'>
                      <a href='' onClick={::this.handleShowLanguagesDialog}>Languages</a>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
        <LanguagesModal/>
      </Grid>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  login: PropTypes.func,
  loginStatuses: PropTypes.object,
  showLanguagesDialog : PropTypes.func
};

const Form = reduxForm({
  form: 'LoginForm'
})(LoginForm);

export default connect(modelSelector, containerActions)(Form);
