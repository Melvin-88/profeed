/*
 * DeliveryAnimalfeed Messages
 *
 * This contains all the text for the DeliveryAnimalfeed component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'deliveryanimalfeed.dialog.edit.title',
    defaultMessage: 'Edit delivery of feed'
  },
  form : {
    deliveryAnimalfeed: {
      id: 'deliveryanimalfeed.dialog.edit.form.deliveryAnimalfeed',
      defaultMessage: 'Select feed'
    },
    amount: {
      id: 'deliveryanimalfeed.dialog.edit.form.amount',
      defaultMessage: 'Amount'
    },
    amountHint: {
      id: 'deliveryanimalfeed.dialog.edit.form.amountHint',
      defaultMessage: '0'
    }
  },
  button: {
    cancel :  {
      id: 'deliveryanimalfeed.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'deliveryanimalfeed.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
