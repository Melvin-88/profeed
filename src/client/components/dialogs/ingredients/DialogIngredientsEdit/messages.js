/*
 * IngredientsDialogs Messages
 *
 * This contains all the text for the IngredientsDialogs  component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'ingredients.dialog.edit.title',
    defaultMessage: 'Edit ingredients'
  },

  form : {
    ingredientName: {
      title: {
        id: 'ingredients.dialog.edit.form.ingredientName.title',
        defaultMessage: 'Ingredient name'
      },

      hint: {
        id: 'ingredients.dialog.edit.form.ingredientName.hint',
        defaultMessage: 'Ingredient name'
      }
    },

    dryMatter: {
      id: 'ingredients.dialog.edit.form.dryMatter.title',
      defaultMessage: 'Dry matter [%]: '
    },

    feed: {
      id: 'ingredients.dialog.edit.form.feed',
      defaultMessage: 'Feed '
    },

    ignoreReports: {
      id: 'ingredients.dialog.edit.form.ignoreReports',
      defaultMessage: 'Ignore reports '
    }
  },

  button: {
    cancel :  {
      id: 'ingredients.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'ingredients.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
