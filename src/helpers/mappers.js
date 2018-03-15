/**
 * Created by Tanya on 11.04.2017.
 */
import objectMapper from 'object-mapper';

// From server JSON
const SCHEDULE_MAP = {
  'id': 'schedule.id',
  'ration': 'schedule.ration',
  'name': 'schedule.name',
  'ordering': 'schedule.ordering',
  'coefficient': 'schedule.coefficient',
  'planned_on': 'schedule.planned',
  'auto_load': 'schedule.autoLoad',
  'schedule_groups[]' : {
    'key':'groups',
    'transform': (val) => val.map((item) => objectMapper(item, SCHEDULE_GROUPS_MAP))
  },
  'schedule_ingredients[]' : {
    'key':'ingredients',
    'transform': (val) => val.map((item) => objectMapper(item, SCHEDULE_INGREDIENTS_MAP))
  },
  'schedule_loading_count[]' : {
    'key':'loadingCount',
    'transform': (val) => objectMapper(val, SCHEDULE_LOADING_COUNT_MAP)
  }
};
const SCHEDULE_GROUPS_MAP = {
  'id': 'id',
  'name': 'name',
  'ordering': 'ordering',
  'coefficient': 'coefficient',
  'animal_count': 'animalCount',
  'lactating': 'lactating',
  'uploaded_at': 'uploadedAt',
  'planned_weight': 'plannedWeight',
  'planned_weight_dm': 'plannedWeightDm',
  'fact_weight': 'factWeight',
  'fact_weight_dm': 'factWeightDm'
};
const SCHEDULE_INGREDIENTS_MAP = {
  'id': 'id',
  'name': 'name',
  'ordering': 'ordering',
  'weight': 'weight',
  'dry_matter': 'dryMatter',
  'is_animalfeed': 'isAnimalfeed',
  'ignored_in_report': 'ignoredInReport',
  'loaded_at': 'loadedAt',
  'planned_weight': 'plannedWeight',
  'planned_weight_dm': 'plannedWeightDm',
  'fact_weight': 'factWeight',
  'fact_weight_dm': 'factWeightDm'
};
const SCHEDULE_LOADING_COUNT_MAP = {
  'id': 'id',
  'name': 'name',
  'coefficient': 'coefficient',
  'status': 'status',
  'schedule_mixer': 'scheduleMixer',
  'schedule_mixer_name': 'scheduleMixerName',
  'started_at': 'startedAt',
  'finished_at': 'finishedAt',
  'worker': 'worker',
  'planned_weight': 'plannedWeight',
  'planned_weight_dm': 'plannedWeightDm',
  'fact_weight': 'factWeight',
  'fact_weight_dm': 'factWeightDm'
};
const MIXER_MAP = {
  'id': 'id',
  'farm': 'farm',
  'name': 'name',
  'max_weight': 'maxWeight'
};
const CUSTOMER_MAP = {
  'id': 'id',
  'username': 'username',
  'first_name': 'firstName',
  'last_name': 'lastName',
  'email': 'email',
  'phone_number': 'phoneNumber',
  'is_active': 'isActive',
  'farms': 'farms',
  'groups': 'groups',
  'profile.about' : 'about'
};
const WORKSHEET_MAP = {
  'id': 'id',
  'farm': 'farm',
  'farm_name': 'farmName',
  'name': 'name',
  'company_name': 'companyName',
  'ind_code': 'indCode',
  'structure_name': 'structureName',
  'farm_full_name': 'farmFullName',
  'appoint': 'appoint',
  'structure_manager': 'structureManager',
  'farm_manager': 'farmManager',
  'zootechnics': 'zootechnics',
  'accountant': 'accountant',
  'weigher': 'weigher'
};

const REPORT_MAP = {
  'id': 'id',
  'name': 'name',
  'with_worksheet': 'withWorksheet'
};

const USER_REPORT_MAP = {
  'id': 'id',
  'group': 'group',
  'group_name': 'groupName',
  'farm': 'farm',
  'farm_name': 'farmName',
  'reports[]': {
    'key' : 'reports',
    'transform' : (val) => val.map((item) => objectMapper(item, REPORT_REPORT_ITEM_MAP))
  }
};

const REPORT_REPORT_ITEM_MAP = {
  'id': 'id',
  'name': 'name',
  'with_worksheet' : 'withWorksheet',
  'worksheets' : 'worksheets'
};

const USER_REPORT_MAP_REVERSE = {
  'id': 'id',
  'group': 'group',
  'groupName' : 'group_name',
  'farm': 'farm',
  'farmName': 'farm_name',
  'reports[]': {
    'key' : 'reports',
    'transform' : (val) => val.map((item) => objectMapper(item, REPORT_REPORT_ITEM_MAP_REVERSE))
  }
};

const REPORT_REPORT_ITEM_MAP_REVERSE = {
  'id': 'id',
  'name': 'name',
  'withWorksheet' : 'with_worksheet',
  'worksheets' : 'worksheets'
};

// ======================== From normal object to server JSON =====================
const SCHEDULE_MAP_REVERSE = {
  'schedule.ration' : 'ration',
  'schedule.name' : 'name',
  'schedule.ordering' : 'ordering',
  'schedule.coefficient' : 'coefficient',
  'schedule.planned' : 'planned_on',
  'schedule.autoLoad' : 'auto_load',
  'schedule.autoSchedule' : 'auto_schedule',
  // 'schedule.id' : 'id',
  'groups[]' : {
    'key':'schedule_groups',
    'transform': (val) => val.map((item) => objectMapper(item, SCHEDULE_GROUPS_MAP_REVERSE))
  },
  'ingredients[]' : {
    'key':'schedule_ingredients',
    'transform': (val) => val.map((item) => objectMapper(item, SCHEDULE_INGREDIENTS_MAP_REVERSE))
  },
  'loadingCount' : {
    'key' : 'schedule_loading_count',
    'transform' : (val) => objectMapper(val, SCHEDULE_LOADING_COUNT_MAP_REVERSE)
  }
};
const SCHEDULE_GROUPS_MAP_REVERSE = {
  'id':'id',
  'name':'name',
  'ordering':'ordering',
  'coefficient':'coefficient',
  'animalCount':'animal_count',
  'lactating':'lactating',
  'uploadedAt':'uploaded_at',
  'plannedWeight':'planned_weight',
  'plannedWeightDm':'planned_weight_dm',
  'factWeight':'fact_weight',
  'factWeightDm':'fact_weight_dm'
};
const SCHEDULE_INGREDIENTS_MAP_REVERSE = {
  'id': 'id',
  'name': 'name',
  'ordering': 'ordering',
  'weight': 'weight',
  'dryMatter' : 'dry_matter',
  'isAnimalfeed' : 'is_animalfeed',
  'ignoredInReport' : 'ignored_in_report',
  'loadedAt' : 'loaded_at',
  'plannedWeight' : 'planned_weight',
  'plannedWeightDm' : 'planned_weight_dm',
  'factWeight' : 'fact_weight',
  'factWeightDm' : 'fact_weight_dm'
};
const SCHEDULE_LOADING_COUNT_MAP_REVERSE = {
  'id': 'id',
  'name': 'name',
  'coefficient': 'coefficient',
  'status': 'status',
  'scheduleMixer': 'schedule_mixer',
  'scheduleMixerName': 'schedule_mixer_name',
  'startedAt': 'started_at',
  'finishedAt': 'finished_at',
  'worker': 'worker',
  'plannedWeight': 'planned_weight',
  'plannedWeightDm': 'planned_weight_dm',
  'factWeight': 'fact_weight',
  'factWeightDm': 'fact_weight_dm'
};
const SCHEDULE_MAP_ADD_REVERSE = {
  'checkedRation' : 'ration',
  'planned': 'planned_on',
  'checkedLoadingCount' : 'loading_count'
};
const MIXER_MAP_DIALOG_REVERSE = {
  'id': 'id',
  'farm': 'farm',
  'name': 'name',
  'maxWeight': 'max_weight'
};
const CUSTOMER_MAP_REVERSE = {
  'id': 'id',
  'username': 'username',
  'firstName': 'first_name',
  'lastName': 'last_name',
  'email': 'email',
  'phoneNumber': 'phone_number',
  'active': 'is_active',
  'farms': 'farms',
  'groups': 'groups',
  'password': 'password',
  'about' : 'profile.about'
};
const WORKSHEET_MAP_REVERSE = {
  'id': 'id',
  'farm': 'farm',
  'farmName': 'farm_name',
  'name': 'name',
  'companyName': 'company_name',
  'indCode': 'ind_code',
  'structureName': 'structure_name',
  'farmFullName': 'farm_full_name',
  'appoint': 'appoint',
  'structureManager': 'structure_manager',
  'farmManager': 'farm_manager',
  'zootechnics': 'zootechnics',
  'accountant': 'accountant',
  'weigher': 'weigher'
};

/**
 *
 * @param obj
 * @param map
 * @return {*}
 */
function mapperExec(obj, map) {
  try {
    return objectMapper(obj, map);
  } catch (e) {
    console.error('Map ERROR ', e);
    return null;
  }
}
/**
 *
 * @param schedule
 * @return {{schedule: {}, groups: Array, loadingCount: {}, ingredients: Array}} or null
 */
export function mapScheduleEdit(schedule) {
  return mapperExec(schedule, SCHEDULE_MAP);
}
/**
 *
 * @param schedule
 * @return {*}
 */
export function mapScheduleReverseEdit(schedule) {
  return mapperExec(schedule, SCHEDULE_MAP_REVERSE);
}
/**
 *
 * @param schedule
 * @return {*}
 */
export function mapScheduleReverseAdd(schedule) {
  return mapperExec(schedule, SCHEDULE_MAP_ADD_REVERSE);
}
/**
 *
 * @param mixer
 * @return {*}
 */
export function mapMixer(mixer) {
  return mapperExec(mixer, MIXER_MAP);
}
/**
 *
 * @param mixer
 * @return {*}
 */
export function mapMixerReverseAdd(mixer) {
  return mapperExec(mixer, MIXER_MAP_DIALOG_REVERSE);
}
/**
 *
 * @param mixer
 * @return {*}
 */
export function mapMixerReverseEdit(mixer) {
  return mapperExec(mixer, MIXER_MAP_DIALOG_REVERSE);
}
/**
 *
 * @param customer
 * @return {*}
 */
export function mapCustomers(customer) {
  return mapperExec(customer, CUSTOMER_MAP);
}
/**
 *
 * @param customer
 * @return {*}
 */
export function mapCustomersReverse(customer) {
  return mapperExec(customer, CUSTOMER_MAP_REVERSE);
}
/**
 *
 * @param worksheet
 * @return {*}
 */
export function mapWorksheets(worksheet) {
  return mapperExec(worksheet, WORKSHEET_MAP);
}
/**
 *
 * @param worksheet
 * @return {*}
 */
export function mapWorksheetsReverse(worksheet) {
  return mapperExec(worksheet, WORKSHEET_MAP_REVERSE);
}
/**
 *
 * @param report
 * @return {*}
 */
export function mapUserReports(report) {
  return mapperExec(report, USER_REPORT_MAP);
}
/**
 *
 * @param report
 * @return {*}
 */
export function mapUserReportsReverse(report) {
  return mapperExec(report, USER_REPORT_MAP_REVERSE);
}
/**
 *
 * @param report
 * @return {*}
 */
export function mapReport(report) {
  return mapperExec(report, REPORT_MAP);
}
