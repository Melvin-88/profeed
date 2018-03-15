/*
 * DeliveryDialogs Messages
 *
 * This contains all the text for the DeliveryDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'deliveries.dialog.add.title',
    defaultMessage: 'Add delivery'
  },

  form : {
    selectIngredient: {
      id: 'deliveries.dialog.add.form.selectIngredient.title',
      defaultMessage: 'Select ingredient: '
    },

    enterYourWeight: {
      title: {
        id: 'deliveries.dialog.add.form.enterYourWeight.title',
        defaultMessage: 'Enter your weight: '
      },

      hint: {
        id: 'deliveries.dialog.add.form.enterYourWeight.hint',
        defaultMessage: 'The amount [kg]'
      }
    },

    enterTheAmount: {
      title: {
        id: 'deliveries.dialog.add.form.enterTheAmount.title',
        defaultMessage: 'Enter the amount: '
      },

      hint: {
        id: 'deliveries.dialog.add.form.enterTheAmount.hint',
        defaultMessage: 'The amount [$]'
      }
    }
  },

  button: {
    cancel :  {
      id: 'deliveries.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'deliveries.dialog.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
