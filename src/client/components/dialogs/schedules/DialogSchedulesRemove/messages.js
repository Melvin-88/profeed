/*
 * SchedulesMessages
 *
 * This contains all the text for the Schedulescomponent.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'schedules.dialog.remove.title',
    defaultMessage: 'Remove distribution'
  },
  message: {
    id: 'schedules.dialog.remove.message',
    defaultMessage: 'Do you agree to delete {name} with ID {id}?'
  },
  button: {
    cancel:  {
      id: 'schedules.dialog.remove.button.cancel',
      defaultMessage: 'Cancel'
    },
    remove:  {
      id: 'schedules.dialog.remove.button.remove',
      defaultMessage: 'Remove'
    }
  }
});
