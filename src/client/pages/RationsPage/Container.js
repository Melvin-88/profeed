/**
*
* RationsPage
*
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TableRations from 'client/components/tables/TableRations';
import DialogRationsRemove from 'client/components/dialogs/rations/DialogRationsRemove';
import { PAGE_TYPE } from 'helpers/constants';

const propTypes = {
  permission : PropTypes.object,
  farmId : PropTypes.string,
  rations : PropTypes.array,
  getRations : PropTypes.func,
  showRationsAddDialog : PropTypes.func,
  showRationsEditDialog : PropTypes.func,
  showRationsRemoveDialog : PropTypes.func,
  goTo : PropTypes.func
};
const defaultProps = { };

class RationsPage extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      checkedRation : null
    };
  }

  componentDidMount() {
    const { getRations, farmId } = this.props;

    getRations(farmId);
  }


  componentWillReceiveProps(nextProps) {
    const { rations } = this.props;
    const { rations : newRations } = nextProps;

    if (rations && rations !== newRations) {
      this.setState({ checkedRation : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedRation : this.state.checkedRation === row ? null : row
    });
  }

// Handlers for click
  handleAddRationsPage() {
    const { goTo, farmId } = this.props;

    goTo(PAGE_TYPE.ADD, farmId);
  }

  handleEditRationsPage() {
    const { goTo, farmId } = this.props;

    goTo(PAGE_TYPE.EDIT, farmId, this.state.checkedRation);
  }

  handleRemoveRationsModal() {
    const { showRationsRemoveDialog, rations } = this.props;
    const { checkedRation } = this.state;
    const ration = rations.find((item) => item.id === checkedRation);

    showRationsRemoveDialog(ration);
  }

  render() {
    const { rations, permission } = this.props;
    const { checkedRation } = this.state;

    console.log('RATIONS: ', rations);

    return permission && permission.view ? (
      <div className='rations-page-container'>
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
            onTouchTap={::this.handleAddRationsPage}
          />) : null}
        {permission.change ? (
          <RaisedButton
            className={`page-button ${checkedRation ? 'button-edit' : ''}`}
            label={<FormattedMessage {...messages.button.edit} />}
            onTouchTap={::this.handleEditRationsPage}
            disabled={!checkedRation}
          />) : null}
        {permission.delete ? (
          <RaisedButton
            className={`page-button ${checkedRation ? 'button-remove' : ''}`}
            label={<FormattedMessage {...messages.button.remove} />}
            onTouchTap={::this.handleRemoveRationsModal}
            disabled={!checkedRation}
          />) : null}
        <br />
        <TableRations tableData={rations} onChangeCheckedRow={::this.handleChangeCheckedRow} checked={checkedRation}
          canChecked={permission.change || permission.delete}
        />
        <br/>
        {permission.delete ? <DialogRationsRemove /> : null}
      </div>
    ) : null;
  }
}

RationsPage.propTypes = propTypes;
RationsPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(RationsPage);
