/*
 * TableScheduleRationLoadingCounts Messages
 *
 * This contains all the text for the TableScheduleRationLoadingCounts component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'scheduleRation.loadingcountsTable.title',
    defaultMessage: 'Distribution'
  },

  headers: {
    name: {
      id: 'scheduleRation.loadingcountsTable.header.name',
      defaultMessage: 'Name'
    },

    coefficient: {
      id: 'scheduleRation.loadingcountsTable.header.coefficient',
      defaultMessage: 'Coefficient'
    },

    weight: {
      id: 'scheduleRation.loadingcountsTable.header.weight',
      defaultMessage: 'Weight'
    },

    mixer: {
      id: 'scheduleRation.loadingcountsTable.header.mixer',
      defaultMessage: 'Mixer'
    }
  },

  note: {
    id: 'scheduleRation.loadingcountsTable.note',
    defaultMessage: '* - value considering factors'
  }
});
