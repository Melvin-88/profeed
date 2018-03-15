/*
 * DeliveryAnimalfeed Messages
 *
 * This contains all the text for the DeliveryAnimalfeed component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'deliveryanimalfeed.dialog.add.title',
    defaultMessage: 'Add delivery of feed'
  },
  form : {
    deliveryAnimalfeed: {
      id: 'deliveryanimalfeed.dialog.add.form.deliveryAnimalfeed',
      defaultMessage: 'Select feed'
    },
    amount: {
      id: 'deliveryanimalfeed.dialog.add.form.amount',
      defaultMessage: 'Amount'
    },
    amountHint: {
      id: 'deliveryanimalfeed.dialog.add.form.amountHint',
      defaultMessage: '0'
    }
  },
  button: {
    cancel :  {
      id: 'deliveryanimalfeed.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'deliveryanimalfeed.dialog.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
