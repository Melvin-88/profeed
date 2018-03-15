/**
*
* DialogTransferAdd
*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';


const propTypes = {
  farmId : React.PropTypes.string,
  closeDialog : React.PropTypes.func,
  submitAddTransfer : React.PropTypes.func,
  loadDataForSelects : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  groups : React.PropTypes.array,
  transferlist : React.PropTypes.array,
  setLocked: React.PropTypes.func,
  intl: React.PropTypes.object
};
const defaultProps = { };

const initialState = {
  groupChecked : null,
  transferlistChecked : null,
  animalCount : 0,
  specLockByValidateCount : true,
  group2Checked : null,
  showGroup2Checked : false
};

class DialogTransferAdd extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initialState, locked: this.props.locked };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && (this.props.open !== nextProps.open)) {
      const { loadDataForSelects, farmId, locked  } = nextProps;

      loadDataForSelects(farmId);
      this.setState({ ...initialState, locked });
    }
  }

  handleGroupChecked(event, index, value) {
    if (this.state.showGroup2Checked && this.state.group2Checked === value) {
      return;
    }

    this.setState({ groupChecked : value });
  }

  handleGroup2Checked(event, index, value) {
    if (this.state.groupChecked === value) {
      return;
    }

    this.setState({ group2Checked : value });
  }

  handleTransferlistChecked(event, index, value) {
    const state = {
      transferlistChecked : value,
      showGroup2Checked : false
    };
    const { transferlist } = this.props;
    const transferlistItem = transferlist.find((item) => {
      return item.id === value;
    });

    if (transferlistItem && transferlistItem.transfer_type === 2) {
      state.showGroup2Checked = true;
    } else {
      state.group2Checked = false;
    }

    this.setState(state);
  }

  handleCountInput(e, v) {
    const asInt = parseInt(v, 10);

    if (asInt) {
      this.setState({
        animalCount : asInt,
        specLockByValidateCount : false
      });
    } else if (v === '') {
      // Can delete all symbols, but lock Submit
      this.setState({
        animalCount : '',
        specLockByValidateCount : true
      });
    } else {
      // You have not power for to input symbols!
      this.setState({
        specLockByValidateCount : true
      });
    }
  }

  handleSubmit() {
    const { submitAddTransfer, farmId } = this.props;
    const data = { ...this.state, farmId };

    if (this.state.showGroup2Checked) {
      data.group2 = this.state.group2Checked;
    }

    this.setState({ locked: true });
    submitAddTransfer(data);
  }

  handleKeySubmit(e) {
    const { specLockByValidateCount } = this.state;

    if (e.keyCode === 13 && !specLockByValidateCount) {
      this.handleSubmit();
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  render() {
    const { open, groups, transferlist, error, errorMessage, intl } = this.props;
    const { locked } = this.state;
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
        disabled={locked || this.state.specLockByValidateCount || !this.state.groupChecked ||
        !this.state.transferlistChecked || (this.state.showGroup2Checked ? !this.state.group2Checked : false)}
        primary
        onTouchTap={::this.handleSubmit}
      />
    ];

    // console.log('DialogGroupsRemove | render | props ', this.props);

    return (
      <div>
        <DialogTemplate
          title={intl.formatMessage(messages.title)}
          actions={actions}
          modal
          open={open}
          errorMessage={error ? errorMessage : null}

        >
          <div className='dialog-form' onKeyDown={::this.handleKeySubmit}>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.transferFromGroup.title)}
            </span>
            <SelectField
              className='dialog-form__input'
              hintText={intl.formatMessage(messages.form.transferFromGroup.hint)}
              value={this.state.groupChecked}
              onChange={::this.handleGroupChecked}
            >
              { groups.map((item, key) => {
                return <MenuItem key={key} value={item.id} primaryText={item.name} />;
              })}
            </SelectField>
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.type.title)}
            </span>
            <SelectField
              className='dialog-form__input'
              autoWidth
              value={this.state.transferlistChecked}
              hintText={intl.formatMessage(messages.form.type.hint)}
              onChange={::this.handleTransferlistChecked}
            >
              { transferlist.map((item, key) => {
                return (<MenuItem key={key} value={item.id}
                  primaryText={`${item.name}`}
                  /* primaryText={`${item.name} - ${item.transfer_type ? '"-"' : '"+"'}`} */
                        />);
              })}
            </SelectField>
            <br/>
            {this.state.showGroup2Checked ? (<div>
              <span className='dialog-form__label'>Переведення у групу: </span>
              <SelectField
                className='dialog-form__input'
                hintText='Пусто'
                value={this.state.group2Checked}
                onChange={::this.handleGroup2Checked}
              >
                { groups.map((item, key) => {
                  return <MenuItem key={key} value={item.id} primaryText={item.name} />;
                })}
              </SelectField>
            </div>) : ''}
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.enterQuantityAnimals)}
            </span>
            <TextField
              name='count'
              className='dialog-form__input'
              disabled={locked}
              value={this.state.animalCount}
              onChange={::this.handleCountInput}
            />
            <br/>
            {error ? <span className='error-message'>{errorMessage}</span> : ''}
          </div>
        </DialogTemplate>
      </div>
    );
  }
}

DialogTransferAdd.propTypes = propTypes;
DialogTransferAdd.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogTransferAdd));
