/*
 * DeliveryTable Messages
 *
 * This contains all the text for the DeliveryTable component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  checkbox: {
    id: 'delivery.table.header.checkbox',
    defaultMessage: ' '
  },

  ingredient: {
    id: 'delivery.table.header.ingredient',
    defaultMessage: 'Ingredient'
  },

  amount: {
    id: 'delivery.table.header.quantity',
    defaultMessage: 'Amount [kg]'
  },

  price: {
    id: 'delivery.table.header.amount',
    defaultMessage: 'The price of [$]'
  }
});
