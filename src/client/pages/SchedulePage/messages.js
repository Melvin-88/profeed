/*
 * SchedulePage Messages
 *
 * This contains all the text for the schedulePage component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'schedule.title',
    defaultMessage: 'Planning'
  },

  form: {
    enterName: {
      title: {
        id: 'schedule.form.enterName.title',
        defaultMessage: 'Enter name ration'
      },

      hint: {
        id: 'schedule.form.enterName.hint',
        defaultMessage: 'Name ration'
      }
    },

    coefficient: {
      id: 'schedule.form.cofficient',
      defaultMessage: 'The coefficient of discharge'
    },

    automaticDischarge: {
      id: 'schedule.form.automaticDischarge',
      defaultMessage: 'Automatic discharge'
    },

    planDistribution: {
      id: 'schedule.form.planDistribution',
      defaultMessage: 'Plan for distribution'
    }
  },

  button: {
    save: {
      id: 'schedule.button.save',
      defaultMessage: 'save'
    },

    overview: {
      id: 'schedule.button.overview',
      defaultMessage: 'Back to overview'
    }
  }
});
