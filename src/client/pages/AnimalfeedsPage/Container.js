/**
*
* AnimalfeedsPage
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
import TableAnimalfeeds from 'client/components/tables/TableAnimalfeeds';
import DialogAnimalfeedsAdd from 'client/components/dialogs/animalfeeds/DialogAnimalfeedsAdd';
import DialogAnimalfeedsEdit from 'client/components/dialogs/animalfeeds/DialogAnimalfeedsEdit';
import DialogAnimalfeedsRemove from 'client/components/dialogs/animalfeeds/DialogAnimalfeedsRemove';

const propTypes = {
  farmId : PropTypes.string,
  animalfeeds : PropTypes.array,
  getAnimalfeeds : PropTypes.func,
  showAnimalfeedsAddDialog : PropTypes.func,
  showAnimalfeedsEditDialog : PropTypes.func,
  showAnimalfeedsRemoveDialog : PropTypes.func,
  permission : PropTypes.object
};
const defaultProps = { };

class AnimalfeedsPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedAnimalfeeds : null
    };
  }

  componentDidMount() {
    const { getAnimalfeeds, farmId } = this.props;

    getAnimalfeeds(farmId);
  }

  componentWillReceiveProps(nextProps) {
    const { animalfeeds } = this.props;
    const { animalfeeds : newAnimalfeeds } = nextProps;

    if (animalfeeds && animalfeeds !== newAnimalfeeds) {
      this.setState({ checkedAnimalfeeds : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedAnimalfeeds : this.state.checkedAnimalfeeds === row ? null : row
    });
  }
// Handlers for click
  handleAddAnimalfeedsModal() {
    const { showAnimalfeedsAddDialog } = this.props;

    showAnimalfeedsAddDialog();
  }

  handleEditAnimalfeedsModal() {
    const { showAnimalfeedsEditDialog, animalfeeds } = this.props;
    const { checkedAnimalfeeds } = this.state;
    const animalfeed = animalfeeds.find((item) => item.id === checkedAnimalfeeds);

    showAnimalfeedsEditDialog(animalfeed);
  }

  handleRemoveAnimalfeedsModal() {
    const { showAnimalfeedsRemoveDialog, animalfeeds } = this.props;
    const { checkedAnimalfeeds } = this.state;
    const animalfeed = animalfeeds.find((item) => item.id === checkedAnimalfeeds);

    showAnimalfeedsRemoveDialog(animalfeed);
  }

  render() {
    const { animalfeeds, permission } = this.props;
    const { checkedAnimalfeeds } = this.state;

    console.log('AnimalfeedsPage | render | animalfeeds : ', animalfeeds);

    return permission && permission.view ? (
      <div className='animalfeeds-page-container'>
        <div className='page-title'>
          <h1><FormattedMessage {...messages.title}/></h1>
        </div>
        {permission.add ? <RaisedButton className='page-button button-add'
          label={<FormattedMessage {...messages.button.add}/>} primary onTouchTap={::this.handleAddAnimalfeedsModal}
                          />
          : null
        }
        {permission.change ? <RaisedButton className={`page-button ${checkedAnimalfeeds ? 'button-edit' : ''}`}
          label={<FormattedMessage {...messages.button.edit}/>} onTouchTap={::this.handleEditAnimalfeedsModal}
          disabled={!checkedAnimalfeeds}
                             />
          : null
        }
        {permission.delete ? <RaisedButton className={`page-button ${checkedAnimalfeeds ? 'button-remove' : ''}`}
          label={<FormattedMessage {...messages.button.remove}/>} onTouchTap={::this.handleRemoveAnimalfeedsModal}
          disabled={!checkedAnimalfeeds}
                             />
          : null
        }
        <br />
        <TableAnimalfeeds tableData={animalfeeds} onChangeCheckedRow={::this.handleChangeCheckedRow}
          canChecked={permission.change || permission.delete} checked={checkedAnimalfeeds}
        />
        <br/>
        {permission.add ? <DialogAnimalfeedsAdd /> : null}
        {permission.change ? <DialogAnimalfeedsEdit /> : null}
        {permission.delete ? <DialogAnimalfeedsRemove /> : null}
      </div>
    ) : null;
  }
}

AnimalfeedsPage.propTypes = propTypes;
AnimalfeedsPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(AnimalfeedsPage);
