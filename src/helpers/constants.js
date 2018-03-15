/**
 * Created by Tanya on 28.03.2017.
 */
export const TIMEZONES = [
  {
    id: 1,
    tz: 'Europe/Kiev'
  },
  {
    id: 2,
    tz: 'Europe/Moscow'
  },
  {
    id: 3,
    tz: 'Europe/London'
  }
];

export const LANGUAGES = [
  { id: 0, title: 'Українська', key : 'uk' },
  { id: 1, title: 'English', key : 'en' },
  { id: 2, title: 'Polska', key : 'pl' },
  { id: 3, title: 'Russian', key : 'ru' },
  { id: 4, title: 'Germany', key : 'de' }
];

export const BORDERS_PERCENT_COEFFICIENT = {
  MIN: -1,
  MAX: 200
};

export const PAGE_TYPE = {
  EDIT: 'PAGE_TYPE/EDIT',
  ADD: 'PAGE_TYPE/ADD'
};

export const STATUSES = {
  '1': 'waited',
  '2': 'in process',
  '3': 'completed'
};

export const MODE = {
  COMMON: 'MODE/COMMON',
  ADMIN: 'MODE/ADMIN'
};

export const USER_LEVEL_ACCESS = {
  ADMIN: 1,
  STUFF: 2,
  CLIENT: 3,
  EMPLOYEE: 4
};

export const ADMIN_PERMISSION = [
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 1,
    'label': 'manager',
    'name': 'farm',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 2,
    'label': 'manager',
    'name': 'ration',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 3,
    'label': 'manager',
    'name': 'group',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 4,
    'label': 'manager',
    'name': 'ingredient',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 5,
    'label': 'manager',
    'name': 'stock',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 6,
    'label': 'manager',
    'name': 'loadingcount',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 7,
    'label': 'manager',
    'name': 'animalfeed',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 8,
    'label': 'manager',
    'name': 'grouptransfer',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 9,
    'label': 'manager',
    'name': 'grouptransferlist',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 10,
    'label': 'manager',
    'name': 'animalfeeddelivery',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 11,
    'label': 'manager',
    'name': 'delivery',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 12,
    'label': 'manager',
    'name': 'mixer',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 13,
    'label': 'permission',
    'name': 'employee',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 14,
    'label': 'permission',
    'name': 'perm_group',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 15,
    'label': 'permission',
    'name': 'groupsetting',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 16,
    'label': 'schedule',
    'name': 'ration',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 17,
    'label': 'schedule',
    'name': 'trackerloading',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 18,
    'label': 'schedule',
    'name': 'trackeruploading',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 19,
    'label': 'history',
    'name': 'farm',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 20,
    'label': 'history',
    'name': 'ration',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 24,
    'label': 'history',
    'name': 'group',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 25,
    'label': 'history',
    'name': 'ingredient',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 26,
    'label': 'history',
    'name': 'loadingcount',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 27,
    'label': 'history',
    'name': 'grouptransfer',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 28,
    'label': 'history',
    'name': 'grouptransferlist',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 29,
    'label': 'history',
    'name': 'animalfeed',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 31,
    'label': 'history',
    'name': 'animalfeeddelivery',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 32,
    'label': 'history',
    'name': 'delivery',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 33,
    'label': 'history',
    'name': 'mixer',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 34,
    'label': 'history',
    'name': 'employee',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 35,
    'label': 'history',
    'name': 'perm_group',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 36,
    'label': 'report',
    'name': 'reportlist',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 37,
    'label': 'report',
    'name': 'report',
    'is_delete': false
  },
  {
    'view': true,
    'add': true,
    'change': true,
    'delete': true,
    'id': 38,
    'label': 'report',
    'name': 'worksheet',
    'is_delete': false
  }
];

export const DEFAULT_LOCALE = 'en';

export const HISTORY_CHAPTERS = [
  {
    id: 1,
    name: 'farms',
    modelSelector: 'history.farm.view',
    farm: true
  },
  {
    id: 2,
    name: 'groups',
    modelSelector: 'history.group.view',
    farm: true
  },
  {
    id: 3,
    name: 'loadingcounts',
    modelSelector: 'history.loadingcount.view',
    farm: true
  },
  {
    id: 4,
    name: 'rations',
    modelSelector: 'history.ration.view',
    farm: true
  },
  {
    id: 5,
    name: 'ingredients',
    modelSelector: 'history.ingredient.view',
    farm: true
  },
  {
    id: 6,
    name: 'delivery',
    modelSelector: 'manager.delivery.view',
    farm: true
  },
  {
    id: 7,
    modelSelector: 'history.grouptransfer.view',
    name: 'grouptransfers',
    farm: true
  },
  {
    id: 8,
    modelSelector: 'history.grouptransferlist.view',
    name: 'grouptransferlist',
    farm: true
  },
  {
    id: 9,
    modelSelector: 'history.animalfeed.view',
    name: 'animalfeeds',
    farm: true
  },
  {
    id: 10,
    modelSelector: 'history.animalfeeddelivery.view',
    name: 'afdelivery',
    farm: true
  },
  {
    id: 11,
    modelSelector: 'history.mixer.view',
    name: 'mixers',
    farm: true
  },
  {
    id: 12,
    modelSelector: 'history.employee.view',
    name: 'employees'
  },
  {
    id: 13,
    modelSelector: 'history.perm_group.view',
    name: 'auth_groups',
    farm: true
  }
];

export const TRANSFER_TYPES = {
  ADD: { title: 'add', id: 0 },
  REMOVE: { title: 'remove', id: 1 },
  SWAP: { title: 'swap', id: 2 }
};

export const TRANSFER_TYPES_ARR = [
  { id: 0, title: 'add' },
  { id: 1, title: 'remove' },
  { id: 2, title: 'swap' }
];
