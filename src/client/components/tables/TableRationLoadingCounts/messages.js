/*
 * TableRationLoadingCounts Messages
 *
 * This contains all the text for the TableRationLoadingCounts component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'ration.loadingcounts.table.title',
    defaultMessage: 'Distribution'
  },

  headers: {
    checkbox: {
      id: 'ration.loadingcounts.table.headers.checkbox',
      defaultMessage: ' '
    },

    nameRation: {
      id: 'ration.loadingcounts.table.headers.nameRation',
      defaultMessage: 'Name ration'
    },

    correlation: {
      id: 'ration.loadingcounts.table.headers.correlation',
      defaultMessage: 'Correlation'
    },

    weight: {
      id: 'ration.loadingcounts.table.headers.weight',
      defaultMessage: 'Weight'
    },

    mixer: {
      id: 'ration.loadingcounts.table.headers.mixer',
      defaultMessage: 'Mixer'
    }
  },

  button : {
    add: {
      id: 'ration.loadingcounts.table.button.save',
      defaultMessage: 'Add'
    },

    edit: {
      id: 'ration.loadingcounts.table.button.cancel',
      defaultMessage: 'Edit'
    },

    remove: {
      id: 'ration.loadingcounts.table.button.back',
      defaultMessage: 'Remove'
    }
  },

  note: {
    id: 'ration.loadingcounts.table.note',
    defaultMessage: '* - value considering factors'
  }
});
