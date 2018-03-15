/**
*
* SchedulesPage
*
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { Tabs, Tab } from 'material-ui/Tabs';
import moment from 'moment';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TableSchedules from 'client/components/tables/TableSchedules';
import DialogRemove from 'client/components/dialogs/schedules/DialogSchedulesRemove';
import DialogAdd from 'client/components/dialogs/schedules/DialogSchedulesAdd';
import { elsSplittedByComa, showNumbers } from 'helpers/formatters';
import { STATUSES } from 'helpers/constants';

const propTypes = {
  permission : PropTypes.object,
  farmId : PropTypes.string,
  schedules : PropTypes.array,
  loadingCounts : PropTypes.array,
  getSchedules : PropTypes.func,
  getLoadings : PropTypes.func,
  showSchedulesAddDialog : PropTypes.func,
  showSchedulesRemoveDialog : PropTypes.func,
  goTo : PropTypes.func,
  planned : PropTypes.string
};
const defaultProps = { };

class SchedulesPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedSchedule : null,
      checkedLoading : null
    };
  }

  componentDidMount() {
    const { getSchedules, getLoadings, farmId, planned } = this.props;

    getLoadings(farmId);
    getSchedules(farmId, planned);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.checkedLoading) {
      this.setState({
        checkedLoading : nextProps.loadingCounts[0] && nextProps.loadingCounts[0].id
      });
    }

    const { schedules } = this.props;
    const { schedules : newSchedules } = nextProps;

    if (schedules && schedules !== newSchedules) {
      this.setState({ checkedSchedule : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedSchedule : this.state.checkedSchedule === row ? null : row
    });
  }

  handleChangeDate(e, date) {
    const { getSchedules, farmId } = this.props;

    getSchedules(farmId, moment(date).format('YYYY-MM-DD'));
  }
// Handlers for click
  handleAddModal() {
    const { showSchedulesAddDialog } = this.props;

    showSchedulesAddDialog();
  }

  handleEditSchedulesPage() {
    const { goTo, farmId } = this.props;
    const { checkedSchedule } = this.state;

    console.log('Schedules Edit ', checkedSchedule, farmId);
    goTo(farmId, checkedSchedule);
  }

  handleRemoveModal() {
    const { showSchedulesRemoveDialog, schedules } = this.props;
    const { checkedSchedule } = this.state;
    const schedule = schedules.find((item) => item.id === checkedSchedule);

    showSchedulesRemoveDialog(schedule);
  }

  /**
   *
   * @param checkedLoading
   */
  handleTabChange(checkedLoading) {
    this.setState({
      checkedLoading,
      checkedSchedule : null
    });
  }

  /**
   *
   * @param schedules - all schedules for filter
   * @param loadingId - loadingcount id
   */
  filteredSchedulesByLoading(schedules, loadingId) {
    return schedules.filter((schedule) => schedule.schedule_loading_count.id === loadingId);
  }

  /**
   *
   * @param schedule
   * @return {{id, planned: *, status: *, ration, count: *, weight: *, weightReal: *, weightDifference: string,
   * dryWeight: *, dryWeightReal: *, dryWeightDifference: string, groups: *}}
   */
  prepareScheduleForTable(schedule) {
    const planned = schedule.planned_on;
    const status = schedule.schedule_loading_count.status;
    const ration = schedule.name;
    const groupMultiProps = schedule.schedule_groups.reduce((prevState, current) => {
      const { count, groups, weight, weightReal, dryWeightRaw, dryWeightRealRaw } = prevState;
      const { name } = current;

      groups.push(name);

      return {
        count : count + current.animal_count,
        weight : weight + current.planned_weight,
        weightReal : current.fact_weight && weightReal ? current.fact_weight + weightReal : weightReal,
        dryWeightRaw : dryWeightRaw + current.planned_weight_dm,
        dryWeightRealRaw : current.fact_weight_dm && dryWeightRealRaw ? current.fact_weight_dm + dryWeightRealRaw
          : dryWeightRealRaw,
        groups
      };
    }, { count : 0, groups : [], weight : 0,  weightReal : null, dryWeightRaw : 0, dryWeightRealRaw : null });
    const { groups, count, weight,  weightReal, dryWeightRaw, dryWeightRealRaw } = groupMultiProps;
    const dryWeight = showNumbers(dryWeightRaw / count);
    const dryWeightReal = dryWeightRealRaw && showNumbers(dryWeightRealRaw / count);
    const weightDifference = weightReal ? showNumbers((weightReal - weight / weightReal) * 100) : '---';
    const dryWeightDifference = dryWeightReal ? showNumbers((dryWeightReal - dryWeight / dryWeightReal) * 100) : '---';

    return {
      id : schedule.id,
      planned,
      status : STATUSES[status],
      ration,
      count,
      weight : showNumbers(weight),
      weightReal : weightReal && showNumbers(weightReal),
      weightDifference,
      dryWeight,
      dryWeightReal,
      dryWeightDifference,
      groups : elsSplittedByComa(groups)
    };
  }

  /**
   *
   * @param schedules
   * @param loadingId
   */
  dataForTable(schedules, loadingId) {
    const filteredSchedules = this.filteredSchedulesByLoading(schedules, loadingId);
    const result = filteredSchedules.map(this.prepareScheduleForTable);

    return result;
  }

  render() {
    const { schedules, loadingCounts, planned, permission } = this.props;
    const { checkedSchedule, checkedLoading } = this.state;

    return permission && permission.view ? (
      <div className='schedules-page-container'>
        <div className='page-title'>
          <h1>
            { <FormattedMessage {...messages.title} />}
          </h1>
        </div>
        {permission.add ? (
          <RaisedButton
            className='page-button button-add'
            label={<FormattedMessage {...messages.button.add} />}
            primary
            onTouchTap={::this.handleAddModal}
          />) : null}
        {permission.change ? (
          <RaisedButton
            className={`page-button ${checkedSchedule ? 'button-edit' : ''}`}
            label={<FormattedMessage {...messages.button.edit} />}
            onTouchTap={::this.handleEditSchedulesPage}
            disabled={!checkedSchedule}
          />) : null}
        {permission.delete ? (
          <RaisedButton
            className={`page-button ${checkedSchedule ? 'button-remove' : ''}`}
            label={<FormattedMessage {...messages.button.remove} />}
            onTouchTap={::this.handleRemoveModal}
            disabled={!checkedSchedule}
          />) : null}
        <br/>
        <span>
          {<FormattedMessage {...messages.date} />}
        </span>
        <DatePicker value={new Date(planned)} onChange={::this.handleChangeDate}/>
        <br />
        <Tabs value={checkedLoading || 1} onChange={::this.handleTabChange}>
          {loadingCounts.map((item, i) => {
            return (<Tab key={i} label={item.name} value={item.id}>
              {item.id === checkedLoading ? <TableSchedules tableData={this.dataForTable(schedules, item.id)}
                onChangeCheckedRow ={::this.handleChangeCheckedRow} canChecked={permission.change || permission.delete}
                checked={checkedSchedule}
                                            /> : '' }
            </Tab>);
          })}
        </Tabs>
        <br/>
        {permission.add ? <DialogAdd /> : null}
        {permission.delete ? <DialogRemove /> : null}
      </div>
    ) : null;
  }
}

SchedulesPage.propTypes = propTypes;
SchedulesPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(SchedulesPage);
