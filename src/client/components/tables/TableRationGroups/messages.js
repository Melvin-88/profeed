/*
 * TableRationGroups Messages
 *
 * This contains all the text for the TableRationGroups component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'ration.groupsTable.title',
    defaultMessage: 'Fixing the diet groups of animals'
  },

  headers: {
    checkbox: {
      id: 'ration.groupsTable.header.checkbox',
      defaultMessage: ' '
    },

    animalGroup: {
      id: 'ration.groupsTable.header.animalGroup',
      defaultMessage: 'Animal group'
    },

    numberHeads: {
      id: 'ration.groupsTable.header.numberHeads',
      defaultMessage: 'Number of heads'
    },

    coefficient: {
      id: 'ration.groupsTable.header.coefficient',
      defaultMessage: 'Factor in the group [%]'
    },

    freshWeight: {
      id: 'ration.groupsTable.header.freshWeight',
      defaultMessage: 'Fresh weight'
    },

    dryWeight: {
      id: 'ration.groupsTable.header.dryWeight',
      defaultMessage: 'Dry weight'
    },

    allWeight: {
      id: 'ration.groupsTable.header.allWeight',
      defaultMessage: 'Total fresh weight [kg]'
    }
  },

  button: {
    add: {
      id: 'ration.groupsTable.button.add',
      defaultMessage: 'Add'
    },

    edit: {
      id: 'ration.groupsTable.button.edit',
      defaultMessage: 'Edit'
    },

    remove: {
      id: 'ration.groupsTable.button.remove',
      defaultMessage: 'Remove'
    }
  },

  total: {
    id: 'ration.groupsTable.total',
    defaultMessage: 'Total: '
  },

  note: {
    id: 'ration.groupsTable.note',
    defaultMessage: '* - value considering factors'
  }
});
