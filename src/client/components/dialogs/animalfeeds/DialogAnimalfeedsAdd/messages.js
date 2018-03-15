/*
 * Animalfeeds Messages
 *
 * This contains all the text for the Animalfeeds component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'animalfeeds.dialog.add.title',
    defaultMessage: 'Add animalfeed'
  },
  form : {
    ingredients: {
      id: 'animalfeeds.dialog.add.form.ingredients',
      defaultMessage: 'Ingredients'
    },
    animalfeed : {
      id: 'animalfeeds.dialog.add.form.animalfeed',
      defaultMessage: 'Animalfeed'
    }
  },
  button: {
    cancel :  {
      id: 'animalfeeds.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'animalfeeds.dialog.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
