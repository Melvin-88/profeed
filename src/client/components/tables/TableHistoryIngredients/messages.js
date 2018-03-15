/*
 * TableHistoryIngredients Messages
 *
 * This contains all the text for the TableHistoryIngredients component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'history.ingredients.table.header.name',
    defaultMessage: 'Name'
  },
  dryMatter: {
    id: 'history.ingredients.table.header.dryMatter',
    defaultMessage: 'Dry matter'
  },
  isAnimalfeed: {
    id: 'history.ingredients.table.header.isAnimalfeed',
    defaultMessage: 'Type of feed'
  },
  ignoredInReport : {
    id: 'history.ingredients.table.header.ignoredInReport',
    defaultMessage: 'Ignored in report'
  },
  user: {
    id: 'history.ingredients.table.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.ingredients.table.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.ingredients.table.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.ingredients.table.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.ingredients.table.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.ingredients.table.body.type.edit',
      defaultMessage : 'Edited'
    }
  },
  typeOfFeed : {
    ingredient : {
      id : 'history.ingredients.table.body.typeOfFeed.ingredient',
      defaultMessage : 'ingredient'
    },
    animalfeed : {
      id : 'history.ingredients.table.body.typeOfFeed.animalfeed',
      defaultMessage : 'animalfeed'
    }
  }
});
