/*
 * TableHistoryRations Messages
 *
 * This contains all the text for the TableHistoryRations component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  extendInfo : {
    id: 'history.rations.table.header.extendInfo',
    defaultMessage: 'Additional'
  },
  name: {
    id: 'history.rations.table.header.name',
    defaultMessage: 'Name'
  },
  fullName: {
    id: 'history.rations.table.header.fullName',
    defaultMessage: 'Full name'
  },
  autoLoad: {
    id: 'history.rations.table.header.autoLoad',
    defaultMessage: 'Auto load'
  },
  autoSchedule: {
    id: 'history.rations.table.header.autoSchedule',
    defaultMessage: 'Auto schedule'
  },
  coefficient: {
    id: 'history.rations.table.header.coefficient',
    defaultMessage: 'Coefficient'
  },
  user: {
    id: 'history.rations.table.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.rations.table.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.rations.table.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.rations.table.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.rations.table.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.rations.table.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
