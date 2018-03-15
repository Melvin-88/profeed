/**
*
* Rationingredients
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
// import { checkIntInput } from 'helpers/validators';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : React.PropTypes.string,
  closeDialog : React.PropTypes.func,
  submitData : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  ingredients: React.PropTypes.array,
  intl: React.PropTypes.object
};
const defaultProps = { };

const initialState = {
  ingredientChecked : 0,
  weight : 0
};

class DialogRationIngredientsAdd extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    const { open : openNext, ingredients } = nextProps;

    if (!open && (open !== openNext)) {
      this.setState({
        ingredientChecked : ingredients[0] && ingredients[0].id,
        weight : 0
      });
    }
  }

  handleIngredientChecked(e, i, v) {
    this.setState({
      ingredientChecked : v
    });
  }

  handleCountInput(e, v) {
    if (v === '' || (parseInt(v, 10))) {
      this.setState({
        weight : +v
      });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitData, ingredients } = this.props;
    const { ingredientChecked, weight } = this.state;
    const ingredient = ingredients.find((item) => ingredientChecked === item.id);


    submitData({
      id : ingredientChecked,
      name : ingredient.name,
      weight,
      ordering : ingredients.length - 1,
      'dry_matter' : ingredient.dry_matter
    });
  }

  render() {
    const { open, locked, error, errorMessage, ingredients, intl } = this.props;

    const actions = [
      <FlatButton
        key='1'
        label={<FormattedMessage {...messages.button.cancel} />}
        disabled={locked}
        secondary
        onTouchTap={::this.handleClose}
      />,
      <FlatButton
        key='2'
        label={<FormattedMessage {...messages.button.save} />}
        disabled={locked}
        primary
        onTouchTap={::this.handleSubmit}
      />
    ];

    return (
      <div>
        <DialogTemplate
          title={intl.formatMessage(messages.title)}
          actions={actions}
          modal
          open={open}
          errorMessage={error ? errorMessage : null}

        >
          <div className='dialog-form'>
            <span className='dialog-form__label'>
              { intl.formatMessage(messages.form.ingredient) }
            </span>
            <SelectField
              className='dialog-form__input'
              hintText='Пусто'
              value={this.state.ingredientChecked}
              onChange={::this.handleIngredientChecked}
            >
              { ingredients.map((item, key) => {
                return <MenuItem key={key} value={item.id} primaryText={item.name} />;
              })}
            </SelectField>
            <br/>
            <span className='dialog-form__label'>
              { intl.formatMessage(messages.form.number) }
            </span>
            <TextField
              name='weight'
              className='dialog-form__input'
              disabled={locked}
              value={this.state.weight.toFixed(2)}
              onChange={::this.handleCountInput}
            />
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogRationIngredientsAdd.propTypes = propTypes;
DialogRationIngredientsAdd.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogRationIngredientsAdd));
