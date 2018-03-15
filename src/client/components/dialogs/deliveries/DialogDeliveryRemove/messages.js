/*
 * DeliveryDialogs Messages
 *
 * This contains all the text for the DeliveryDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'deliveries.dialog.remove.title',
    defaultMessage: 'Remove delivery'
  },
  message : {
    id: 'deliveries.dialog.remove.message',
    defaultMessage: 'Do you agree to delete delivery {name} with ID {id}?'
  },
  button: {
    cancel :  {
      id: 'deliveries.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove :  {
      id: 'deliveries.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
