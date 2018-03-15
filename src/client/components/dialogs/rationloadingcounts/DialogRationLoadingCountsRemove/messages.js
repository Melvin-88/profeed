/*
 * RationLoadingCounts Messages
 *
 * This contains all the text for the RationLoadingCounts component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'rations.rationloadingcounts.dialog.remove.title',
    defaultMessage: 'Remove distribution'
  },
  message: {
    id: 'rations.rationloadingcounts.dialog.remove.message',
    defaultMessage: 'Do you agree to delete {name} with ID {id}?'
  },
  button: {
    cancel:  {
      id: 'rations.rationloadingcounts.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove:  {
      id: 'rations.rationloadingcounts.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
