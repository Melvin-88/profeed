/*
 * RationIngredientDialogs Messages
 *
 * This contains all the text for the RationIngredientDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'rations.rationingredients.dialog.edit.title',
    defaultMessage: 'Edit'
  },

  form : {
    ingredient: {
      id: 'rations.rationingredients.dialog.edit.form.ingredient',
      defaultMessage: 'Ingredient: '
    },

    number: {
      id: 'rations.rationingredients.dialog.edit.form.number',
      defaultMessage: 'Number on 1 pc'
    }
  },

  button: {
    cancel :  {
      id: 'rations.rationingredients.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'rations.rationingredients.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
