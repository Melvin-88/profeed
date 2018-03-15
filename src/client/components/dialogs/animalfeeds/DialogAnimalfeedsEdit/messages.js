/*
 * Animalfeeds Messages
 *
 * This contains all the text for the Animalfeeds component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'animalfeeds.dialog.edit.title',
    defaultMessage: 'Edit animalfeed'
  },
  form : {
    ingredients: {
      id: 'animalfeeds.dialog.edit.form.ingredients',
      defaultMessage: 'Ingredients'
    },
    animalfeed : {
      id: 'animalfeeds.dialog.edit.form.animalfeed',
      defaultMessage: 'Animalfeed'
    }
  },
  button: {
    cancel :  {
      id: 'animalfeeds.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'animalfeeds.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
