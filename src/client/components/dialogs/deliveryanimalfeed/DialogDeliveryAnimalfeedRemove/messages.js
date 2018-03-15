/*
 * DeliveryAnimalfeed Messages
 *
 * This contains all the text for the DeliveryAnimalfeed component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'deliveryanimalfeed.dialog.remove.title',
    defaultMessage: 'Remove delivery of feed'
  },
  message : {
    id: 'deliveryanimalfeed.dialog.remove.message',
    defaultMessage: 'Do you agree to delete delivery {name} with ID {id}?'
  },
  button: {
    cancel :  {
      id: 'deliveryanimalfeed.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'deliveryanimalfeed.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
