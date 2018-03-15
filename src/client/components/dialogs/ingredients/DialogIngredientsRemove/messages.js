/*
 * IngredientDialogs Messages
 *
 * This contains all the text for the IngredientDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'ingredients.dialog.remove.title',
    defaultMessage: 'Remove ingredient'
  },
  message : {
    id: 'ingredients.dialog.remove.message',
    defaultMessage: 'Do you agree to delete ingredient {name} with ID {id}?'
  },
  button: {
    cancel :  {
      id: 'ingredients.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove :  {
      id: 'ingredients.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
