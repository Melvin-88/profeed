/**
*
* IngredientsPage
*
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TableIngredients from 'client/components/tables/TableIngredients';
import DialogIngredientsAdd from 'client/components/dialogs/ingredients/DialogIngredientsAdd';
import DialogIngredientsEdit from 'client/components/dialogs/ingredients/DialogIngredientsEdit';
import DialogIngredientsRemove from 'client/components/dialogs/ingredients/DialogIngredientsRemove';

const propTypes = {
  permission : PropTypes.object,
  farmId : PropTypes.string,
  ingredients : PropTypes.array,
  getIngredients : PropTypes.func,
  showIngredientsAddDialog : PropTypes.func,
  showIngredientsEditDialog : PropTypes.func,
  showIngredientsRemoveDialog : PropTypes.func
};
const defaultProps = { };

class IngredientsPage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      checkedIngredient : null
    };
  }

  componentDidMount() {
    const { getIngredients, farmId } = this.props;

    getIngredients(farmId);
  }

  componentWillReceiveProps(nextProps) {
    const { ingredients } = this.props;
    const { ingredients : newIgredients } = nextProps;

    if (ingredients && ingredients !== newIgredients) {
      this.setState({ checkedIngredient : null });
    }
  }

  handleChangeCheckedRow(row) {
    this.setState({
      checkedIngredient : this.state.checkedIngredient === row ? null : row
    });
  }
// Handlers for click
  handleAddIngredientsModal() {
    const { showIngredientsAddDialog } = this.props;

    showIngredientsAddDialog();
  }

  handleEditIngredientsModal() {
    const { showIngredientsEditDialog, ingredients } = this.props;
    const { checkedIngredient } = this.state;
    const ingredient = ingredients.find((item) => item.id === checkedIngredient);

    showIngredientsEditDialog(ingredient);
  }

  handleRemoveIngredientsModal() {
    const { showIngredientsRemoveDialog, ingredients } = this.props;
    const { checkedIngredient } = this.state;
    const ingredient = ingredients.find((item) => item.id === checkedIngredient);

    showIngredientsRemoveDialog(ingredient);
  }

  render() {
    const { ingredients, permission } = this.props;
    const { checkedIngredient } = this.state;

    return permission && permission.view ? (
      <div className='ingredients-page-container'>
        <div className='page-title'>
          <h1> { <FormattedMessage {...messages.title} />} </h1>
        </div>
        {permission.add ? (
          <RaisedButton
            className='page-button button-add'
            label={<FormattedMessage {...messages.button.add} />}
            primary
            onTouchTap={::this.handleAddIngredientsModal}
          />) : null}
        {permission.change ? (
          <RaisedButton
            className={`page-button ${checkedIngredient ? 'button-edit' : ''}`}
            label={<FormattedMessage {...messages.button.edit} />}
            onTouchTap={::this.handleEditIngredientsModal}
            disabled={!checkedIngredient}
          />) : null}
        {permission.delete ? (
          <RaisedButton
            className={`page-button ${checkedIngredient ? 'button-remove' : ''}`}
            label={<FormattedMessage {...messages.button.remove} />}
            onTouchTap={::this.handleRemoveIngredientsModal}
            disabled={!checkedIngredient}
          />) : null}
        <br/>
        <TableIngredients tableData={ingredients} onChangeCheckedRow={::this.handleChangeCheckedRow}
          checked={checkedIngredient} canChecked={permission.change || permission.delete}
        />
        <br/>
        {permission.add ? <DialogIngredientsAdd /> : null}
        {permission.change ? <DialogIngredientsEdit /> : null}
        {permission.delete ? <DialogIngredientsRemove /> : null}
      </div>
    ) : null;
  }
}

IngredientsPage.propTypes = propTypes;
IngredientsPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(IngredientsPage);
