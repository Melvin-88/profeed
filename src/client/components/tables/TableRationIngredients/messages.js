/*
 * TableRationIngredients Messages
 *
 * This contains all the text for the TableRationIngredients component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'ration.ingredientsTable.title',
    defaultMessage: 'The diet in kg / head'
  },

  headers: {
    checkbox: {
      id: 'ration.ingredientsTable.header.checkbox',
      defaultMessage: ' '
    },

    name: {
      id: 'ration.ingredientsTable.header.animalGroup',
      defaultMessage: 'Ingredient name'
    },

    freshWeight: {
      id: 'ration.ingredientsTable.header.freshWeight',
      defaultMessage: 'Fresh weight'
    },

    dryWeight: {
      id: 'ration.ingredientsTable.header.dryWeight',
      defaultMessage: 'Dry weight'
    }
  },

  button: {
    add: {
      id: 'ration.ingredientsTable .button.add',
      defaultMessage: 'Add'
    },

    edit: {
      id: 'ration.ingredientsTable .button.edit',
      defaultMessage: 'Edit'
    },

    remove: {
      id: 'ration.ingredientsTable .button.remove',
      defaultMessage: 'Remove'
    }
  },

  total: {
    id: 'ration.ingredientsTable .total',
    defaultMessage: 'Total: '
  },

  note: {
    id: 'ration.ingredientsTable .note',
    defaultMessage: '* - value considering factors'
  }
});
