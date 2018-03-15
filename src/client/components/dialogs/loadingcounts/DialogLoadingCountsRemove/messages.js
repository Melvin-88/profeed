/*
 * LoadingCounts Messages
 *
 * This contains all the text for the LoadingCounts component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'loadingcounts.dialog.remove.title',
    defaultMessage: 'Remove loading counts'
  },
  message : {
    id: 'loadingcounts.dialog.remove.message',
    defaultMessage: 'Do you agree to delete {name}?'
  },
  button: {
    cancel :  {
      id: 'loadingcounts.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove :  {
      id: 'loadingcounts.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
