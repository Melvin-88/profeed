/**
*
* CustomerPage
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TableCustomers from 'client/components/tables/TableCustomers';
import RaisedButton from 'material-ui/RaisedButton';
import DialogCustomerAdd from 'client/components/dialogs/customers/DialogCustomerAdd';
import DialogCustomerEdit from 'client/components/dialogs/customers/DialogCustomerEdit';
import DialogCustomerRemove from 'client/components/dialogs/customers/DialogCustomerRemove';

const propTypes = {
  permission : PropTypes.object,
  getCustomers: PropTypes.func,
  customers: PropTypes.array,
  showCustomerAddDialog: PropTypes.func,
  showCustomerEditDialog : PropTypes.func,
  showCustomerRemoveDialog : PropTypes.func,
  getFarms : PropTypes.func,
  getUserGroups : PropTypes.func,
  farms : PropTypes.array,
  userGroups : PropTypes.array
};
const defaultProps = { };

class CustomerPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedCustomer : null
    };
  }

  componentDidMount() {
    const { getCustomers, getFarms, getUserGroups } = this.props;

    getCustomers();
    getFarms();
    getUserGroups();
  }

  componentWillReceiveProps(nextProps) {
    const { customers } = this.props;
    const { customers : newCustomers } = nextProps;

    if (customers && customers !== newCustomers) {
      this.setState({ checkedCustomer : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedCustomer : this.state.checkedCustomer === row ? null : row
    });
  }

  // Handlers for click
  handleAddDeliveryModal() {
    const { showCustomerAddDialog } = this.props;

    showCustomerAddDialog();
  }

  handleEditDeliveryModal() {
    const { showCustomerEditDialog, customers } = this.props;
    const { checkedCustomer } = this.state;
    const customer = customers.find((item) => item.id === checkedCustomer);

    showCustomerEditDialog(customer);
  }

  handleRemoveCustomersModal() {
    const { showCustomerRemoveDialog, customers } = this.props;
    const { checkedCustomer } = this.state;
    const customer = customers.find((item) => item.id === checkedCustomer);

    showCustomerRemoveDialog(customer);
  }

  render() {
    const { customers, farms, userGroups, permission } = this.props;
    const { checkedCustomer } = this.state;

    return permission && permission.view ? (
      <div className='customers-page-container'>
        <div className='page-title'>
          <h1>
            {<FormattedMessage {...messages.title} />}
          </h1>
        </div>
        {permission.add ? (<RaisedButton
          className='page-button button-add'
          label={<FormattedMessage {...messages.button.add} />}
          onTouchTap={::this.handleAddDeliveryModal}
                           />) : null}
        {permission.change ? (<RaisedButton
          className={`page-button ${!!checkedCustomer ? 'button-edit' : ''}`}
          label={<FormattedMessage {...messages.button.edit} />}
          onTouchTap={::this.handleEditDeliveryModal}
          disabled={!checkedCustomer}
                              />) : null}
        {permission.delete ? (<RaisedButton
          className={`page-button ${!!checkedCustomer ? 'button-remove' : ''}`}
          label={<FormattedMessage {...messages.button.remove} />}
          onTouchTap={::this.handleRemoveCustomersModal}
          disabled={!checkedCustomer}
                              />) : null}
        <br/>
        <TableCustomers tableData={customers} onChangeCheckedRow={::this.handleChangeCheckedRow} checked={checkedCustomer}
          canChecked={permission.change || permission.delete}
        />
        <br/>
        {permission.add ? <DialogCustomerAdd farms={farms} userGroups={userGroups}/> : null}
        {permission.change ? <DialogCustomerEdit farms={farms} userGroups={userGroups}/> : null}
        {permission.delete ? <DialogCustomerRemove /> : null}
      </div>
    ) : null;
  }
}

CustomerPage.propTypes = propTypes;
CustomerPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(CustomerPage);
