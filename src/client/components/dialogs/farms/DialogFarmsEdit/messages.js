/*
 * DialogFarmsEditAdd Messages
 *
 * This contains all the text for the DialogFarmsEditAdd component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'farms.dialog.edit.title',
    defaultMessage: 'Edit farm'
  },

  form: {
    enterName: {
      id: 'farms.dialog.edit.form.enterName',
      defaultMessage: 'Enter farm name'
    },
    enterNameHint: {
      id: 'farms.dialog.edit.form.enterNameHint',
      defaultMessage: 'Farm name'
    },
    timezone: {
      id: 'farms.dialog.edit.form.timezone',
      defaultMessage: 'Select timezone'
    },
    language: {
      id: 'farms.dialog.edit.form.language',
      defaultMessage: 'Select language'
    }
  },
  button: {
    cancel: {
      id: 'farms.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save: {
      id: 'farms.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
