/**
*
* Schedules
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : React.PropTypes.string,
  closeDialog : React.PropTypes.func,
  submitAddSchedules : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  rations : React.PropTypes.array,
  getRations : React.PropTypes.func,
  intl: React.PropTypes.object
};
const defaultProps = { };

const initialState = {
  checkedRation : -1,
  planned : null,
  checkedLoadingCount : -1
};

class DialogSchedulesAdd extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  componentDidMount() {
    const { getRations, farmId } = this.props;

    getRations(farmId);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && (this.props.open !== nextProps.open)) {
      this.setState(initialState);
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitAddSchedules } = this.props;

    submitAddSchedules({ ...this.state });
  }

  handleChangeRation(event, index, value) {
    this.setState({
      checkedRation : value,
      checkedLoadingCount : -1
    });
  }

  handleChangePlanned(e, v) {
    this.setState({
      planned : v
    });
  }

  handleChangeLoadingCount(event, index, value) {
    this.setState({
      checkedLoadingCount : value
    });
  }

  /**
   *
   * @param rations
   * @param checkedRation
   * @return {Array}
   */
  getLoadingCounts(rations, checkedRation) {
    if (checkedRation === -1) return [];

    const ration = rations.find((item) => item.id === checkedRation);

    return ration ? ration.loading_counts : [];
  }

  render() {
    const { open, locked, error, errorMessage, rations, intl } = this.props;
    const loadingCounts = this.getLoadingCounts(rations, this.state.checkedRation);

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
              {intl.formatMessage(messages.form.chooseDiet)}
            </span>
            <SelectField
              className='dialog-form__input'
              value={this.state.checkedRation}
              onChange={::this.handleChangeRation}
            >
              {rations.map((item, key) => {
                return <MenuItem key={key} value={item.id} primaryText={item.name} />;
              })}
            </SelectField>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.selectTheDateOfExecution)}
            </span>
            <DatePicker value={this.state.planned} onChange={::this.handleChangePlanned}
              className='dialog-datepicker__input' minDate={new Date()} id='date-schedules'
            />
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.selectdDstribution)}
            </span>
            <SelectField
              className='dialog-form__input'
              value={this.state.checkedLoadingCount}
              onChange={::this.handleChangeLoadingCount}
            >
              {loadingCounts.map((item, key) => {
                return <MenuItem key={key} value={item.id} primaryText={item.name} />;
              })}
            </SelectField>
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogSchedulesAdd.propTypes = propTypes;
DialogSchedulesAdd.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogSchedulesAdd));
