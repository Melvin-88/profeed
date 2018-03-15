/*
 * Worksheets Messages
 *
 * This contains all the text for the Worksheets component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    add: {
      id: 'worksheets.dialog.add.title',
      defaultMessage: 'Create worksheet'
    },
    edit : {
      id: 'worksheets.dialog.edit.title',
      defaultMessage: 'Edit worksheet'
    }
  },
  form : {
    name: {
      id: 'worksheets.dialog.form.name',
      defaultMessage: 'Name'
    },

    companyName: {
      id: 'worksheets.dialog.form.companyName',
      defaultMessage: 'Company name'
    },

    indCode: {
      id: 'worksheets.dialog.form.indCode',
      defaultMessage: 'Ident. code'
    },
    structureName: {
      id: 'worksheets.dialog.form.structureName',
      defaultMessage: 'Structure name'
    },
    farmFullName: {
      id: 'worksheets.dialog.form.farmFullName',
      defaultMessage: 'Farm full name'
    },
    appoint: {
      id: 'worksheets.dialog.form.appoint',
      defaultMessage: 'Appoint'
    },
    structureManager: {
      id: 'worksheets.dialog.form.structureManager',
      defaultMessage: 'Structure manager'
    },
    farmManager: {
      id: 'worksheets.dialog.form.farmManager',
      defaultMessage: 'Farm manager'
    },
    zootechnics: {
      id: 'worksheets.dialog.form.zootechnics',
      defaultMessage: 'Zootechnics'
    },
    accountant: {
      id: 'worksheets.dialog.form.accountant',
      defaultMessage: 'Accountant'
    },
    weigher: {
      id: 'worksheets.dialog.form.weigher',
      defaultMessage: 'Weigher'
    }
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
