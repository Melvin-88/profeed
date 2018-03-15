/**
 *
 * Animalfeeds
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';
import PercentageItem from 'client/shared/PercentageItem';

const propTypes = {
  farmId: PropTypes.string,
  closeDialog: PropTypes.func,
  submitAddAnimalfeeds: PropTypes.func,
  open: PropTypes.bool,
  locked: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  ingredients: PropTypes.array,
  animalfeeds : PropTypes.array,
  intl: PropTypes.object
};
const defaultProps = {};
const initState = {
  checkedAnimalfeed : -1,
  specLockByValidateName: true,
  checkedIngredients : [],
  checkedIngredientsIds : []
};

class DialogAnimalfeedsAdd extends Component { // eslint-disable-line react/prefer-stateless-function
  state = { ...initState };

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && (this.props.open !== nextProps.open)) {
      this.setState({ ...initState });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitAddAnimalfeeds } = this.props;
    const { checkedAnimalfeed, checkedIngredients } = this.state;

    submitAddAnimalfeeds({
      ingredient : checkedAnimalfeed,
      ingredients : checkedIngredients.map(item => ({
        ingredient : item.id,
        percent : item.percent
      })
      )
    });
  }

  handleKeySubmit(e) {
    const { specLockByValidateName } = this.state;

    if (e.keyCode === 13 && !specLockByValidateName) {
      this.handleSubmit();
    }
  }

  // Handle inputs
  handleChangeAnimalffed(e, i, v) {
    this.setState({
      checkedAnimalfeed : v
    });
  }

  handleIngredients(event, index, values) {
    const { ingredients } = this.props;
    const { checkedIngredients, checkedIngredientsIds } = this.state;
    let checkedIngredientsUpdated = [];

    if (checkedIngredients.length < values.length) {
      // Add new item
      const newIngredientId = values.find(item => !checkedIngredientsIds.includes(item)); // find new id
      const newIngredient = ingredients.find(item => item.id === newIngredientId); // find ingredient by find id

      checkedIngredientsUpdated = [ ...checkedIngredients ];
      checkedIngredientsUpdated.push({ ...newIngredient, percent : 0 }); // add new ingredient and add property 'percent'
    } else if (checkedIngredients.length > values.length) {
      // Remove item id
      const removeIngredientId = checkedIngredientsIds.filter(item => !values.includes(item))[0]; // find removed id

      // filter without ingredient by find id
      checkedIngredientsUpdated = checkedIngredients.filter(item => item.id !== removeIngredientId);
    }
    this.setState({ checkedIngredientsIds : values, checkedIngredients : [ ...checkedIngredientsUpdated ] });
  }

  handleChangePercent(id, value) {
    if (value < 0) return;

    const { checkedIngredients } = this.state;
    const availablePercent = 100 - checkedIngredients.reduce((prev, item) => {
      if (item.id === id) return prev;

      return prev + item.percent;
    }, 0);
    const targetItem = checkedIngredients.findIndex(item => item.id === id);

    if (availablePercent < +value || targetItem < 0) return; // check have enough percents or item exist

    checkedIngredients[targetItem].percent = +value;

    this.setState({
      checkedIngredients: [ ...checkedIngredients ]
    });
  }

  menuItems(items, checkedItems) {
    return items.map((item, i) => (
      <MenuItem
        key={i}
        insetChildren
        checked={checkedItems && checkedItems.includes(item.id)}
        value={item.id}
        primaryText={item.name}
      />
    ));
  }

  isValid() {
    const { checkedAnimalfeed, checkedIngredients } = this.state;

    if (checkedAnimalfeed < 0 || checkedIngredients.reduce((prevVal, item) => prevVal + item.percent, 0) < 100) return false;

    return true;
  }

  render() {
    const { open, locked, error, errorMessage, ingredients, animalfeeds, intl } = this.props;

    const actions = [
      <FlatButton
        key='1'
        label={<FormattedMessage {...messages.button.cancel}/>}
        disabled={locked}
        secondary
        onTouchTap={::this.handleClose}
      />,
      <FlatButton
        key='2'
        label={<FormattedMessage {...messages.button.save}/>}
        disabled={locked || !this.isValid()}
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
          <div className='dialog-form' onKeyDown={::this.handleKeySubmit}>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.animalfeed)}
            </span>
            <SelectField
              className='dialog-form__input'
              value={this.state.checkedAnimalfeed}
              onChange={::this.handleChangeAnimalffed}
            >
              {animalfeeds.map((item, key) => {
                return <MenuItem key={key} value={item.id} primaryText={item.name} />;
              })}
            </SelectField>
            <br/>
            <span className='dialog-form__label'>{intl.formatMessage(messages.form.ingredients)}</span>
            <SelectField
              multiple
              className='dialog-form__input'
              value={this.state.checkedIngredientsIds}
              onChange={::this.handleIngredients}
            >
              {this.menuItems(ingredients, this.state.checkedIngredientsIds)}
            </SelectField>
            <div>
              {this.state.checkedIngredients.map(item => {
                return (<PercentageItem key={item.id} id={item.id} name={item.name}
                  onChangePercent={::this.handleChangePercent}
                  percent={item.percent}
                        />);
              })}
            </div>
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogAnimalfeedsAdd.propTypes = propTypes;
DialogAnimalfeedsAdd.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogAnimalfeedsAdd));
