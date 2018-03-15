/**
*
* RationPage
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Row, Col } from 'react-flexbox-grid/lib';
import TableRationLoadingCounts from 'client/components/tables/TableRationLoadingCounts';
import TableRationIngredients from 'client/components/tables/TableRationIngredients';
import TableRationGroups from 'client/components/tables/TableRationGroups';
import { checkIntInput } from 'helpers/validators';
import { splitUpperByUnderscore } from 'helpers/textModificators';
import { BORDERS_PERCENT_COEFFICIENT, PAGE_TYPE } from 'helpers/constants';

import './style.css';

const propTypes = {
  permission : PropTypes.object,
  farmId : PropTypes.string,
  ration : PropTypes.object,
  getRation : PropTypes.func,
  loadings : PropTypes.array,
  changeCoefficient : PropTypes.func,
  rationId : PropTypes.string,
  saveRation : PropTypes.func,
  resetRation : PropTypes.func,
  exit : PropTypes.func
};
const defaultProps = { };
const initState = {
  name : null,
  fullName : null,
  autoLoad : true,
  autoSchedule : false
};

class RationPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initState };
  }

  componentDidMount() {
    const { getRation, rationId, resetRation } = this.props;

    if (rationId) {
      this.type = PAGE_TYPE.EDIT;
      getRation(rationId);
    } else {
      this.type = PAGE_TYPE.ADD;
      resetRation();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.name === null) {
      let newState = {};

      if (this.type === PAGE_TYPE.EDIT) {
        newState = {
          name : nextProps.ration.name,
          fullName : nextProps.ration.full_name,
          autoLoad : nextProps.ration.auto_load,
          autoSchedule : nextProps.ration.auto_schedule,
          coefficient : nextProps.ration.coefficient
        };
      } else if (this.type === PAGE_TYPE.ADD) {
        newState = {
          name : '',
          fullName : '',
          autoLoad : true,
          autoSchedule : false,
          coefficient : 100
        };
      }

      this.setState({ ...newState });
    }
  }

  // Handlers for click
  handleNameInput(e, v) {
    this.setState({
      name : v
    });
  }

  handleFullNameInput(e, v) {
    this.setState({
      fullName : v
    });
  }

  handleSaveRation() {
    const { saveRation, farmId } = this.props;

    let ration = this.props.ration;

    if (!ration.farm) {
      ration.farm = farmId;
    }

    ration = this.prepareRation(ration, { ...this.state });

    // console.log('RationPage | handleSaveRation | ration : ', ration);

    saveRation(ration, this.type);
  }

  handleExit() {
    const { exit, farmId } = this.props;

    exit(farmId);
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

  handleScheduleAuto() {
    this.setState({
      autoSchedule : !this.state.autoSchedule
    });
  }

  getTypePermission() {
    if (this.type === PAGE_TYPE.EDIT) {
      return 'change';
    } else if (this.type === PAGE_TYPE.ADD) {
      return 'add';
    }

    return;
  }

  passValidate(name, fullName, coefficient) {
    // console.log('RationPage | passValidate | name, fullName, coefficient ', name, fullName, coefficient);
    if (name !== '' && fullName !== '' && coefficient > 0) {
      return true;
    }

    return false;
  }

  prepareRation(ration, state) {
    const newRation = { ...ration };

    Object.keys(state).forEach((item) => {
      const newPropName = splitUpperByUnderscore(item);

      newRation[newPropName] = state[item];
    });

    return newRation;
  }

  render() {
    const { ration, permission } = this.props;
    const valid = this.passValidate(this.state.name, this.state.fullName, ration.coefficient);
    const type = this.getTypePermission();
    // console.log('RationPage | render | ration ', ration);

    return permission && !!type && permission[type] ? (
      <div className='ration-page-container'>
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
                value={this.state.name || ''}
                onChange={::this.handleNameInput}
              />
              <br/>
              <span className='input__label'>
                {<FormattedMessage {...messages.form.enterTheFullNameOfTheDiet.title} />}
              </span>
              <TextField
                name='full_name'
                className='input'
                hintText={<FormattedMessage {...messages.form.enterTheFullNameOfTheDiet.hint} />}
                value={this.state.fullName || ''}
                onChange={::this.handleFullNameInput}
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
                onTouchTap={::this.handleSaveRation}
                disabled={!valid}
              />
              <RaisedButton
                className={'ration-page-button button-remove'}
                label={<FormattedMessage {...messages.button.cancel} />}
                onTouchTap={::this.handleExit}
              />
              <RaisedButton
                className={'ration-page-button'}
                label={<FormattedMessage {...messages.button.back} />}
                onTouchTap={::this.handleExit}
              />
              <br/>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col sm={8} md={4} lg={3}>
              <span className='input__label'>
                {<FormattedMessage {...messages.form.coefficientOfDischarge} />}
              </span>
              <br/>
              <TextField
                name='loading_percent'
                className='input'
                hintText='100'
                value={this.state.coefficient}
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
                toggled={this.state.autoLoad}
                onToggle={::this.handleLoadingAuto}
              />
              <Toggle
                label={<FormattedMessage {...messages.form.automaticPlanning} />}
                toggled={this.state.autoSchedule}
                onToggle={::this.handleScheduleAuto}
              />
              <br/>
              <br/>
            </Col>
          </Row>
        </Paper>
        <Paper className='ration-page__loadings'>
          <TableRationLoadingCounts />
          <br/>
        </Paper>
        <Paper className='ration-page__ingredients'>
          <TableRationIngredients />
        </Paper>
        <Paper className='ration-page__groups'>
          <TableRationGroups />
        </Paper>
      </div>
    ) : null;
  }
}

RationPage.propTypes = propTypes;
RationPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(RationPage);
