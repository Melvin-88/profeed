/*
 * DialogFarmsAddAdd Messages
 *
 * This contains all the text for the DialogFarmsAddAdd component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'farms.dialog.add.title',
    defaultMessage: 'Add farm'
  },

  form: {
    enterName: {
      id: 'farms.dialog.add.form.enterName',
      defaultMessage: 'Enter farm name'
    },
    enterNameHint: {
      id: 'farms.dialog.add.form.enterNameHint',
      defaultMessage: 'Farm name'
    },
    timezone: {
      id: 'farms.dialog.add.form.timezone',
      defaultMessage: 'Select timezone'
    },
    language: {
      id: 'farms.dialog.add.form.language',
      defaultMessage: 'Select language'
    }
  },

  button: {
    cancel: {
      id: 'farms.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save: {
      id: 'farms.dialog.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
