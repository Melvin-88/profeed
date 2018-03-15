/**
*
* WorksheetsPage
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
import TableWorksheets from 'client/components/tables/TableWorksheets';
import DialogWorksheetsEdit from 'client/components/dialogs/worksheets/DialogWorksheetsEdit';
import DialogWorksheetsRemove from 'client/components/dialogs/worksheets/DialogWorksheetsRemove';

const propTypes = {
  farmId : PropTypes.string,
  worksheets : PropTypes.array,
  getWorksheets : PropTypes.func,
  showWorksheetsAddDialog : PropTypes.func,
  showWorksheetsEditDialog : PropTypes.func,
  showWorksheetsRemoveDialog : PropTypes.func,
  permission : PropTypes.object
};
const defaultProps = { };

class WorksheetsPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedWorksheets : null
    };
  }

  componentDidMount() {
    const { getWorksheets, farmId } = this.props;

    getWorksheets(farmId);
  }

  componentWillReceiveProps(nextProps) {
    const { worksheets } = this.props;
    const { worksheets : newWorksheets } = nextProps;

    if (worksheets && worksheets !== newWorksheets) {
      this.setState({ checkedWorksheets : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedWorksheets : this.state.checkedWorksheets === row ? null : row
    });
  }
// Handlers for click
  handleAddWorksheetsModal() {
    const { showWorksheetsAddDialog } = this.props;

    showWorksheetsAddDialog();
  }

  handleEditWorksheetsModal() {
    const { showWorksheetsEditDialog, worksheets } = this.props;
    const { checkedWorksheets } = this.state;
    const data = worksheets.find((item) => item.id === checkedWorksheets);

    showWorksheetsEditDialog(data);
  }

  handleRemoveWorksheetsModal() {
    const { showWorksheetsRemoveDialog, worksheets } = this.props;
    const { checkedWorksheets } = this.state;
    const data = worksheets.find((item) => item.id === checkedWorksheets);

    showWorksheetsRemoveDialog(data);
  }

  render() {
    const { worksheets, permission } = this.props;
    const { checkedWorksheets } = this.state;

    return permission && permission.view ? (
      <div className='worksheets-page-container'>
        <div className='page-title'>
          <h1>
            <FormattedMessage {...messages.title} />
          </h1>
        </div>
        {permission.add ? <RaisedButton className='page-button button-add'
          label={<FormattedMessage {...messages.button.add} />} primary
          onTouchTap={::this.handleAddWorksheetsModal}
                          /> : null}
        {permission.change ? <RaisedButton className={`page-button ${checkedWorksheets ? 'button-edit' : ''}`}
          label={<FormattedMessage {...messages.button.edit} />} onTouchTap={::this.handleEditWorksheetsModal}
          disabled={!checkedWorksheets}
                             /> : null}
        {permission.delete ? <RaisedButton className={`page-button ${checkedWorksheets ? 'button-remove' : ''}`}
          label={<FormattedMessage {...messages.button.remove} />} onTouchTap={::this.handleRemoveWorksheetsModal}
          disabled={!checkedWorksheets}
                             /> : null}
        <br />
        <TableWorksheets tableData={worksheets} onChangeCheckedRow={::this.handleChangeCheckedRow}
          canChecked={permission.change || permission.delete} checked={checkedWorksheets}
        />
        <br/>
        {permission.add ? <DialogWorksheetsEdit /> : null}
        {permission.change ? <DialogWorksheetsEdit /> : null}
        {permission.delete ? <DialogWorksheetsRemove /> : null}
      </div>
    ) : null;
  }
}

WorksheetsPage.propTypes = propTypes;
WorksheetsPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(WorksheetsPage);
