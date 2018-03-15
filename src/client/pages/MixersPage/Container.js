/**
*
* MixersPage
*
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TableMixers from 'client/components/tables/TableMixers';
import DialogMixersAdd from 'client/components/dialogs/mixers/DialogMixersAdd';
import DialogMixersEdit from 'client/components/dialogs/mixers/DialogMixersEdit';
import DialogMixersRemove from 'client/components/dialogs/mixers/DialogMixersRemove';

const propTypes = {
  permission : PropTypes.object,
  mixers : PropTypes.array,
  farms : PropTypes.array,
  getMixers : PropTypes.func,
  getFarms : PropTypes.func,
  showMixersAddDialog : PropTypes.func,
  showMixersEditDialog : PropTypes.func,
  showMixersRemoveDialog : PropTypes.func
};
const defaultProps = { };

class MixersPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedMixer : null
    };
  }

  componentDidMount() {
    const { getMixers, getFarms } = this.props;

    getMixers();
    getFarms();
  }

  componentWillReceiveProps(nextProps) {
    const { mixers } = this.props;
    const { mixers : newMixers } = nextProps;

    if (mixers && mixers !== newMixers) {
      this.setState({ checkedMixer : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedMixer : this.state.checkedMixer === row ? null : row
    });
  }
// Handlers for click
  handleAddMixersModal() {
    const { showMixersAddDialog } = this.props;

    showMixersAddDialog();
  }

  handleEditMixersModal() {
    const { showMixersEditDialog, mixers } = this.props;
    const { checkedMixer } = this.state;
    const mixer = mixers.find((item) => item.id === checkedMixer);

    showMixersEditDialog(mixer);
  }

  handleRemoveMixersModal() {
    const { showMixersRemoveDialog, mixers } = this.props;
    const { checkedMixer } = this.state;
    const mixer = mixers.find((item) => item.id === checkedMixer);

    showMixersRemoveDialog(mixer);
  }

  render() {
    const { mixers, farms, permission } = this.props;
    const { checkedMixer } = this.state;

    return permission && permission.view ? (
      <div className='mixers-page-container'>
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
            onTouchTap={::this.handleAddMixersModal}
          />) : null}
        {permission.change ? (
          <RaisedButton
            className={`page-button ${checkedMixer ? 'button-edit' : ''}`}
            label={<FormattedMessage {...messages.button.edit} />}
            onTouchTap={::this.handleEditMixersModal}
            disabled={!checkedMixer}
          />) : null}
        {permission.delete ? (
          <RaisedButton
            className={`page-button ${checkedMixer ? 'button-remove' : ''}`}
            label={<FormattedMessage {...messages.button.remove} />}
            onTouchTap={::this.handleRemoveMixersModal}
            disabled={!checkedMixer}
          />) : null}
        <br />
        <TableMixers tableData={mixers} onChangeCheckedRow={::this.handleChangeCheckedRow}
          checked={checkedMixer} canChecked={permission.change || permission.delete}
        />
        <br/>
        {permission.add ? <DialogMixersAdd farms={farms}/> : null}
        {permission.change ? <DialogMixersEdit farms={farms}/> : null}
        {permission.delete ? <DialogMixersRemove /> : null}
      </div>
    ) : null;
  }
}

MixersPage.propTypes = propTypes;
MixersPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(MixersPage);
