/*
 * MixersDialogs Messages
 *
 * This contains all the text for the MixersDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'mixers.dialog.remove.title',
    defaultMessage: 'Remove mixer'
  },
  message: {
    id: 'mixers.dialog.remove.message',
    defaultMessage: 'Do you agree to delete mixer {name} with ID {id}?'
  },
  button: {
    cancel:  {
      id: 'mixers.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove:  {
      id: 'mixers.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
