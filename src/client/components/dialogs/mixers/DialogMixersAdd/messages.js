/*
 * MixersDialogs Messages
 *
 * This contains all the text for the MixersDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'mixers.dialog.add.title',
    defaultMessage: 'Add mixer'
  },

  form : {
    enterTheNameOfTheMixer: {
      id: 'mixers.dialog.add.form.enterTheNameOfTheMixer',
      defaultMessage: 'Enter the name of the mixer'
    },

    farm: {
      id: 'mixers.dialog.add.form.farm',
      defaultMessage: 'Farm: '
    },

    maximumCargoWeight: {
      id: 'mixers.dialog.add.form.maximumCargoWeight',
      defaultMessage: 'Maximum cargo weight [kg]'
    }
  },

  button: {
    cancel :  {
      id: 'mixers.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    save :  {
      id: 'mixers.dialog.add.button.save',
      defaultMessage: 'Save'
    }
  }
});
