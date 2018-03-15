/*
 * RationLoadingCounts Messages
 *
 * This contains all the text for the RationLoadingCounts component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'rations.rationloadingcounts.dialog.add.title',
    defaultMessage: 'Add distribution'
  },

  form: {
    distribution: {
      id: 'rations.rationloadingcounts.dialog.add.form.distribution',
      defaultMessage: 'Distribution'
    },

    enterValue: {
      id: 'rations.rationloadingcounts.dialog.add.form.enterValue',
      defaultMessage: 'Enter value'
    },

    mixer: {
      id: 'rations.rationloadingcounts.dialog.add.form.mixer',
      defaultMessage: 'Mixer'
    }
  },

  button: {
    cancel:  {
      id: 'rations.rationloadingcounts.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save:  {
      id: 'rations.rationloadingcounts.dialog.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
