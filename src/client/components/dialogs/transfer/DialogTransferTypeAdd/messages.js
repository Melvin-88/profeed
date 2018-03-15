/*
 * TransferDialogs Messages
 *
 * This contains all the text for the TransferDialogs component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'transfer.dialog.add.addTypeType.title',
    defaultMessage: 'Add type transfer'
  },

  form : {
    name: {
      id: 'transfer.dialog.addType.form.transferFromGroup.title',
      defaultMessage: 'Name'
    },

    type: {
      title: {
        id: 'transfer.dialog.addType.form.type.title',
        defaultMessage: 'Type'
      },

      checkbox: {
        addingAnimals: {
          id: 'transfer.dialog.addType.form.type.checkbox.addingAnimals',
          defaultMessage: 'Adding animals'
        },

        subtractionAnimals: {
          id: 'transfer.dialog.addType.form.type.checkbox.subtractionAnimals',
          defaultMessage: 'Subtraction animals'
        },

        transfersBetweenGroups: {
          id: 'transfer.dialog.addType.form.type.checkbox.transfersBetweenGroups',
          defaultMessage: 'Transfers between groups'
        }
      }
    }
  },

  button: {
    cancel: {
      id: 'transfer.dialog.addType.button.cancel',
      defaultMessage: 'Cancel'
    },
    addType: {
      id: 'transfer.dialog.addType.button.save',
      defaultMessage: 'Add type'
    }
  }
});
