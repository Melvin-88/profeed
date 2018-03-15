/*
 * TableHistoryFarms Messages
 *
 * This contains all the text for the TableHistoryFarms component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  name: {
    id: 'history.animalfeedsdelivery.header.name',
    defaultMessage: 'Name'
  },
  language: {
    id: 'history.animalfeedsdelivery.header.language',
    defaultMessage: 'Language'
  },
  timezone: {
    id: 'history.animalfeedsdelivery.header.timezone',
    defaultMessage: 'Timezone'
  },
  user: {
    id: 'history.animalfeedsdelivery.header.user',
    defaultMessage: 'User'
  },
  type: {
    id: 'history.animalfeedsdelivery.header.type',
    defaultMessage: 'Type'
  },
  date: {
    id: 'history.animalfeedsdelivery.header.date',
    defaultMessage: 'Date of action'
  },
  typeAction : {
    '+' : {
      id : 'history.animalfeedsdelivery.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.animalfeedsdelivery.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.animalfeedsdelivery.body.type.edit',
      defaultMessage : 'Edited'
    }
  }
});
