/*
 * DeliveryDialogs Messages
 *
 * This contains all the text for the DeliveryDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'deliveries.dialog.edit.title',
    defaultMessage: 'Edit delivery'
  },

  form : {
    selectIngredient: {
      id: 'deliveries.dialog.edit.form.selectIngredient.title',
      defaultMessage: 'Select ingredient'
    },

    enterYourWeight: {
      title: {
        id: 'deliveries.dialog.edit.form.enterYourWeight.title',
        defaultMessage: 'Enter your weight'
      },

      hint: {
        id: 'deliveries.dialog.edit.form.enterYourWeight.hint',
        defaultMessage: 'The amount [kg]'
      }
    },

    enterTheAmount: {
      title: {
        id: 'deliveries.dialog.edit.form.enterTheAmount.title',
        defaultMessage: 'Enter the amount'
      },

      hint: {
        id: 'deliveries.dialog.edit.form.enterTheAmount.hint',
        defaultMessage: 'The amount [$]'
      }
    }
  },

  button: {
    cancel :  {
      id: 'deliveries.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'deliveries.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
