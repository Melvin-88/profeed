/*
 * LoadingCounts Messages
 *
 * This contains all the text for the LoadingCounts component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'loadingcounts.dialog.add.title',
    defaultMessage: 'Add loading counts'
  },
  form : {
    addDistribution: {
      title: {
        id: 'loadingcounts.dialog.add.form.addDistribution',
        defaultMessage: 'Add distribution'
      },

      hint: {
        id: 'loadingcounts.dialog.add.form.addDistribution.hint',
        defaultMessage: 'Add distribution'
      }
    }
  },
  button: {
    cancel :  {
      id: 'loadingcounts.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'loadingcounts.dialog.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
