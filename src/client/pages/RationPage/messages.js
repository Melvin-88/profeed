/*
 * RationAdd Messages
 *
 * This contains all the text for the RationPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'ration.title',
    defaultMessage: 'Ration'
  },

  form: {
    enterName: {
      title: {
        id: 'ration.form.enterName.title',
        defaultMessage: 'Enter name: '
      },

      hint: {
        id: 'ration.form.enterName.hint',
        defaultMessage: 'Enter name'
      }
    },

    enterTheFullNameOfTheDiet: {
      title: {
        id: 'ration.form.enterTheFullNameOfTheDiet.title',
        defaultMessage: 'Enter the full name of the diet: '
      },

      hint: {
        id: 'ration.form.enterTheFullNameOfTheDiet.hint',
        defaultMessage: 'Enter the full name of the diet'
      }
    },

    coefficientOfDischarge: {
      id: 'ration.form.coefficientOfDischarge',
      defaultMessage: 'The coefficient of discharge'
    },

    automaticDischarge: {
      id: 'ration.form.automaticDischarge',
      defaultMessage: 'Automatic discharge'
    },

    automaticPlanning: {
      id: 'ration.form.automaticPlanning',
      defaultMessage: 'Automatic planing'
    }
  },

  button : {
    save: {
      id: 'ration.button.save',
      defaultMessage: 'Save'
    },

    cancel: {
      id: 'ration.button.cancel',
      defaultMessage: 'Cancel'
    },

    back: {
      id: 'ration.button.back',
      defaultMessage: 'Back to overview'
    }
  }
});
