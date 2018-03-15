/*
 * TableHistoryFarms Messages
 *
 * This contains all the text for the TableHistoryFarms component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'history.usergroups.header.name',
    defaultMessage: 'Name'
  },
  language: {
    id: 'history.usergroups.header.language',
    defaultMessage: 'Language'
  },
  timezone: {
    id: 'history.usergroups.header.timezone',
    defaultMessage: 'Timezone'
  },
  user: {
    id: 'history.usergroups.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.usergroups.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.usergroups.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.usergroups.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.usergroups.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.usergroups.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
