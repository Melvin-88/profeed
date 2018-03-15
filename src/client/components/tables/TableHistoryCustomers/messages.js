/*
 * TableHistoryFarms Messages
 *
 * This contains all the text for the TableHistoryFarms component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'history.customers.header.name',
    defaultMessage: 'Name'
  },
  language: {
    id: 'history.customers.header.language',
    defaultMessage: 'Language'
  },
  timezone: {
    id: 'history.customers.header.timezone',
    defaultMessage: 'Timezone'
  },
  user: {
    id: 'history.customers.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.customers.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.customers.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.customers.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.customers.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.customers.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
