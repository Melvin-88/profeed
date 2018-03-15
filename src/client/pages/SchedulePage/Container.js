/**
*
* SchedulePage
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Row, Col } from 'react-flexbox-grid/lib';
import TableScheduleRationLoadingCounts from 'client/components/tables/TableScheduleRationLoadingCounts';
import { checkIntInput } from 'helpers/validators';
import { BORDERS_PERCENT_COEFFICIENT } from 'helpers/constants';
import TableScheduleIngredients from 'client/components/tables/TableScheduleRationIngredients';
import TableScheduleGroups from 'client/components/tables/TableScheduleRationGroups';
import './style.css';

const propTypes = {
  permission : PropTypes.object,
  farmId : PropTypes.string,
  schedule : PropTypes.object,
  getSchedule : PropTypes.func,
  rations : PropTypes.array,
  loadingCounts : PropTypes.array,
  loadingCount : PropTypes.object,
  ingredients : PropTypes.array,
  changeCoefficient : PropTypes.func,
  scheduleId : PropTypes.string,
  saveSchedule : PropTypes.func,
  getRations : PropTypes.func,
  getLoadingCounts : PropTypes.func,
  exit : PropTypes.func,
  groups : PropTypes.array
};
const defaultProps = { };
const initState = {
  coefficient : 100,
  name : null,
  autoLoad : false,
  planned : null
};

class SchedulePage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initState };
  }

  componentDidMount() {
    const { getSchedule, scheduleId } = this.props;

    getSchedule(scheduleId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.name === null && nextProps.schedule && nextProps.schedule.name) {
      const newState = {
        coefficient : nextProps.schedule.coefficient,
        name : nextProps.schedule.name,
        autoLoad : nextProps.schedule.autoLoad,
        planned : new Date(nextProps.schedule && nextProps.schedule.planned || null)
      };

      this.setState({ ...newState });
    }
  }

  handleNameInput(e, v) {
    this.setState({
      name : v
    });
  }

  handleLoadingPercentInput(e, v) {
    const { changeCoefficient } = this.props;

    if (v === '' || (checkIntInput(v, BORDERS_PERCENT_COEFFICIENT.MIN, BORDERS_PERCENT_COEFFICIENT.MAX))) {
      changeCoefficient(+v);
      this.setState({
        coefficient : +v
      });
    }
  }

  handleLoadingAuto() {
    this.setState({
      autoLoad : !this.state.autoLoad
    });
  }

  handleChangePlanned(e, v) {
    console.log('Schedule planned : ', v);
    this.setState({
      planned : v
    });
  }

  handleSaveSchedule() {
    const { saveSchedule, schedule, groups, ingredients, loadingCount } = this.props;
    const editedSchedule = { ...schedule, ...this.state };

    saveSchedule({ schedule : editedSchedule, groups, ingredients, loadingCount });
  }

  handleExit() {
    const { exit, farmId } = this.props;

    exit(farmId);
  }

  passValidate(name, coefficient) {
    if (name !== '' && coefficient > 0) {
      return true;
    }

    return false;
  }

  render() {
    const { loadingCount, ingredients, groups, permission } = this.props;
    const { name, coefficient, autoLoad, planned } = this.state;

    const valid = this.passValidate(name, coefficient);

    console.log('SchedulePage | render | props, permission ', this.props, permission);

    return permission && permission.change ? (
      <div className='schedule-page-container'>
        <div className='page-title'>
          <h1>
            { <FormattedMessage {...messages.title} />}
          </h1>
        </div>
        <Paper zDepth={1} className='ration-page__head'>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <span className='input__label'>
                { <FormattedMessage {...messages.form.enterName.title} />}
              </span>
              <TextField
                name='name'
                className='input'
                hintText={<FormattedMessage {...messages.form.enterName.hint} />}
                value={name || ''}
                onChange={::this.handleNameInput}
              />
              <br/>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={9} lg={6}>
              <RaisedButton
                className={`ration-page-button ${valid ? 'button-add' : ''}`}
                label={<FormattedMessage {...messages.button.save} />}
                onTouchTap={::this.handleSaveSchedule}
                disabled={!valid}
              />
              <RaisedButton
                className={'ration-page-button'}
                label={<FormattedMessage {...messages.button.overview} />}
                onTouchTap={::this.handleExit}
              />
              <br/>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col sm={8} md={4} lg={3}>
              <span className='input__label'>
                {<FormattedMessage {...messages.form.coefficient} />}
              </span>
              <br/>
              <TextField
                name='loading_percent'
                className='input'
                hintText='100'
                value={coefficient}
                onChange={::this.handleLoadingPercentInput}
                type='number'
              />
              <br/>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col sm={8} md={4} lg={3}>
              <Toggle
                label={<FormattedMessage {...messages.form.automaticDischarge} />}
                toggled={autoLoad}
                onToggle={::this.handleLoadingAuto}
              />
              <br/>
              <span className='input__label'>
                {<FormattedMessage {...messages.form.planDistribution} />}
              </span>
              <br/>
              <DatePicker value={planned} onChange={::this.handleChangePlanned}/>
              <br/>
            </Col>
          </Row>
        </Paper>
        <Paper className='schedule-page__loadings'>
          <TableScheduleRationLoadingCounts tableData={[ loadingCount ]}/>
          <br/>
        </Paper>
        <Paper className='schedule-page__ingredients'>
          <TableScheduleIngredients tableData={ingredients}/>
        </Paper>
        <Paper className='schedule-page__groups'>
          <TableScheduleGroups tableData={groups} />
        </Paper>
      </div>
    ) : null;
  }
}

SchedulePage.propTypes = propTypes;
SchedulePage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(SchedulePage);
