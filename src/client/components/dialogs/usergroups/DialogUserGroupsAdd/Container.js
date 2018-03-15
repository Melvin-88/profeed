/**
*
* UserGroups
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  closeDialog : React.PropTypes.func,
  submit : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  settings : React.PropTypes.array,
  intl: React.PropTypes.object
};
const defaultProps = { };

const initState = {
  name : '',
  specLockByValidateName : true,
  settings : []
};

class DialogUserGroupsAdd extends Component { // eslint-disable-line react/prefer-stateless-function
  state = { ...initState };

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && (this.props.open !== nextProps.open)) {
      this.setState({ ...initState });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submit, settings } = this.props;
    const { name, settings : checkedSettings } = this.state;


    submit({ name, settings : settings.filter((item) => checkedSettings.includes(item.id)) });
  }

  handleName(e, v) {
    if (v === '') {
      this.setState({
        name : '',
        specLockByValidateName : true
      });
    } else {
      this.setState({
        name : v,
        specLockByValidateName : false
      });
    }
  }

  handleSettings(event, index, values) {
    this.setState({
      settings : values
    });
  }

  menuItems(items, checkedItems) {
    return items.map((item, i) => (
      <MenuItem
        key={i}
        insetChildren
        checked={checkedItems && checkedItems.includes(item.id)}
        value={item.id}
        primaryText={item.name}
      />
    ));
  }

  render() {
    const { open, locked, error, errorMessage, settings, intl } = this.props;

    const actions = [
      <FlatButton
        key='1'
        label={<FormattedMessage {...messages.button.cancel} />}
        disabled={locked}
        secondary
        onTouchTap={::this.handleClose}
      />,
      <FlatButton
        key='2'
        label={<FormattedMessage {...messages.button.add} />}
        disabled={locked || this.state.specLockByValidateName}
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
              {intl.formatMessage(messages.form.nameGroup.title)}
            </span>
            <TextField
              name='name'
              className='dialog-form__input'
              value={this.state.name}
              onChange={::this.handleName}
              hintText={intl.formatMessage(messages.form.nameGroup.hint)}
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.sections.title)}
            </span>
            <SelectField
              multiple
              className='dialog-form__input'
              value={this.state.settings}
              onChange={::this.handleSettings}
              hintText={intl.formatMessage(messages.form.sections.hint)}
            >
              {this.menuItems(settings, this.state.settings)}
            </SelectField>
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogUserGroupsAdd.propTypes = propTypes;
DialogUserGroupsAdd.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogUserGroupsAdd));
