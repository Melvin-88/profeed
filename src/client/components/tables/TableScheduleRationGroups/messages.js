/*
 * TableScheduleRationGroups Messages
 *
 * This contains all the text for the TableScheduleRationGroups component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'scheduleRation.groupsTable.title',
    defaultMessage: 'The diet in kg / head'
  },

  headers: {
    animalGroup: {
      id: 'scheduleRation.groupsTable.header.animalGroup',
      defaultMessage: 'Animal group'
    },

    numberHeads: {
      id: 'scheduleRation.groupsTable.header.numberHeads',
      defaultMessage: 'Number of heads'
    },

    coefficient: {
      id: 'scheduleRation.groupsTable.header.coefficient',
      defaultMessage: 'Factor in the group [%]'
    },

    freshWeight: {
      id: 'scheduleRation.groupsTable.header.freshWeight',
      defaultMessage: 'Fresh weight'
    },

    dryWeight: {
      id: 'scheduleRation.groupsTable.header.dryWeight',
      defaultMessage: 'Dry weight'
    },

    allWeight: {
      id: 'scheduleRation.groupsTable.header.allWeight',
      defaultMessage: 'Total fresh weight [kg]'
    }
  },

  note: {
    id: 'scheduleRation.groupsTable.note',
    defaultMessage: '* - value considering factors'
  }
});
