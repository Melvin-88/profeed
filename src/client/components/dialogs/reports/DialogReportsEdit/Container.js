/**
*
* Reports
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogTemplate from 'client/shared/DialogTemplate';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : PropTypes.string,
  closeDialog : PropTypes.func,
  submit : PropTypes.func,
  getUserGroups : PropTypes.func,
  open : PropTypes.bool,
  locked : PropTypes.bool,
  error : PropTypes.bool,
  errorMessage : PropTypes.string,
  usergroups : PropTypes.array,
  report : PropTypes.object,
  reports : PropTypes.array,
  intl : PropTypes.object
};
const defaultProps = { };

class DialogReportsEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    group : null,
    checkedReports : []
  }

  componentDidMount() {
    const { getUserGroups } = this.props;

    getUserGroups();
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submit } = this.props;

    submit();
  }

  handleCheckedGroup(event, index, v) {
    console.log('handleCheckedGroup : ', index, v);

    this.setState({
      group : v
    });
  }

  handleCheckedReports(event, index, values) {
    console.log('handleCheckedReports : ', index, values);
    const { reports } = this.props;

    this.setState({
      checkedReports : reports.filter((item) => !!values.find((el) => el === item.id))
    });
  }

  menuItems(items, checkedItems) {
    return items.map((item, i) => {
      return (<MenuItem
        key={i}
        insetChildren
        checked={!!checkedItems.find((el) => el.id === item.id)}
        value={item.id}
        primaryText={item.name}
              />);
    });
  }

  render() {
    const { open, locked, error, errorMessage, intl, usergroups, reports } = this.props;
    const { group, checkedReports } = this.state;

    console.log('DialogReportsEdit | render >>> ', usergroups, reports);

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
              {intl.formatMessage(messages.form.usergroups)}
            </span>
            <SelectField
              className='dialog-form__input'
              value={group}
              onChange={::this.handleCheckedGroup}
            >
              { usergroups.map((item, key) => {
                return <MenuItem key={key} value={item.id} primaryText={item.name} />;
              })}
            </SelectField>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.reports)}
            </span>
            <SelectField
              multiple
              className='dialog-form__input'
              value={checkedReports.map(item => item.id)}
              onChange={::this.handleCheckedReports}
            >
              {this.menuItems(reports, checkedReports)}
            </SelectField>
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogReportsEdit.propTypes = propTypes;
DialogReportsEdit.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogReportsEdit));
