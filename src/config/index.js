/**
 * Created by DzEN on 27.01.2017.
 */
// console.log('process.env.NODE_ENV ', process.env.NODE_ENV, process.env.NODE_ENV !== 'production' ? 'http://localhost:8050/public/assets' : '/public/assets');
const URL_ASSETS = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050/public/assets' : '/public/assets';
const TIMEZONES = [
  {
    id: 0,
    title: 'UTC+0'
  }, {
    id: 1,
    title: 'UTC+1'
  }, {
    id: 2,
    title: 'UTC+2'
  }, {
    id: 3,
    title: 'UTC+3'
  }, {
    id: 4,
    title: 'UTC+4'
  }
];

const URLS = {
  FARMS: 'common/farms/',
  INGREDIENTS: 'common/:farmId/ingredients/',
  ANIMALFEEDS: 'common/:farmId/animalfeeds/',
  GROUPS: 'common/:farmId/groups/',
  TRANSFERS: 'common/:farmId/transfers/',
  RATIONS: 'common/:farmId/rations/',
  RATION_ADD: 'common/:farmId/rations/add/',
  RATION_EDIT: 'common/:farmId/rations/edit/:rationId/',
  PLANNING: 'common/:farmId/planning/',
  DELIVERIES: 'common/:farmId/deliveries/',
  ANIMALFEEDDELIVERY: 'common/:farmId/animalfeeddelivery/',
  LOADINGCOUNTS: 'common/:farmId/loadingcounts/',
  STOCKS: 'common/:farmId/stocks/',
  SCHEDULES: 'common/:farmId/schedules/',
  SCHEDULE_EDIT: 'common/:farmId/schedules/edit/:scheduleId/',
  HISTORY: 'common/:farmId/history/',
  WORKSHEET : 'common/:farmId/worksheet/',
  REPORT : 'common/:farmId/report/',
  MIXERS: 'admin/mixers/',
  CUSTOMERS: 'admin/customers/',
  USERGROUPS: 'admin/usergroups/',
  LOGIN : 'login/',
  REGISTER : 'languageSelect/'
};
const MENU_ITEMS = [
  {
    name: 'farms',
    title: 'Ферми',
    locked: false,
    visible: true,
    active: false,
    disable: [
      'schedules',
      'groups',
      'ingredients',
      'feed',
      'deliveries',
      'animalfeeddelivery',
      'rations',
      'transfers',
      'stocks',
      'loadingcounts',
      'history',
      'animalfeeds',
      'worksheet',
      'report'
    ],
    mode: 'MODE/COMMON',
    menu: 'farms',
    urlTemplate: URLS.FARMS,
    indexForMode: true
  },
  {
    name: 'loadingcounts',
    title: 'Роздачі',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'loadingcounts',
    urlTemplate: URLS.LOADINGCOUNTS
  },
  {
    name: 'schedules',
    title: 'Планування',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'schedules',
    urlTemplate: URLS.SCHEDULES
  },
  {
    name: 'groups',
    title: 'Групи',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'groups',
    urlTemplate: URLS.GROUPS
  },
  {
    name: 'transfers',
    title: 'Переведення',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'transfers',
    urlTemplate: URLS.TRANSFERS
  },
  {
    name: 'ingredients',
    title: 'Інгредієнти',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'ingredients',
    urlTemplate: URLS.INGREDIENTS
  },
  {
    name: 'animalfeeds',
    title: 'Комбікорм',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'animalfeeds',
    urlTemplate: URLS.ANIMALFEEDS
  },
  {
    name: 'feed',
    title: 'Комбікорм',
    locked: true,
    visible: false,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'feed',
    urlTemplate: URLS.FARMS
  },
  {
    name: 'deliveries',
    title: 'Поставки',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'deliveries',
    urlTemplate: URLS.DELIVERIES
  },
  {
    name: 'animalfeeddelivery',
    title: 'Поставки(корм)',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'animalfeeddelivery',
    urlTemplate: URLS.ANIMALFEEDDELIVERY
  },
  {
    name: 'stocks',
    title: 'Запаси',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'stocks',
    urlTemplate: URLS.STOCKS
  },
  {
    name: 'rations',
    title: 'Раціони',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'rations',
    urlTemplate: URLS.RATIONS
  },
  {
    name: 'history',
    title: 'Історія',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'history',
    urlTemplate: URLS.HISTORY
  },
  {
    name: 'report',
    title: 'Звіти',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'report',
    urlTemplate: URLS.REPORT
  },
  {
    name: 'worksheet',
    title: 'Worksheet',
    locked: true,
    visible: true,
    active: false,
    mode: 'MODE/COMMON',
    menu: 'worksheet',
    urlTemplate: URLS.WORKSHEET
  },
  {
    name: 'mixers',
    title: 'Міксери',
    locked: false,
    visible: true,
    active: false,
    mode: 'MODE/ADMIN',
    menu: 'mixers',
    urlTemplate: URLS.MIXERS,
    indexForMode: true
  },
  {
    name: 'usergroups',
    title: 'Групи користувачів',
    locked: false,
    visible: true,
    active: false,
    mode: 'MODE/ADMIN',
    menu: 'usergroups',
    urlTemplate: URLS.USERGROUPS
  },
  {
    name: 'customers',
    title: 'Користувачі',
    locked: false,
    visible: true,
    active: false,
    mode: 'MODE/ADMIN',
    menu: 'customers',
    urlTemplate: URLS.CUSTOMERS
  }
];
const PERMISSIONS_AND_MENU_ITEMS = {
  'farms': 'manager.farm.view',
  'loadingcounts': 'manager.loadingcount.view',
  'schedules': 'schedule.ration.view',
  'groups': 'manager.group.view',
  'transfers': 'manager.grouptransfer.view',
  'ingredients': 'manager.ingredient.view',
  'animalfeeds' : 'manager.animalfeed.view',
  'deliveries': 'manager.delivery.view',
  'animalfeeddelivery': 'manager.animalfeeddelivery.view',
  'stocks': 'manager.stock.view',
  'rations': 'manager.ration.view',
  'mixers': 'manager.mixer.view',
  'usergroups': 'permission.perm_group.view',
  'customers': 'permission.employee.view',
  'history': [
    'history.farm.view',
    'history.ration.view',
    'history.group.view',
    'history.ingredient.view',
    'history.loadingcount.view',
    'history.grouptransfer.view',
    'history.grouptransferlist.view',
    'history.animalfeed.view',
    'history.animalfeeddelivery.view',
    'history.delivery.view',
    'history.mixer.view',
    'history.employee.view',
    'history.perm_group.view'
  ],
  'worksheet': 'report.worksheet.view',
  'report': 'report.report.view'
};

export default {
  URL_ASSETS,
  TIMEZONES,
  URLS,
  MENU_ITEMS,
  PERMISSIONS_AND_MENU_ITEMS
};
