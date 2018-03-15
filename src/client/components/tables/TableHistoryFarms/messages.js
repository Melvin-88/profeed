/*
 * TableHistoryFarms Messages
 *
 * This contains all the text for the TableHistoryFarms component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'history.farms.table.header.name',
    defaultMessage: 'Name'
  },
  language: {
    id: 'history.farms.table.header.language',
    defaultMessage: 'Language'
  },
  timezone: {
    id: 'history.farms.table.header.timezone',
    defaultMessage: 'Timezone'
  },
  user: {
    id: 'history.farms.table.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.farms.table.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.farms.table.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.farms.table.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.farms.table.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.farms.table.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
