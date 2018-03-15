/*
 * DialogIngredientsAdd Messages
 *
 * This contains all the text for the DialogIngredientsAdd  component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'ingredients.dialog.add.title',
    defaultMessage: 'Add ingredients'
  },

  form : {
    ingredientName: {
      title: {
        id: 'ingredients.dialog.add.form.ingredientName.title',
        defaultMessage: 'Ingredient name'
      },

      hint: {
        id: 'ingredients.dialog.add.form.ingredientName.hint',
        defaultMessage: 'Ingredient name'
      }
    },

    dryMatter: {
      id: 'ingredients.dialog.add.form.dryMatter.title',
      defaultMessage: 'Dry matter [%]'
    },

    feed: {
      id: 'ingredients.dialog.add.form.feed',
      defaultMessage: 'Feed'
    },

    ignoreReports: {
      id: 'ingredients.dialog.add.form.ignoreReports',
      defaultMessage: 'Ignore reports'
    }
  },

  button: {
    cancel :  {
      id: 'ingredients.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'ingredients.dialog.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
