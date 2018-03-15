/*
 * LoadingCounts Messages
 *
 * This contains all the text for the LoadingCounts component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'loadingcounts.dialog.edit.title',
    defaultMessage: 'Edit loading counts'
  },
  form : {
    editDistribution: {
      title: {
        id: 'loadingcounts.dialog.edit.form.editDistribution',
        defaultMessage: 'Name distribution'
      },

      hint: {
        id: 'loadingcounts.dialog.edit.form.editDistribution.hint',
        defaultMessage: 'Name distribution'
      }
    }
  },
  button: {
    cancel :  {
      id: 'loadingcounts.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    edit :  {
      id: 'loadingcounts.dialog.edit.button.edit',
      defaultMessage: 'Edit'
    }
  }
});
