/*
 * TableHistoryRationsIngredients Messages
 *
 * This contains all the text for the TableHistoryRationsIngredients component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title : {
    id: 'history.rations.ingredients.table.title',
    defaultMessage: 'Ingredients'
  },
  name: {
    id: 'history.rations.ingredients.table.header.name',
    defaultMessage: 'Name'
  },
  dryMatter: {
    id: 'history.rations.ingredients.table.header.dryMatter',
    defaultMessage: 'Dry matter'
  },
  weight : {
    id: 'history.rations.ingredients.table.header.weight',
    defaultMessage: 'Weight'
  },
  ordering: {
    id: 'history.rations.ingredients.table.header.ordering',
    defaultMessage: 'Ordering'
  },
  plannedWeight: {
    id: 'history.rations.ingredients.table.header.plannedWeight',
    defaultMessage: 'Planned weight'
  },
  plannedWeightDm: {
    id: 'history.rations.ingredients.table.header.plannedWeightDm',
    defaultMessage: 'Planned dry matter weight'
  },
  typeAction : {
    '+' : {
      id : 'history.rations.ingredients.table.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.rations.ingredients.table.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.rations.ingredients.table.body.type.edit',
      defaultMessage : 'Edited'
    }
  },
  type: {
    id: 'history.rations.ingredients.table.header.type',
    defaultMessage: 'Type'
  }
});
