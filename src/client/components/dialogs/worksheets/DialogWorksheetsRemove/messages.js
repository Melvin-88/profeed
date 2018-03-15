/*
 * Worksheets Messages
 *
 * This contains all the text for the Worksheets component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'worksheets.dialog.remove.title',
    defaultMessage: 'This is the Worksheets component !'
  },
  form : {
    worksheets: {
      id: 'worksheets.dialog.form.worksheets',
      defaultMessage: 'Worksheets'
    }
  },
  message : {
    id: 'worksheets.dialog.remove.message',
    defaultMessage: 'Do you agree to delete worksheet {name} with ID {id}?'
  },
  button: {
    cancel :  {
      id: 'worksheets.dialog.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'worksheets.dialog.button.save',
      defaultMessage: 'Save'
    }
  }
});
