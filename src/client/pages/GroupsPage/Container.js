/**
*
* GroupPage
*
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TableGroups from 'client/components/tables/TableGroups';
import DialogGroupsAdd from 'client/components/dialogs/groups/DialogGroupsAdd';
import DialogGroupsEdit from 'client/components/dialogs/groups/DialogGroupsEdit';
import DialogGroupsRemove from 'client/components/dialogs/groups/DialogGroupsRemove';

const propTypes = {
  permission : PropTypes.object,
  farmId : PropTypes.string,
  groups : PropTypes.array,
  getGroups : PropTypes.func,
  showGroupAddDialog : PropTypes.func,
  showGroupEditDialog : PropTypes.func,
  showGroupRemoveDialog : PropTypes.func
};
const defaultProps = { };

class GroupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedGroup : null
    };
  }

  componentDidMount() {
    const { getGroups, farmId } = this.props;

    getGroups(farmId);
  }

  componentWillReceiveProps(nextProps) {
    const { groups } = this.props;
    const { groups : newGroups } = nextProps;

    if (groups && groups !== newGroups) {
      this.setState({ checkedGroup : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedGroup : this.state.checkedGroup === row ? null : row
    });
  }
  // Handlers for click
  handleAddGroupModal() {
    const { showGroupAddDialog } = this.props;

    showGroupAddDialog();
  }

  handleEditGroupModal() {
    const { showGroupEditDialog, groups } = this.props;
    const { checkedGroup } = this.state;
    const group = groups.find((item) => item.id === checkedGroup);

    showGroupEditDialog(group);
  }

  handleRemoveGroupModal() {
    const { showGroupRemoveDialog, groups } = this.props;
    const { checkedGroup } = this.state;
    const group = groups.find((item) => item.id === checkedGroup);

    showGroupRemoveDialog(group);
  }

  render() {
    const { groups, permission } = this.props;
    const { checkedGroup } = this.state;

    return permission && permission.view ? (
      <div className='groups-page-container'>
        <div className='page-title'>
          <h1> { <FormattedMessage {...messages.title} />} </h1>
        </div>
        {permission.add ? (
          <RaisedButton
            className='page-button button-add'
            label={<FormattedMessage {...messages.button.add} />}
            primary
            onTouchTap={::this.handleAddGroupModal}
          />) : null}
        {permission.change ? (
          <RaisedButton
            className={`page-button ${checkedGroup ? 'button-edit' : ''}`}
            label={<FormattedMessage {...messages.button.edit} />}
            onTouchTap={::this.handleEditGroupModal}
            disabled={!checkedGroup}
          />) : null}
        {permission.delete ? (
          <RaisedButton
            className={`page-button ${checkedGroup ? 'button-remove' : ''}`}
            label={<FormattedMessage {...messages.button.remove} />}
            onTouchTap={::this.handleRemoveGroupModal}
            disabled={!checkedGroup}
          />) : null}
        <br/>
        <TableGroups tableData={groups} onChangeCheckedRow={::this.handleChangeCheckedRow} checked={checkedGroup}
          canChecked={permission.change || permission.delete}
        />
        <br/>
        {permission.add ? <DialogGroupsAdd /> : null}
        {permission.change ? <DialogGroupsEdit /> : null}
        {permission.delete ? <DialogGroupsRemove /> : null}
      </div>
    ) : null;
  }
}

GroupPage.propTypes = propTypes;
GroupPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(GroupPage);
