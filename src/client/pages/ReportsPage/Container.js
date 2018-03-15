/**
*
* ReportsPage
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import TableReports from 'client/components/tables/TableUserReports';
import DialogReportsEdit from 'client/components/dialogs/reports/DialogReportsEdit';
// import DialogReportsRemove from 'client/components/dialogs/reports/DialogReportsRemove';*/

const propTypes = {
  farmId : PropTypes.string,
  reports : PropTypes.array,
  getUserReports : PropTypes.func,
  getMainReports : PropTypes.func,
  showReportsAddDialog : PropTypes.func,
  showReportsEditDialog : PropTypes.func,
  showReportsRemoveDialog : PropTypes.func,
  permission : PropTypes.object
};
const defaultProps = { };

class ReportsPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedReports : null
    };
  }

  componentDidMount() {
    const { getUserReports, farmId, getMainReports } = this.props;

    getUserReports(farmId);
    getMainReports();
  }

  componentWillReceiveProps(nextProps) {
    const { reports } = this.props;
    const { reports : newReports } = nextProps;

    if (reports && reports !== newReports) {
      this.setState({ checkedReports : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedReports : this.state.checkedReports === row ? null : row
    });
  }
// Handlers for click
  handleAddReportsModal() {
    const { showReportsAddDialog } = this.props;

    showReportsAddDialog();
  }

  handleEditReportsModal() {
    const { showReportsEditDialog, reports } = this.props;
    const { checkedReports } = this.state;
    const data = reports.find((item) => item.id === checkedReports);

    showReportsEditDialog(data);
  }

  handleRemoveReportsModal() {
    const { showReportsRemoveDialog, reports } = this.props;
    const { checkedReports } = this.state;
    const data = reports.find((item) => item.id === checkedReports);

    showReportsRemoveDialog(data);
  }

  render() {
    const { reports, permission } = this.props;
    const { checkedReports } = this.state;

    return permission && permission.view ? (
      <div className='reports-page-container'>
        <div className='page-title'>
          <h1>
            <FormattedMessage {...messages.title} />
          </h1>
        </div>
        {permission.add ? <RaisedButton className='page-button button-add'
          label={<FormattedMessage {...messages.button.add} />} primary
          onTouchTap={::this.handleAddReportsModal}
                          /> : null}
        {permission.change ? <RaisedButton className={`page-button ${checkedReports ? 'button-edit' : ''}`}
          label={<FormattedMessage {...messages.button.edit} />}
          onTouchTap={::this.handleEditReportsModal} disabled={!checkedReports}
                             /> : null}
        {permission.delete ? <RaisedButton className={`page-button ${checkedReports ? 'button-remove' : ''}`}
          label={<FormattedMessage {...messages.button.remove} />} onTouchTap={::this.handleRemoveReportsModal}
          disabled={!checkedReports}
                             /> : null}
        <br />
        <TableReports tableData={reports} onChangeCheckedRow={::this.handleChangeCheckedRow}
          canChecked={permission.change || permission.delete} checked={checkedReports}
        />
        <br/>
        {permission.change || permission.add ? <DialogReportsEdit /> : null}
        {/* {permission.delete ? <DialogReportsRemove /> : null}*/}
      </div>
    ) : null;
  }
}

ReportsPage.propTypes = propTypes;
ReportsPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(ReportsPage);
