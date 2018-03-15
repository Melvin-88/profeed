/*
 * TableHistoryLoadingCounts Messages
 *
 * This contains all the text for the TableHistoryLoadingCounts component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'history.loadingcounts.table.header.name',
    defaultMessage: 'Name'
  },
  ordering: {
    id: 'history.loadingcounts.table.header.ordering',
    defaultMessage: 'Ordering'
  },
  user: {
    id: 'history.loadingcounts.table.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.loadingcounts.table.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.loadingcounts.table.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.loadingcounts.table.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.loadingcounts.table.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.loadingcounts.table.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
