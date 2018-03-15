/*
 * StocksTable Messages
 *
 * This contains all the text for the StocksTable component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  ingredient: {
    id: 'stocks.table.header.ingredient',
    defaultMessage: 'Ingredient'
  },
  dailyIntake: {
    id: 'stocks.table.header.dailyIntake',
    defaultMessage: 'Daily intake [kg]'
  },

  remainingDays: {
    id: 'stocks.table.header.remainingDays',
    defaultMessage: 'Remaining days'
  },

  theBalanceInStockKg: {
    id: 'stocks.table.header.theBalanceInStockKg',
    defaultMessage: 'The balance in stock [kg]'
  },

  theBalanceInDtock: {
    id: 'stocks.table.header.theBalanceInDtock',
    defaultMessage: 'The balance in stock [UAH]'
  }
});
