/*
* CustomersPage Actions
*
* This contains all the text for the CustomersPage component.
*/
import { bindActionCreators } from 'redux';

export const CUSTOMERS_GET = 'CustomersPage/CUSTOMERS_GET';
export const CUSTOMERS_SET = 'CustomersPage/CUSTOMERS_SET';
export const CUSTOMERS_CALL_SHOW_ADD_DIALOG = 'CustomersPage/CUSTOMERS_CALL_SHOW_ADD_DIALOG';
export const CUSTOMERS_CALL_SHOW_EDIT_DIALOG = 'CustomersPage/CUSTOMERS_CALL_SHOW_EDIT_DIALOG';
export const CUSTOMERS_CALL_SHOW_REMOVE_DIALOG = 'CustomersPage/CUSTOMERS_CALL_SHOW_REMOVE_DIALOG';
// import actionfrom other
import { actions as actionUserGroups } from 'client/pages/UserGroupsPage';
import { actions as actionFarms } from 'client/pages/FarmsPage';

function getCustomers() {
  return { type : CUSTOMERS_GET };
}
/**
 *
 * @param customers
 * @return {{type: string, payload: {customers: *}}}
 */
function setCustomers(customers) {
  return { type : CUSTOMERS_SET, payload : { customers } };
}

function showCustomerAddDialog() {
  return { type : CUSTOMERS_CALL_SHOW_ADD_DIALOG };
}
/**
 *
 * @param delivery
 * @return {{type: string, payload: {delivery: *}}}
 */
function showCustomerEditDialog(customer) {
  return { type : CUSTOMERS_CALL_SHOW_EDIT_DIALOG, payload : { customer } };
}
/**
 *
 * @param delivery
 * @return {{type: string, payload: {delivery: *}}}
 */
function showCustomerRemoveDialog(customer) {
  return { type : CUSTOMERS_CALL_SHOW_REMOVE_DIALOG, payload : { customer } };
}

function getFarms() {
  return actionFarms.getFarms();
}

function getUserGroups() {
  return actionUserGroups.getUserGroups();
}

function containerActions(dispatch) {
  return bindActionCreators({
    getCustomers,
    setCustomers,
    showCustomerAddDialog,
    showCustomerEditDialog,
    showCustomerRemoveDialog,
    getFarms,
    getUserGroups
  }, dispatch);
}

export {
  containerActions,
  getCustomers,
  setCustomers,
  showCustomerAddDialog,
  showCustomerEditDialog,
  showCustomerRemoveDialog
};
