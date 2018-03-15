/*
 * MixersDialogs Messages
 *
 * This contains all the text for the MixersDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'mixers.dialog.edit.title',
    defaultMessage: 'Edit mixer'
  },

  form : {
    enterTheNameOfTheMixer: {
      id: 'mixers.dialog.edit.form.enterTheNameOfTheMixer',
      defaultMessage: 'Enter the name of the mixer: '
    },

    farm: {
      id: 'mixers.dialog.edit.form.farm',
      defaultMessage: 'Farm: '
    },

    maximumCargoWeight: {
      id: 'mixers.dialog.edit.form.maximumCargoWeight',
      defaultMessage: 'Maximum cargo weight [kg]: '
    }
  },

  button: {
    cancel :  {
      id: 'mixers.dialog.edit.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'mixers.dialog.edit.button.save',
      defaultMessage: 'Save'
    }
  }
});
