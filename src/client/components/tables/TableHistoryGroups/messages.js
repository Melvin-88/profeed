/*
 * TableHistoryGroups Messages
 *
 * This contains all the text for the TableHistoryGroups component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'history.groups.table.header.name',
    defaultMessage: 'Name'
  },
  lactating: {
    id: 'history.groups.table.header.lactating',
    defaultMessage: 'Lactating'
  },
  animalCount: {
    id: 'history.groups.table.header.animalCount',
    defaultMessage: 'Animals'
  },
  user: {
    id: 'history.groups.table.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.groups.table.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.groups.table.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.groups.table.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.groups.table.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.groups.table.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
