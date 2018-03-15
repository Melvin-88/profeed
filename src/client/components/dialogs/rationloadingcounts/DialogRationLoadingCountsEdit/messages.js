/*
 * RationLoadingCounts Messages
 *
 * This contains all the text for the RationLoadingCounts component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'rations.rationloadingcounts.dialog.edit.title',
    defaultMessage: 'Edit distribution ration'
  },

  form: {
    distribution: {
      id: 'rations.rationloadingcounts.dialog.edit.form.distribution',
      defaultMessage: 'Distribution: '
    },

    enterValue: {
      id: 'rations.rationloadingcounts.dialog.edit.form.enterValue',
      defaultMessage: 'Enter value: '
    },

    mixer: {
      id: 'rations.rationloadingcounts.dialog.edit.form.mixer',
      defaultMessage: 'Mixer: '
    }
  },

  button: {
    cancel:  {
      id: 'rations.rationloadingcounts.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save:  {
      id: 'rations.rationloadingcounts.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
