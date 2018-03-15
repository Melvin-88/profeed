/**
*
* DeliveryPage
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TableDelivery from 'client/components/tables/TableDelivery';
import RaisedButton from 'material-ui/RaisedButton';
import DialogDeliveryAdd from 'client/components/dialogs/deliveries/DialogDeliveryAdd';
import DialogDeliveryEdit from 'client/components/dialogs/deliveries/DialogDeliveryEdit';
import DialogDeliveryRemove from 'client/components/dialogs/deliveries/DialogDeliveryRemove';

const propTypes = {
  permission : PropTypes.object,
  farmId : PropTypes.string,
  delivers : PropTypes.array,
  getDelivers : PropTypes.func,
  ingredients: PropTypes.array,
  getIngredients: PropTypes.func,
  showDeliveryAddDialog : PropTypes.func,
  showDeliveryEditDialog : PropTypes.func,
  showDeliveryRemoveDialog : PropTypes.func
};
const defaultProps = { };

class DeliveryPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedDelivery : null
    };
  }

  componentDidMount() {
    const { getDelivers, farmId, getIngredients } = this.props;

    getDelivers(farmId);
    getIngredients(farmId);
  }

  componentWillReceiveProps(nextProps) {
    const { delivers } = this.props;
    const { delivers : newiDelivers } = nextProps;

    if (delivers && delivers !== newiDelivers) {
      this.setState({ checkedDelivery : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedDelivery : this.state.checkedDelivery === row ? null : row
    });
  }

  // Handlers for click
  handleAddDeliveryModal() {
    const { showDeliveryAddDialog } = this.props;

    showDeliveryAddDialog();
  }
  handleEditDeliveryModal() {
    const { showDeliveryEditDialog, delivers } = this.props;
    const { checkedDelivery } = this.state;
    const delivery = delivers.find((item) => item.id === checkedDelivery);

    showDeliveryEditDialog(delivery);
  }
  handleRemoveDeliveryModal() {
    const { showDeliveryRemoveDialog, delivers } = this.props;
    const { checkedDelivery } = this.state;
    const delivery = delivers.find((item) => item.id === checkedDelivery);

    showDeliveryRemoveDialog(delivery);
  }
  render() {
    const { delivers, permission } = this.props;
    const { checkedDelivery } = this.state;

    return permission && permission.view ? (
      <div className='groups-page-container'>
        <div className='page-title'>
          <h1>
            {<FormattedMessage {...messages.title} />}
          </h1>
        </div>
        {permission.add ? (
          <RaisedButton
            className='page-button button-add'
            label={<FormattedMessage {...messages.button.add} />}
            onTouchTap={::this.handleAddDeliveryModal}
          />) : null}
        {permission.change ? (
          <RaisedButton
            className={`page-button ${checkedDelivery ? 'button-edit' : ''}`}
            label={<FormattedMessage {...messages.button.edit} />}
            onTouchTap={::this.handleEditDeliveryModal}
            disabled={!checkedDelivery}
          />) : null}
        {permission.delete ? (
          <RaisedButton
            className={`page-button ${checkedDelivery ? 'button-remove' : ''}`}
            label={<FormattedMessage {...messages.button.remove} />}
            onTouchTap={::this.handleRemoveDeliveryModal}
            disabled={!checkedDelivery}
          />) : null}
        <br/>
        <TableDelivery tableData={delivers} onChangeCheckedRow={::this.handleChangeCheckedRow} checked={checkedDelivery}
          canChecked={permission.change || permission.delete}
        />
        <br/>
        {permission.add ? <DialogDeliveryAdd /> : null}
        {permission.change ? <DialogDeliveryEdit /> : null}
        {permission.delete ? <DialogDeliveryRemove/> : null}
      </div>
    ) : null;
  }
}

DeliveryPage.propTypes = propTypes;
DeliveryPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(DeliveryPage);
