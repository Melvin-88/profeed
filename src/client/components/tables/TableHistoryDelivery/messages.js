/*
 * TableHistoryDelivery Messages
 *
 * This contains all the text for the TableHistoryDelivery component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  worker: {
    id: 'history.delivery.table.header.worker',
    defaultMessage: 'Worker'
  },
  ingredientName: {
    id: 'history.delivery.table.header.ingredientName',
    defaultMessage: 'Language'
  },
  animalfeedDelivery: {
    id: 'history.delivery.table.header.animalfeedDelivery',
    defaultMessage: 'AF Delivery'
  },
  amount: {
    id: 'history.delivery.table.header.amount',
    defaultMessage: 'Amount'
  },
  price: {
    id: 'history.delivery.table.header.price',
    defaultMessage: 'Price'
  },
  user: {
    id: 'history.delivery.table.header.user',
    defaultMessage: 'User'
  },
  date: {
    id: 'history.delivery.table.header.date',
    defaultMessage: 'Date of action'
  },
  type: {
    id: 'history.delivery.table.header.type',
    defaultMessage: 'Type'
  },
  typeAction : {
    '+' : {
      id : 'history.delivery.table.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.delivery.table.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.delivery.table.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
