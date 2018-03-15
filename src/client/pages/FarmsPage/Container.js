/**
*
* FarmsPage
*
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import messages from './messages';
import TableFarms from 'client/components/tables/TableFarms';
import DialogFarmsAdd from 'client/components/dialogs/farms/DialogFarmsAdd';
import DialogFarmsEdit from 'client/components/dialogs/farms/DialogFarmsEdit';
import DialogFarmsRemove from 'client/components/dialogs/farms/DialogFarmsRemove';

const propTypes = {
  permission : PropTypes.object,
  farms : PropTypes.array,
  getFarms : PropTypes.func,
  showFarmsAddDialog : PropTypes.func,
  showFarmsRemoveDialog : PropTypes.func,
  showFarmsEditDialog : PropTypes.func,
  goToFarm : PropTypes.func,
  startUrl : PropTypes.object
};
const defaultProps = {
  farms : [],
  getFarms : () => {}
};

class FarmsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getFarms } = this.props;

    getFarms();
  }

  handleClickAddFarm() {
    const { showFarmsAddDialog } = this.props;

    showFarmsAddDialog();
  }

  handleEditFarm(farm) {
    const { showFarmsEditDialog } = this.props;

    showFarmsEditDialog(farm);
  }

  handleRemoveFarm(farm) {
    const { showFarmsRemoveDialog } = this.props;

    showFarmsRemoveDialog(farm);
  }

  handleGoToFarm(farm) {
    const { goToFarm, startUrl } = this.props;

    goToFarm(farm, startUrl.urlTemplate);
  }

  render() {
    const { farms, startUrl, permission } = this.props;

    return permission && permission.view ? (<div className='farms-page-container'>
      <div className='page-title'>
        <h1>
          <FormattedMessage {...messages.title}/>
        </h1>
      </div>
      {permission.add ? (<RaisedButton className='farms-page-container__farm-add page-button'
        label={<FormattedMessage {...messages.button.add}/>} primary
        onTouchTap={::this.handleClickAddFarm}
                         />) : null}
      <br/>

      <TableFarms tableData={farms} onRemoveFarm={::this.handleRemoveFarm} onEditFarm={::this.handleEditFarm}
        onGoToFarm={::this.handleGoToFarm}
        buttons={{ change : permission.change, delete : permission.delete, overview : !!startUrl }}
      />
      <br/>
      {permission.add ? <DialogFarmsAdd /> : null}
      {permission.change ? <DialogFarmsEdit /> : null}
      {permission.delete ? <DialogFarmsRemove /> : null}
    </div>) : null;
  }
}

FarmsPage.propTypes = propTypes;
FarmsPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(FarmsPage);
