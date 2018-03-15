/*
 * TransferDialogs Messages
 *
 * This contains all the text for the TransferDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'transfer.dialog.add.title',
    defaultMessage: 'Add transfer'
  },

  form : {
    transferFromGroup: {
      title: {
        id: 'transfer.dialog.add.form.transferFromGroup.title',
        defaultMessage: 'Transfer from group'
      },

      hint: {
        id: 'transfer.dialog.add.form.transferFromGroup.hint',
        defaultMessage: 'Empty'
      }
    },

    type: {
      title: {
        id: 'transfer.dialog.add.form.type.title',
        defaultMessage: 'Type'
      },

      hint: {
        id: 'transfer.dialog.add.form.type.hint',
        defaultMessage: 'Empty'
      }
    },

    enterQuantityAnimals: {
      id: 'transfer.dialog.add.form.enterQuantityAnimals',
      defaultMessage: 'Enter the number of animals'
    }
  },

  button: {
    cancel: {
      id: 'transfer.dialog.add.button.cancel',
      defaultMessage: 'Cancel'
    },
    add: {
      id: 'transfer.dialog.add.button.save',
      defaultMessage: 'Add'
    }
  }
});
