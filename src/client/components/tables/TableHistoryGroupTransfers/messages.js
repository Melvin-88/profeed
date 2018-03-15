/*
 * TableHistoryGroupTransfers Messages
 *
 * This contains all the text for the TableHistoryGroupTransfers component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  worker: {
    id: 'history.groupTransfers.table.header.worker',
    defaultMessage: 'Worker'
  },
  groupName: {
    id: 'history.groupTransfers.table.header.groupName',
    defaultMessage: 'Group'
  },
  transferListName: {
    id: 'history.groupTransfers.table.header.transferListName',
    defaultMessage: 'Transfer list'
  },
  group2Name: {
    id: 'history.groupTransfers.table.header.group2Name',
    defaultMessage: 'Group to'
  },
  createdAt: {
    id: 'history.groupTransfers.table.header.createdAt',
    defaultMessage: 'Created'
  },
  animalCount: {
    id: 'history.groupTransfers.table.header.timezone',
    defaultMessage: 'Animals'
  },
  user: {
    id: 'history.groupTransfers.table.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.groupTransfers.table.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.groupTransfers.table.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.groupTransfers.table.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.groupTransfers.table.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.groupTransfers.table.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
