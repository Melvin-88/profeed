/*
 * Reports Messages
 *
 * This contains all the text for the Reports component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'reports.dialog.edit.title',
    defaultMessage: 'Edit reports for users'
  },
  form : {
    usergroups: {
      id: 'reports.dialog.edit.form.usergroups',
      defaultMessage: 'User groups'
    },
    reports: {
      id: 'reports.dialog.edit.form.reports',
      defaultMessage: 'Reports'
    },
    report: {
      id: 'reports.dialog.edit.form.report',
      defaultMessage: 'Report'
    },
    worksheets: {
      id: 'reports.dialog.edit.form.worksheets',
      defaultMessage: 'Worksheets'
    }
  },
  button: {
    cancel :  {
      id: 'reports.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'reports.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
