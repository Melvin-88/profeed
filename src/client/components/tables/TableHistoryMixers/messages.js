/*
 * TableHistoryFarms Messages
 *
 * This contains all the text for the TableHistoryFarms component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'history.mixers.header.name',
    defaultMessage: 'Name'
  },
  maxWeight: {
    id: 'history.mixers.header.maxWeight',
    defaultMessage: 'Max weight'
  },
  user: {
    id: 'history.mixers.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.mixers.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.mixers.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.mixers.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.mixers.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.mixers.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
