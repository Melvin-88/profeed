/**
 *
 * RegisterPage
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Link } from 'react-router';
import messages from './messages';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import AppBar from 'material-ui/AppBar';
import AssignmentInd from 'material-ui/svg-icons/action/assignment-ind';
import { green500, red300, red900, red600, white } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import LockOpen from 'material-ui/svg-icons/action/lock-open';
import { TIMEZONES, LANGUAGES } from 'helpers/constants';
import { checkPhoneNumber, checkEmail } from 'helpers/validators';
import Paper from 'material-ui/Paper';
import LanguagesModal from 'client/components/dialogs/languageSelect/DialogCheckLanguage';
import './style.css';

const propTypes = {
  register : PropTypes.func,
  locked : PropTypes.bool,
  error : PropTypes.bool,
  errorMessage : PropTypes.string,
  submit : PropTypes.func,
  intl : PropTypes.object,
  showLanguagesDialog : PropTypes.func
};
const defaultProps = {};
const iconStyles = {
  margin: 12
};
/* Default values:
*   username: 'vitaliyadmin',
 password: 'qwertY123',
 passwordConfirm: '',
 firstName: 'Vitaliy',
 lastName: 'Bilous',
 phoneNumber: '380633337777',
 email: 'qwerty@ccc.cc',
 about: 'Test registration',
* */
const initState = {
  scroll: true,
  username: '',
  password: '',
  passwordConfirm: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  about: '',
  timezone : -1,
  language : -1,
  usernameErr : '',
  passwordErr : '',
  passwordConfirmErr: '',
  firstNameErr: '',
  lastNameErr: '',
  phoneNumberErr: '',
  emailErr: ''
/*  specLockByValidateUsername: true,
  specLockByValidatePassword: true,
  specLockByValidateFirstName: true,
  specLockByValidateLastName: true,
  specLockByValidatePhoneNumber: true,
  specLockByValidateEmail: true,
  checkedFarms: [],
  checkedUserGroups: []*/
};
const VALIDATOR = {
  USERNAME : {
    required : {
      IDi18l : 'required',
      value : true
    },
    regexp : {
      IDi18l : '',
      value : null
    },
    minLength : {
      IDi18l : 'minLength',
      value : 4
    },
    maxLength : {
      IDi18l : 'maxLength',
      value : 150
    }
  },
  EMAIL : {
    required : {
      IDi18l : 'required',
      value : true
    },
    regexp : {
      IDi18l : 'regexpEmail',
      value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    },
    minLength : {
      IDi18l : 'minLength',
      value : 6
    },
    maxLength : {
      IDi18l : 'maxLength',
      value : 128
    }
  },
  PASSWORD : {
    required : {
      IDi18l : 'required',
      value : true
    },
    regexp : {
      IDi18l : 'regexpPassword',
      value : /(?=.*\d)(?=.*[A-Z]).+/
    },
    minLength : {
      IDi18l : 'minLength',
      value : 8
    },
    maxLength : {
      IDi18l : 'maxLength',
      value : 16
    }
  },
  PASSWORD_CONFIRM : {
    required : {
      IDi18l : 'required',
      value : true
    },
    regexp : {
      IDi18l : 'regexpPassword',
      value : /(?=.*\d)(?=.*[A-Z]).+/
    },
    minLength : {
      IDi18l : 'minLength',
      value : 8
    },
    maxLength : {
      IDi18l : 'maxLength',
      value : 16
    },
    relation : {
      IDi18l : 'relationPassword',
      value : 'password'
    }
  },
  FIRST_NAME : {
    required : {
      IDi18l : 'required',
      value : true
    },
    regexp : {
      IDi18l : '',
      value : null
    },
    minLength : {
      IDi18l : 'minLength',
      value : 4
    },
    maxLength : {
      IDi18l : 'maxLength',
      value : 150
    }
  },
  LAST_NAME : {
    required : {
      IDi18l : 'required',
      value : true
    },
    regexp : {
      IDi18l : '',
      value : null
    },
    minLength : {
      IDi18l : 'minLength',
      value : 4
    },
    maxLength : {
      IDi18l : 'maxLength',
      value : 150
    }
  },
  PHONENUMBER : {
    required : {
      IDi18l : 'required',
      value : true
    },
    regexp : {
      IDi18l : 'regexpPhone',
      value : /^(\d+)$/i
    },
    minLength : {
      IDi18l : 'minLength',
      value : 12
    },
    maxLength : {
      IDi18l : 'maxLength',
      value : 15
    }
  }
};

function validator(value, validateObj) {
  if (validateObj.required.value && !value) return { id : validateObj.required.IDi18l, value : validateObj.required.value };

  if (validateObj.minLength.value > `${value}`.length) {
    return { id : validateObj.minLength.IDi18l, value : validateObj.minLength.value };
  }

  if (validateObj.maxLength.value < `${value}`.length) {
    return { id : validateObj.maxLength.IDi18l, value : validateObj.maxLength.value };
  }

  if (validateObj.regexp.value && !validateObj.regexp.value.test(value)) {
    return { id : validateObj.regexp.IDi18l, value : validateObj.regexp.value };
  }

  return null;
}

class RegisterPage extends Component { // eslint-disable-line react/prefer-stateless-function
  state = { ...initState };

  handleSubmit() {
    const { username, password, firstName, lastName, phoneNumber, email, about, timezone, language } = this.state;
    const { submit } = this.props;

    submit({
      email,
      username,
      password,
      'first_name': firstName,
      'last_name': lastName,
      'phone_number': `${phoneNumber}`,
      'profile': {
        about,
        language,
        timezone
      }
    });
  }

  handleUsername(e, v) {
    if (v === '') {
      this.setState({
        username: ''
      });
    } else {
      this.setState({
        username: v
      });
    }
  }

  handlePassword(e, v) {
    if (v === '') {
      this.setState({
        password: ''
      });
    } else {
      this.setState({
        password: v
      });
    }
  }

  handlePasswordConfirm(e, v) {
    if (v === '') {
      this.setState({
        passwordConfirm: ''
      });
    } else {
      this.setState({
        passwordConfirm: v
      });
    }
  }

  handleFirstName(e, v) {
    if (v === '') {
      this.setState({
        firstName: ''
      });
    } else {
      this.setState({
        firstName: v
      });
    }
  }

  handleLastName(e, v) {
    if (v === '') {
      this.setState({
        lastName: ''
      });
    } else {
      this.setState({
        lastName: v
      });
    }
  }

  handlePhoneNumber(e, v) {
    const asInt = parseInt(v, 10);

    if (asInt) {
      this.setState({
        phoneNumber: asInt
      });
    } else if (v === '') {
      this.setState({
        phoneNumber: ''
      });
    }
  }

  handleEmail(e, v) {
    if (v) {
      this.setState({
        email: v
      });
    } else if (v === '') {
      this.setState({
        email: v
      });
    }
  }

  handleAbout(e, v) {
    this.setState({
      about: v
    });
  }

  handleChangeTimeZone(event, index, value) {
    this.setState({ timezone : value });
  }

  handleChangeLang(event, index, value) {
    this.setState({ language : value });
  }

  handleShowLanguagesDialog(event) {
    event.preventDefault(); // Let's stop this event.
    event.stopPropagation(); // Really this time.

    const { showLanguagesDialog } = this.props;

    showLanguagesDialog();
  }

  checkValidation(val, validatorObj, errVal) {
    const { intl } = this.props;
    const result = validator(val, validatorObj);

    this.setState({
      [errVal] : result ? intl.formatMessage(messages.validate[result.id], { value : result.value }) : ''
    });
  }

  checkPassAndPassConfirm() {
    const { intl } = this.props;
    const cf = this.state.passwordConfirm;
    const lf = this.state.password;

    this.setState({
      passwordConfirmErr : cf !== lf ? intl.formatMessage(messages.validate.compared.passwordConfirm) : ''
    });
  }

  isValid() {
    const { username, password, firstName, lastName, phoneNumber, email, timezone, language, passwordConfirm,
      usernameErr, passwordErr, passwordConfirmErr, firstNameErr, lastNameErr, phoneNumberErr, emailErr } = this.state;

    if (!username || !password || !passwordConfirm || !firstName || !lastName || !!usernameErr ||
      !!passwordErr || !!passwordConfirmErr || !!firstNameErr || !!lastNameErr || !!phoneNumberErr || !!emailErr ||
      (password !== passwordConfirm) ||
      !checkPhoneNumber(phoneNumber) ||
      !checkEmail(email) ||
      (timezone === -1) ||
      (language === -1)) return false;

    return true;
  }

  render() {
    const { locked, intl } = this.props;
    const { username, password, firstName, lastName, phoneNumber, email, about, timezone, language, passwordConfirm,
      usernameErr, passwordErr, passwordConfirmErr, firstNameErr, lastNameErr, phoneNumberErr, emailErr, error,
      errorMessage } = this.state;

    const allValid = this.isValid();

    return (<Grid className='register-page'>
      <Row>
        <Col md={12} lg={12}>
          <Row className='Login'>
            <Col mdOffset={3} md={6} lgOffset={4}
              lg={5}
            >
              <Paper zDepth={2} rounded={false} style={{ padding : '10px' }}>
                <Col md={12}>
                  <Row style={{ backgroundColor: green500 }}>
                    <AppBar
                      title={
                        <FormattedMessage {...messages.title} />
                      }
                      iconElementLeft={<AssignmentInd style={iconStyles} color={white}/>}
                    />
                  </Row>
                  <Row>
                    <div className='dialog-form'>
                      <br/>
                      <span className='dialog-form__label'>
                        {intl.formatMessage(messages.form.username.title)}
                      </span>
                      <TextField
                        name='username'
                        className='dialog-form__input'
                        value={username}
                        errorText={usernameErr}
                        onBlur={() => this.checkValidation(username, VALIDATOR.USERNAME, 'usernameErr')}
                        onChange={::this.handleUsername}
                        hintText={intl.formatMessage(messages.form.username.hint)}
                      />
                      <br/>

                      <span className='dialog-form__label'>
                        {intl.formatMessage(messages.form.email.title)}
                      </span>
                      <TextField
                        name='email'
                        className='dialog-form__input'
                        value={email}
                        errorText={emailErr}
                        onBlur={() => this.checkValidation(email, VALIDATOR.EMAIL, 'emailErr')}
                        onChange={::this.handleEmail}
                        hintText={intl.formatMessage(messages.form.email.hint)}
                      />
                      <br/>

                      <span className='dialog-form__label'>
                        {intl.formatMessage(messages.form.password.title)}
                      </span>
                      <TextField
                        name='password'
                        className='dialog-form__input'
                        value={password}
                        errorText={passwordErr}
                        onBlur={() => {
                          this.checkValidation(password, VALIDATOR.PASSWORD, 'passwordErr');
                          this.checkPassAndPassConfirm();
                        }}
                        onChange={::this.handlePassword}
                        type='password'
                        hintText={intl.formatMessage(messages.form.password.hint)}
                      />
                      <br/>

                      <span className='dialog-form__label'>
                        {intl.formatMessage(messages.form.passwordConfirm.title)}
                      </span>
                      <TextField
                        name='password'
                        className='dialog-form__input'
                        value={passwordConfirm}
                        errorText={passwordConfirmErr}
                        onBlur={() => this.checkPassAndPassConfirm()}
                        onChange={::this.handlePasswordConfirm}
                        type='password'
                        hintText={intl.formatMessage(messages.form.passwordConfirm.hint)}
                      />
                      <br/>

                      <span className='dialog-form__label'>
                        {intl.formatMessage(messages.form.firstname.title)}
                      </span>
                      <TextField
                        name='first name'
                        className='dialog-form__input'
                        value={firstName}
                        errorText={firstNameErr}
                        onBlur={() => this.checkValidation(firstName, VALIDATOR.FIRST_NAME, 'firstNameErr')}
                        onChange={::this.handleFirstName}
                        hintText={intl.formatMessage(messages.form.firstname.hint)}
                      />
                      <br/>

                      <span className='dialog-form__label'>
                        {intl.formatMessage(messages.form.lastname.title)}
                      </span>
                      <TextField
                        name='last name'
                        className='dialog-form__input'
                        value={lastName}
                        errorText={lastNameErr}
                        onBlur={() => this.checkValidation(lastName, VALIDATOR.LAST_NAME, 'lastNameErr')}
                        onChange={::this.handleLastName}
                        hintText={intl.formatMessage(messages.form.lastname.hint)}
                      />
                      <br/>

                      <span className='dialog-form__label'>
                        {intl.formatMessage(messages.form.phonenumber.title)}
                      </span>
                      <TextField
                        name='phone number'
                        className='dialog-form__input'
                        value={phoneNumber}
                        errorText={phoneNumberErr}
                        onBlur={() => this.checkValidation(phoneNumber, VALIDATOR.PHONENUMBER, 'phoneNumberErr')}
                        onChange={::this.handlePhoneNumber}
                        hintText={intl.formatMessage(messages.form.phonenumber.hint)}
                      />
                      <br/>
                      <span className='dialog-form__label'>
                        {intl.formatMessage(messages.form.about.title)}
                      </span>
                      <TextField
                        name='about'
                        className='dialog-form__input'
                        multiLine
                        rows={3}
                        value={about}
                        onChange={::this.handleAbout}
                        hintText={intl.formatMessage(messages.form.about.hint)}
                      />

                      <span className='dialog-form__label'><FormattedMessage {...messages.form.timezone} />:</span>
                      <SelectField
                        className='dialog-form__input'
                        value={timezone}
                        onChange={::this.handleChangeTimeZone}
                      >
                        { TIMEZONES.map((item, key) => {
                          return <MenuItem key={key} value={item.id} primaryText={item.tz} />;
                        })}
                      </SelectField>
                      <br/>
                      <span className='dialog-form__label'><FormattedMessage {...messages.form.language} />:</span>
                      <SelectField
                        className='dialog-form__input'
                        value={language}
                        onChange={::this.handleChangeLang}
                      >
                        { LANGUAGES.map((item, key) => {
                          return <MenuItem key={key} value={item.id} primaryText={item.title} />;
                        })}
                      </SelectField>
                    </div>
                  </Row>
                  <Row>
                    {error ? <Chip className='error-message' backgroundColor={red600} labelColor='white'>
                      <Avatar size={32} color={red300} backgroundColor={red900}>E</Avatar>
                      {errorMessage}
                    </Chip> : null }
                  </Row>
                  <Row className='register-button'>
                    <Col  mdOffset={3} md={6} lgOffset={4}
                      lg={4}
                    >
                      <FlatButton
                        label={<FormattedMessage {...messages.button.register} />}
                        labelPosition='before'
                        primary
                        icon={<LockOpen />}
                        disabled={locked || !allValid}
                        onTouchTap={::this.handleSubmit}
                      />
                    </Col>
                  </Row>
                  <Row className='register-page-login-lnk'>
                    <Col md={6}>
                      <Link to='/login'><FormattedMessage {...messages.link.login}/></Link>
                    </Col>
                    <Col md={6} className='languages-link-container'>
                      <a href='' onClick={::this.handleShowLanguagesDialog}>Languages</a>
                    </Col>
                  </Row>
                </Col>
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>
      <LanguagesModal/>
    </Grid>);
  }
}

RegisterPage.propTypes = propTypes;
RegisterPage.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(RegisterPage));
