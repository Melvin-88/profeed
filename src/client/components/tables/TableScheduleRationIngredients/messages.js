/*
 * TableScheduleRationIngredients Messages
 *
 * This contains all the text for the TableScheduleRationIngredients component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'scheduleRation.ingredientsTable.title',
    defaultMessage: 'The diet in kg / head'
  },

  headers: {
    name: {
      id: 'scheduleRation.ingredientsTable.header.name',
      defaultMessage: 'Name'
    },

    freshWeight: {
      id: 'scheduleRation.ingredientsTable.header.freshWeight',
      defaultMessage: 'Fresh weight'
    },

    dryWeight: {
      id: 'scheduleRation.ingredientsTable.header.dryWeight',
      defaultMessage: 'Dry weight'
    },

    price: {
      id: 'scheduleRation.ingredientsTable.header.price',
      defaultMessage: 'Price'
    }
  },

  note: {
    id: 'scheduleRation.ingredientsTable.note',
    defaultMessage: '* - value considering factors'
  }
});
