/*
 * RationIngredientDialogs Messages
 *
 * This contains all the text for the RationIngredientDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'rations.rationingredients.dialog.add.title',
    defaultMessage: 'Add to hand ingredient'
  },

  form : {
    ingredient: {
      id: 'rations.rationingredients.dialog.add.form.ingredient',
      defaultMessage: 'Ingredient: '
    },

    number: {
      id: 'rations.rationingredients.dialog.add.form.number',
      defaultMessage: 'Number on 1 pc'
    }
  },

  button: {
    cancel :  {
      id: 'rations.rationingredients.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'rations.rationingredients.dialog.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
