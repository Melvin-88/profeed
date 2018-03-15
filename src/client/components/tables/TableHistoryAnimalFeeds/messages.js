/*
 * TableHistoryFarms Messages
 *
 * This contains all the text for the TableHistoryFarms component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'history.animalfeeds.header.name',
    defaultMessage: 'Name'
  },
  language: {
    id: 'history.animalfeeds.header.language',
    defaultMessage: 'Language'
  },
  timezone: {
    id: 'history.animalfeeds.header.timezone',
    defaultMessage: 'Timezone'
  },
  user: {
    id: 'history.animalfeeds.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.animalfeeds.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.animalfeeds.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.animalfeeds.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.animalfeeds.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.animalfeeds.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
