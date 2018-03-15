/*
 * Register Messages
 *
 * This contains all the text for the Register component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'register.dialog.language.title',
    defaultMessage: 'Check language'
  },
  form : {
    languages: {
      id: 'register.dialog.language.form.languages',
      defaultMessage: 'Languages'
    }
  },
  button: {
    cancel :  {
      id: 'register.dialog.language.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'register.dialog.language.button.save',
      defaultMessage: 'Save'
    }
  }
});
