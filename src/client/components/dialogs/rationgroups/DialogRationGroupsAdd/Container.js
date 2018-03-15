/**
*
* Rationgroups
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
import { checkIntInput } from 'helpers/validators';
import { BORDERS_PERCENT_COEFFICIENT } from 'helpers/constants';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : React.PropTypes.string,
  closeDialog : React.PropTypes.func,
  submitData : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  groups: React.PropTypes.array,
  intl: React.PropTypes.object
};
const defaultProps = { };

const initialState = {
  groupChecked : 0,
  coefficient : 100
};

class DialogRationGroupsAdd extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    const { open : openNext, groups } = nextProps;

    if (!open && (open !== openNext)) {
      this.setState({
        groupChecked : groups[0] && groups[0].id,
        coefficient : 100
      });
    }
  }

  handleIngredientChecked(e, i, v) {
    this.setState({
      groupChecked : v
    });
  }

  handleCountInput(e, v) {
    if (v === '' || (checkIntInput(v, BORDERS_PERCENT_COEFFICIENT.MIN, BORDERS_PERCENT_COEFFICIENT.MAX))) {
      this.setState({
        coefficient : +v
      });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitData, groups } = this.props;
    const { groupChecked, coefficient } = this.state;
    const group = groups.find((item) => groupChecked === item.id);

    submitData({ ...group, coefficient, ordering : groups.length - 1 });
  }

  render() {
    const { open, locked, error, errorMessage, groups, intl } = this.props;

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
        label={<FormattedMessage {...messages.button.save} />}
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
              {intl.formatMessage(messages.form.group.title)}
            </span>
            <SelectField
              className='dialog-form__input'
              hintText={intl.formatMessage(messages.form.group.hint)}
              value={this.state.groupChecked}
              onChange={::this.handleIngredientChecked}
            >
              { groups.map((item, key) => {
                return <MenuItem key={key} value={item.id} primaryText={item.name} />;
              })}
            </SelectField>
            <br/>
            <span className='dialog-form__label'>
              { intl.formatMessage(messages.form.groupRate) }
            </span>
            <TextField
              name='coefficient'
              className='dialog-form__input'
              disabled={locked}
              value={this.state.coefficient}
              onChange={::this.handleCountInput}
              type='number'
            />
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogRationGroupsAdd.propTypes = propTypes;
DialogRationGroupsAdd.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogRationGroupsAdd));
