/*
 * TableHistoryGroupTransferList Messages
 *
 * This contains all the text for the TableHistoryGroupTransferList component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'history.groupTransferList.table.header.name',
    defaultMessage: 'Name'
  },
  transferType: {
    id: 'history.groupTransferList.table.header.transferType',
    defaultMessage: 'Transfer type'
  },
  transferTypes : {
    add : {
      id: 'history.groupTransferList.table.transferTypes.add',
      defaultMessage: 'Add'
    },
    remove : {
      id: 'history.groupTransferList.table.transferTypes.remove',
      defaultMessage: 'Remove'
    },
    swap : {
      id: 'history.groupTransferList.table.transferTypes.swap',
      defaultMessage: 'Swap'
    }
  },
  user: {
    id: 'history.groupTransferList.table.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.groupTransferList.table.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.groupTransferList.table.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.groupTransferList.table.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.groupTransferList.table.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.groupTransferList.table.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
