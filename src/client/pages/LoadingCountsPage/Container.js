/**
*
* LoadingCountsPage
*
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import TableLoadingCounts from 'client/components/tables/TableLoadingCounts';
import DialogLoadingCountsAdd from 'client/components/dialogs/loadingcounts/DialogLoadingCountsAdd';
import DialogLoadingCountsEdit from 'client/components/dialogs/loadingcounts/DialogLoadingCountsEdit';
import DialogLoadingCountsRemove from 'client/components/dialogs/loadingcounts/DialogLoadingCountsRemove';

const propTypes = {
  permission : PropTypes.object,
  farmId : PropTypes.string,
  loadingcounts : PropTypes.array,
  getLoadingCounts : PropTypes.func,
  showLoadingCountsAddDialog : PropTypes.func,
  showLoadingCountsEditDialog : PropTypes.func,
  showLoadingCountsRemoveDialog : PropTypes.func
};
const defaultProps = { };

class LoadingCountsPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedLoadingCount : null
    };
  }

  componentDidMount() {
    const { getLoadingCounts, farmId } = this.props;

    getLoadingCounts(farmId);
  }

  componentWillReceiveProps(nextProps) {
    const { loadingcounts } = this.props;
    const { loadingcounts : newLoadingCounts } = nextProps;

    if (loadingcounts && loadingcounts !== newLoadingCounts) {
      this.setState({ checkedLoadingCount : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedLoadingCount : this.state.checkedLoadingCount === row ? null : row
    });
  }
// Handlers for click
  handleAddLoadingCountsModal() {
    const { showLoadingCountsAddDialog } = this.props;

    showLoadingCountsAddDialog();
  }

  handleEditLoadingCountsModal() {
    const { showLoadingCountsEditDialog, loadingcounts } = this.props;
    const { checkedLoadingCount } = this.state;
    const loadingcount = loadingcounts.find((item) => item.id === checkedLoadingCount);

    showLoadingCountsEditDialog(loadingcount);
  }

  handleRemoveLoadingCountsModal() {
    const { showLoadingCountsRemoveDialog, loadingcounts } = this.props;
    const { checkedLoadingCount } = this.state;
    const loadingcount = loadingcounts.find((item) => item.id === checkedLoadingCount);

    showLoadingCountsRemoveDialog(loadingcount);
  }

  render() {
    const { loadingcounts, permission } = this.props;
    const { checkedLoadingCount } = this.state;

    return permission && permission.view ? (
      <div className='loading-counts-page-container'>
        <div className='page-title'>
          <h1>{ <FormattedMessage {...messages.title} /> }</h1>
        </div>
        { permission.add ? (
          <RaisedButton
            className='page-button button-add'
            label={<FormattedMessage {...messages.button.add} />} primary
            onTouchTap={::this.handleAddLoadingCountsModal}
          />) : null }
        { permission.change ? (
          <RaisedButton
            className={`page-button ${checkedLoadingCount ? 'button-edit' : ''}`}
            label={<FormattedMessage {...messages.button.edit} />}
            onTouchTap={::this.handleEditLoadingCountsModal}
            disabled={!checkedLoadingCount}
          />) : null }
        { permission.delete ? (
          <RaisedButton
            className={`page-button ${checkedLoadingCount ? 'button-remove' : ''}`}
            label={<FormattedMessage {...messages.button.remove} />}
            onTouchTap={::this.handleRemoveLoadingCountsModal}
            disabled={!checkedLoadingCount}
          />) : null }
        <br />
        <TableLoadingCounts tableData={loadingcounts} onChangeCheckedRow={::this.handleChangeCheckedRow}
          checked={checkedLoadingCount} canChecked={permission.change || permission.delete}
        />
        <br/>
        { permission.add ? <DialogLoadingCountsAdd /> : null}
        { permission.change ? <DialogLoadingCountsEdit /> : null}
        { permission.delete ? <DialogLoadingCountsRemove /> : null}
      </div>
    ) : null;
  }
}

LoadingCountsPage.propTypes = propTypes;
LoadingCountsPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(LoadingCountsPage);
