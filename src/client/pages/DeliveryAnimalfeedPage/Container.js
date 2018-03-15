/**
*
* DeliveryAnimalfeedPage
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
import TableDeliveryAnimalfeed from 'client/components/tables/TableDeliveryAnimalfeed';
import DialogDeliveryAnimalfeedAdd from 'client/components/dialogs/deliveryanimalfeed/DialogDeliveryAnimalfeedAdd';
import DialogDeliveryAnimalfeedEdit from 'client/components/dialogs/deliveryanimalfeed/DialogDeliveryAnimalfeedEdit';
import DialogDeliveryAnimalfeedRemove from 'client/components/dialogs/deliveryanimalfeed/DialogDeliveryAnimalfeedRemove';

const propTypes = {
  farmId : PropTypes.string,
  deliveryanimalfeed : PropTypes.array,
  getDeliveryAnimalfeed : PropTypes.func,
  getIngredients : PropTypes.func,
  showDeliveryAnimalfeedAddDialog : PropTypes.func,
  showDeliveryAnimalfeedEditDialog : PropTypes.func,
  showDeliveryAnimalfeedRemoveDialog : PropTypes.func,
  permission : PropTypes.object
};
const defaultProps = { };

class DeliveryAnimalfeedPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedDeliveryAnimalfeed : null
    };
  }

  componentDidMount() {
    const { getDeliveryAnimalfeed, getIngredients, farmId } = this.props;

    getDeliveryAnimalfeed(farmId);
    getIngredients(farmId);
  }

  componentWillReceiveProps(nextProps) {
    const { deliveryanimalfeed } = this.props;
    const { deliveryanimalfeed : newDeliveryAnimalfeed } = nextProps;

    if (deliveryanimalfeed && deliveryanimalfeed !== newDeliveryAnimalfeed) {
      this.setState({ checkedDeliveryAnimalfeed : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedDeliveryAnimalfeed : this.state.checkedDeliveryAnimalfeed === row ? null : row
    });
  }
// Handlers for click
  handleAddDeliveryAnimalfeedModal() {
    const { showDeliveryAnimalfeedAddDialog } = this.props;

    showDeliveryAnimalfeedAddDialog();
  }

  handleEditDeliveryAnimalfeedModal() {
    const { showDeliveryAnimalfeedEditDialog, deliveryanimalfeed } = this.props;
    const { checkedDeliveryAnimalfeed } = this.state;
    const data = deliveryanimalfeed.find((item) => item.id === checkedDeliveryAnimalfeed);

    showDeliveryAnimalfeedEditDialog(data);
  }

  handleRemoveDeliveryAnimalfeedModal() {
    const { showDeliveryAnimalfeedRemoveDialog, deliveryanimalfeed } = this.props;
    const { checkedDeliveryAnimalfeed } = this.state;
    const data = deliveryanimalfeed.find((item) => item.id === checkedDeliveryAnimalfeed);

    showDeliveryAnimalfeedRemoveDialog(data);
  }

  render() {
    const { deliveryanimalfeed, permission } = this.props;
    const { checkedDeliveryAnimalfeed } = this.state;

    return permission && permission.view ? (
      <div className='delivery-animalfeed-page-container'>
        <div className='page-title'>
          <h1>
            <FormattedMessage {...messages.title} />
          </h1>
        </div>
        {permission.add ? <RaisedButton className='page-button button-add' label={'Додати '} primary
          onTouchTap={::this.handleAddDeliveryAnimalfeedModal}
                          /> : null}
        {permission.change ? <RaisedButton
          className={`page-button ${checkedDeliveryAnimalfeed ? 'button-edit' : ''}`}
          label={'Редагувати '} onTouchTap={::this.handleEditDeliveryAnimalfeedModal} disabled={!checkedDeliveryAnimalfeed}
                             /> : null}
        {permission.delete ? <RaisedButton
          className={`page-button ${checkedDeliveryAnimalfeed ? 'button-remove' : ''}`}
          label={'Видалити '} onTouchTap={::this.handleRemoveDeliveryAnimalfeedModal} disabled={!checkedDeliveryAnimalfeed}
                             /> : null}
        <br />
        <TableDeliveryAnimalfeed tableData={deliveryanimalfeed} onChangeCheckedRow={::this.handleChangeCheckedRow} />
        <br/>
        {permission.add ? <DialogDeliveryAnimalfeedAdd /> : null}
        {permission.change ? <DialogDeliveryAnimalfeedEdit /> : null}
        {permission.delete ? <DialogDeliveryAnimalfeedRemove /> : null}
      </div>
    ) : null;
  }
}

DeliveryAnimalfeedPage.propTypes = propTypes;
DeliveryAnimalfeedPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(DeliveryAnimalfeedPage);
