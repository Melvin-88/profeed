/*
 * TableHistoryRationsLoadingCounts Messages
 *
 * This contains all the text for the TableHistoryRationsLoadingCounts component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title : {
    id: 'history.rations.loadingcounts.table.title',
    defaultMessage: 'Loading counts'
  },
  name: {
    id: 'history.rations.loadingcounts.table.header.name',
    defaultMessage: 'Name'
  },
  coefficient: {
    id: 'history.rations.loadingcounts.table.header.coefficient',
    defaultMessage: 'Coefficient'
  },
  ordering: {
    id: 'history.rations.loadingcounts.table.header.ordering',
    defaultMessage: 'Ordering'
  },
  plannedWeight: {
    id: 'history.rations.loadingcounts.table.header.plannedWeight',
    defaultMessage: 'Planned weight'
  },
  plannedWeightDm: {
    id: 'history.rations.loadingcounts.table.header.plannedWeightDm',
    defaultMessage: 'Planned dry matter weight'
  },
  typeAction : {
    '+' : {
      id : 'history.rations.loadingcounts.table.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.rations.loadingcounts.table.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.rations.loadingcounts.table.body.type.edit',
      defaultMessage : 'Edited'
    }
  },
  type: {
    id: 'history.rations.loadingcounts.table.header.type',
    defaultMessage: 'Type'
  }
});
