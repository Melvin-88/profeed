/*
 * SchedulesDialogs Messages
 *
 * This contains all the text for the SchedulesDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'schedules.dialog.add.title',
    defaultMessage: 'Schedule distribution diet'
  },

  form : {
    chooseDiet: {
      id: 'schedules.dialog.add.form.chooseDiet',
      defaultMessage: 'Choose a diet: '
    },

    selectTheDateOfExecution: {
      id: 'schedules.dialog.add.form.selectTheDateOfExecution',
      defaultMessage: 'Select the date of execution: '
    },

    selectdDstribution: {
      id: 'schedules.dialog.add.form.selectdDstribution',
      defaultMessage: 'Select the distribution: '
    }
  },

  button: {
    cancel: {
      id: 'schedules.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    add: {
      id: 'schedules.dialog.add.button.save',
      defaultMessage: 'Add'
    }
  }
});
