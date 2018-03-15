/**
*
* Register
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

const propTypes = {
  intl : PropTypes.object,
  closeDialog : PropTypes.func,
  submitCheckLanguage: PropTypes.func,
  open : PropTypes.bool,
  locked : PropTypes.bool,
  error : PropTypes.bool,
  errorMessage : PropTypes.string,
  languages : PropTypes.array,
  language : PropTypes.string
};
const defaultProps = { };

class DialogRegisterCheckLanguage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { language : '' };
  }

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    const { open : openNext, language } = nextProps;

    if (!open && (open !== openNext)) {
      this.setState({ language });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitCheckLanguage } = this.props;
    const { language } = this.state;

    submitCheckLanguage(language);
  }

  handleLangSelected(event, index, value) {
    this.setState({
      language : value
    });
  }

  render() {
    const { open, locked, error, errorMessage, intl, languages } = this.props;
    const { language } = this.state;

    const actions = [
      <FlatButton
        key='1'
        label={<FormattedMessage {...messages.button.cancel}/>}
        disabled={locked}
        secondary
        onTouchTap={::this.handleClose}
      />,
      <FlatButton
        key='2'
        label={<FormattedMessage {...messages.button.save}/>}
        disabled={locked}
        primary
        onTouchTap={::this.handleSubmit}
      />
    ];

    return (
      <div>
        <DialogTemplate
          title={intl.formatMessage(messages.title)}
          actions={actions}
          modal
          open={open}
          errorMessage={error ? errorMessage : null}

        >
          <div className='dialog-form'>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.languages)}
            </span>
            <SelectField
              className='dialog-form__input'
              value={language}
              onChange={::this.handleLangSelected}
            >
              { languages.map((item, key) => {
                return <MenuItem key={key} value={item.key} primaryText={item.title} />;
              })}
            </SelectField>
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogRegisterCheckLanguage.propTypes = propTypes;
DialogRegisterCheckLanguage.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogRegisterCheckLanguage));
