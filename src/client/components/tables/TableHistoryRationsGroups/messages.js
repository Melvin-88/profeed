/*
 * TableHistoryRationsLoadingCounts Messages
 *
 * This contains all the text for the TableHistoryRationsLoadingCounts component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title : {
    id: 'history.rationsgroups.title',
    defaultMessage: 'Groups'
  },
  name: {
    id: 'history.rationsgroups.header.name',
    defaultMessage: 'Name'
  },
  coefficient: {
    id: 'history.rationsgroups.header.coefficient',
    defaultMessage: 'Coefficient'
  },
  animalCount: {
    id: 'history.rationsgroups.header.animalCount',
    defaultMessage: 'Animal count'
  },
  lactating: {
    id: 'history.rationsgroups.header.lactating',
    defaultMessage: 'Lactating'
  },
  ordering: {
    id: 'history.rationsgroups.header.ordering',
    defaultMessage: 'Ordering'
  },
  plannedWeight: {
    id: 'history.rationsgroups.header.plannedWeight',
    defaultMessage: 'Planned weight'
  },
  plannedWeightDm: {
    id: 'history.rationsgroups.header.plannedWeightDm',
    defaultMessage: 'Planned dry matter weight'
  },
  typeAction : {
    '+' : {
      id : 'history.rationsgroups.body.type.add',
      defaultMessage : 'Added'
    },
    '-' : {
      id : 'history.rationsgroups.body.type.delete',
      defaultMessage : 'Deleted'
    },
    '~' : {
      id : 'history.rationsgroups.body.type.edit',
      defaultMessage : 'Edited'
    }
  },
  type: {
    id: 'history.rationsgroups.header.type',
    defaultMessage: 'Type'
  }
});
