/**
*
* TransfersPage
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import TableTransfer from 'client/components/tables/TableTransfers';
import DialogTransferAdd from 'client/components/dialogs/transfer/DialogTransferAdd';
import DialogTransferTypeAdd from 'client/components/dialogs/transfer/DialogTransferTypeAdd';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const propTypes = {
  permission : PropTypes.object,
  permissionAdditional : PropTypes.object,
  farmId : PropTypes.string,
  getTransfers : PropTypes.func,
  showTransferAddDialog : PropTypes.func,
  showTransferTypeAddDialog : PropTypes.func,
  transfers : PropTypes.array
};
const defaultProps = { };

class TransfersPage extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { getTransfers, farmId } = this.props;

    getTransfers(farmId);
  }

  handleAddTransferModal() {
    const { showTransferAddDialog } = this.props;

    showTransferAddDialog();
  }

  handleAddTransferTypeModal() {
    const { showTransferTypeAddDialog } = this.props;

    showTransferTypeAddDialog();
  }

  render() {
    const { transfers, permission, permissionAdditional } = this.props;

    return permission && permission.view ? (
      <div className='transfer-page'>
        <div className='page-title'>
          <h1>
            { <FormattedMessage {...messages.title} /> }
          </h1>
        </div>
        {permission.add ? (
          <RaisedButton
            className={'page-button button-add'}
            label={<FormattedMessage {...messages.button.addTransfer} />}
            onTouchTap={::this.handleAddTransferModal}
          />) : null}
        {permissionAdditional.add ? (
          <RaisedButton
            className={'page-button button-add'}
            label={<FormattedMessage {...messages.button.addTypeTransfer} />}
            onTouchTap={::this.handleAddTransferTypeModal}
          />) : null}
        <br/>
        <TableTransfer tableData={transfers} />
        <br/>
        {permission.add ? <DialogTransferAdd /> : null}
        {permissionAdditional.add ? <DialogTransferTypeAdd /> : null}
      </div>
    ) : null;
  }
}

TransfersPage.propTypes = propTypes;
TransfersPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(TransfersPage);
