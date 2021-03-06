/**
*
* Ingredients
*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialogTemplate from 'client/shared/DialogTemplate';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage, injectIntl  } from 'react-intl';
import messages from './messages';

const propTypes = {
  farmId : React.PropTypes.string,
  closeDialog : React.PropTypes.func,
  submitEditIngredients : React.PropTypes.func,
  open : React.PropTypes.bool,
  locked : React.PropTypes.bool,
  error : React.PropTypes.bool,
  errorMessage : React.PropTypes.string,
  ingredient : React.PropTypes.object,
  intl: React.PropTypes.object
};
const defaultProps = { };

const initialState = {
  name : '',
  dry : 0,
  ignoredInReport : true,
  isAnimalfeed : false,
  specLockByValidateName : true,
  specLockByDry : true
};

const LIMITATION = {
  DRY_MIN : 0,
  DRY_MAX : 100
};

class DialogIngredientsEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  componentWillReceiveProps(nextProps) {
    console.log('DialogIngredientsEdit | componentWillReceiveProps | this.props & nextProps & ',
      this.props, nextProps, !this.props.open && (this.props.open !== nextProps.open));

    if (!this.props.open && (this.props.open !== nextProps.open)) {
      this.setState({ ...initialState,
        name : nextProps.ingredient.name,
        dry : nextProps.ingredient.dry_matter,
        ignoredInReport : nextProps.ingredient.ignored_in_report,
        isAnimalfeed : nextProps.ingredient.is_animalfeed
      });
    }
  }

  handleClose() {
    const { closeDialog } = this.props;

    closeDialog();
  }

  handleSubmit() {
    const { submitEditIngredients, farmId, ingredient } = this.props;

    submitEditIngredients({ ...this.state, farmId, id : ingredient.id });
  }

  handleKeySubmit(e) {
    const { specLockByDry } = this.state;

    if (e.keyCode === 13 && !specLockByDry) {
      this.handleSubmit();
    }
  }

  handleNameInput(e, v) {
    this.setState({
      name : v,
      specLockByValidateName : name === ''
    });
  }

  handleDryInput(e, v) {
    const asInt = parseInt(v, 10);

    if (asInt && LIMITATION.DRY_MAX >= asInt && LIMITATION.DRY_MIN <= asInt) {
      this.setState({
        dry : asInt,
        specLockByDry : false
      });
    } else if (v === '') {
      // Can delete all symbols, but lock Submit
      this.setState({
        dry : 0,
        specLockByDry : true
      });
    }
  }

  handleIsAnimalfeedInput(e, isInputChecked) {
    this.setState({
      isAnimalfeed : isInputChecked
    });
  }

  handleIgnoreInput(e, isInputChecked) {
    this.setState({
      ignoredInReport : isInputChecked
    });
  }

  lockedByInputted() {
    const { name, dry } = this.state;

    if (name.trim() === '') {
      return true;
    }

    if (Number.isFinite(dry) && dry <= LIMITATION.DRY_MIN && dry > LIMITATION.DRY_MAX) {
      return true;
    }

    return false;
  }

  render() {
    const { open, locked, error, errorMessage, intl } = this.props;

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
        disabled={locked || ::this.lockedByInputted()}
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
              {intl.formatMessage(messages.form.ingredientName.title)}
            </span>
            <TextField
              name='name'
              className='dialog-form__input'
              disabled={locked}
              hintText={intl.formatMessage(messages.form.ingredientName.hint)}
              value={this.state.name}
              onChange={::this.handleNameInput}
            />
            <br/>
            <span className='dialog-form__label'>
              {intl.formatMessage(messages.form.dryMatter)}
            </span>
            <TextField
              name='dry'
              className='dialog-form__input'
              disabled={locked}
              type='number'
              value={this.state.dry}
              onChange={::this.handleDryInput}
            />
            <br/>
            <Toggle
              onToggle={::this.handleIsAnimalfeedInput}
              label={intl.formatMessage(messages.form.feed)}
              defaultToggled={this.state.ignoredInReport}
            />
            <Toggle
              onToggle={::this.handleIgnoreInput}
              label={intl.formatMessage(messages.form.ignoreReports)}
              defaultToggled={this.state.isAnimalfeed}
            />
          </div>
        </DialogTemplate>
        { error ? <span className='error-message'>{errorMessage}</span> : '' }
      </div>
    );
  }
}

DialogIngredientsEdit.propTypes = propTypes;
DialogIngredientsEdit.defaultProps = defaultProps;

export default injectIntl(connect(modelSelector, containerActions)(DialogIngredientsEdit));
