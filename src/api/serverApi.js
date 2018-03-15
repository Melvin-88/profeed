/**
 * Created by DzEN on 31.01.2017.
 */
import { makeAPIRequest } from './restApi.js';
import { urlQueryMaker } from 'helpers/urlsPrepare';
import cookie from 'react-cookie';

function getToken() {
  const token = cookie.load('auth_token');

  console.log('serverApi | getToken | token ', token);
  return (token || (Object.keys(token).length > 0) ? token : null);
}
/**
 *
 * @param data
 * @return {*}
 */
export function signIn(data) {
  // console.log('serverApi | signIn | data ', data);
  return makeAPIRequest('auth/login/', 'POST', data);
}
/**
 *
 * @param data
 * @return {*}
 */
export function signUp(data) {
  // console.log('serverApi | signIn | data ', data);
  return makeAPIRequest('auth/languageSelect/', 'POST', data);
}
/**
 *
 * @return {*}
 */
export function getFarms() {
  // console.log('serverApi | getFarms | page ');
  return makeAPIRequest('manager/farms/', 'GET', null, getToken());
}
/**
 *
 * @param farm
 * @return {*}
 */
export function addNewFarm(farm) {
  // console.log('serverApi | addNewFarm | data ', farm);
  return makeAPIRequest('manager/farms/', 'POST', farm, getToken());
}
/**
 *
 * @param farm
 * @return {*}
 */
export function editFarm(farm) {
  // console.log('serverApi | addNewFarm | farm ', farm);
  return makeAPIRequest(`manager/farms/${farm.id}/`, 'PUT', farm, getToken());
}
/**
 *
 * @param farm
 * @return {*}
 */
export function deleteFarm(farm) {
  // console.log('serverApi | deleteFarm | data ', farm);
  return makeAPIRequest(`manager/farms/${farm.id}/`, 'DELETE', null, getToken());
}
/**
 *
 * @param id
 * @return {*}
 */
export function getFarm(id) {
  // console.log('serverApi | getFarm | id ', id);
  return makeAPIRequest(`manager/farms/${id}/`, 'GET', null, getToken());
}
/**
 *
 * @param farmId
 * @return {*}
 */
export function getGroups(farmId, deleted = false) {
  // console.log('serverApi | getGroups | farm_id ', farmId);
  return makeAPIRequest(`manager/groups/?farm=${farmId}&deleted=${deleted ? 'true' : 'false'}`, 'GET', null, getToken());
}
/**
 *
 * @param group
 * @return {*}
 */
export function addNewGroup(group) {
  // console.log('serverApi | getGroups | group ', group);
  return makeAPIRequest('manager/groups/', 'POST', group, getToken());
}
/**
 *
 * @param group
 * @return {*}
 */
export function editGroup(group) {
  // console.log('serverApi | editGroup | group ', group);
  return makeAPIRequest(`manager/groups/${group.id}/`, 'PUT', group, getToken());
}
/**
 *
 * @param group
 * @return {*}
 */
export function removeGroup(group) {
  // console.log('serverApi | removeGroup | group ', group, group.id);
  return makeAPIRequest(`manager/groups/${group.id}/`, 'DELETE', null, getToken());
}
/**
 *
 * @param farmId
 * @return {*}
 */
export function getTransfers(farmId, deleted = false) {
  // console.log('serverApi | getTransfers | farmId, page ', farmId);
  return makeAPIRequest(`manager/groups/transfer/?farm=${farmId}&deleted=${deleted ? 'true' : 'false'}`,
    'GET', null, getToken());
}
/**
 *
 * @param transfer
 * @return {*}
 */
export function addNewTransfer(transfer) {
  // console.log('serverApi | addNewTransfer | transfer ', transfer);
  return makeAPIRequest('manager/groups/transfer/', 'POST', transfer, getToken());
}
/**
 *
 * @param transfer
 * @return {*}
 */
export function addNewTransferType(transfer) {
  // console.log('serverApi | addNewTransferType | transfer ', transfer);
  return makeAPIRequest('manager/groups/transferlist/', 'POST', transfer, getToken());
}
/**
 *
 * @param farmId
 * @return {*}
 */
export function getTransferlist(farmId, deleted = false) {
  // console.log('serverApi | getTransferlist | farm_id ', farmId);
  return makeAPIRequest(`manager/groups/transferlist/?farm=${farmId}&deleted=${deleted ? 'true' : 'false'}`,
    'GET', null, getToken());
}
/**
 *
 * @param farmId
 * @return {*}
 */
export function getDelivers(farmId, deleted = false) {
  // console.log('serverApi | getDelivers | farm_id ', farmId);
  return makeAPIRequest(`manager/delivery/?farm=${farmId}&deleted=${deleted ? 'true' : 'false'}`, 'GET', null, getToken());
}
/**
 *
 * @param delivery
 * @return {*}
 */
export function addNewDelivery(delivery) {
  // console.log('serverApi | addNewDelivery | deliveries ', delivery);
  return makeAPIRequest('manager/delivery/', 'POST', delivery, getToken());
}
/**
 *
 * @param delivery
 * @return {*}
 */
export function editDelivery(delivery) {
  // console.log('serverApi | editDelivery | delivery ', delivery);
  return makeAPIRequest(`manager/delivery/${delivery.id}/`, 'PUT', delivery, getToken());
}
/**
 *
 * @param delivery
 * @return {*}
 */
export function removeDelivery(delivery) {
  // console.log('serverApi | removeDelivery | delivery', delivery, delivery.id);
  return makeAPIRequest(`manager/delivery/${delivery.id}/`, 'DELETE', null, getToken());
}
/**
 *
 * @param farmId
 * @return {*}
 */
export function getDeliveryAnimalfeed(farmId, deleted = false) {
  // console.log('serverApi | getDelivers | farm_id ', farmId);
  return makeAPIRequest(`manager/animalfeeds/delivery/?farm=${farmId}&deleted=${deleted ? 'true' : 'false'}`, 'GET',
    null, getToken());
}
/**
 *
 * @param delivery
 * @return {*}
 */
export function addDeliveryAnimalfeed(deliveryanimalfeed) {
  // console.log('serverApi | addNewDelivery | deliveries ', delivery);
  return makeAPIRequest('manager/animalfeeds/delivery/', 'POST', deliveryanimalfeed, getToken());
}
/**
 *
 * @param delivery
 * @return {*}
 */
export function editDeliveryAnimalfeed(deliveryanimalfeed) {
  // console.log('serverApi | editDelivery | delivery ', delivery);
  return makeAPIRequest(`manager/animalfeeds/delivery/${deliveryanimalfeed.id}/`, 'PUT', deliveryanimalfeed, getToken());
}
/**
 *
 * @param delivery
 * @return {*}
 */
export function removeDeliveryAnimalfeed(deliveryanimalfeed) {
  // console.log('serverApi | removeDelivery | delivery', delivery, delivery.id);
  return makeAPIRequest(`manager/animalfeeds/delivery/${deliveryanimalfeed.id}/`, 'DELETE', null, getToken());
}
/**
 *
 * @param farmId
 * @return {*}
 */
export function getIngredients(farmId, deleted = false) {
  // console.log('serverApi | getIngredients | farm_id ', farmId);
  return makeAPIRequest(`manager/ingredients/?farm=${farmId}&deleted=${deleted ? 'true' : 'false'}`, 'GET', null, getToken());
}
/**
 *
 * @param ingredient
 * @return {*}
 */
export function addIngredients(ingredient) {
  // console.log('serverApi | addIngredients | ingredient ', ingredient);
  return makeAPIRequest('manager/ingredients/', 'POST', ingredient, getToken());
}
/**
 *
 * @param ingredient
 * @return {*}
 */
export function editIngredients(ingredient) {
  console.log('serverApi | editIngredients | ingredient ', ingredient);
  return makeAPIRequest(`manager/ingredients/${ingredient.id}/`, 'PUT', ingredient, getToken());
}
/**
 *
 * @param ingredient
 * @return {*}
 */
export function removeIngredients(ingredient) {
  console.log('serverApi | removeIngredients | ingredient ', ingredient, ingredient.id);
  return makeAPIRequest(`manager/ingredients/${ingredient.id}/`, 'DELETE', null, getToken());
}
/**
 *
 * @param farmId
 * @return {*}
 */
export function getStocks(farmId, deleted = false) {
  console.log('serverApi | getStocks | farm_id ', farmId);
  return makeAPIRequest(`manager/stock/?farm=${farmId}&deleted=${deleted ? 'true' : 'false'}`, 'GET', null, getToken());
}
/**
 *
 * @param farmId
 * @return {*}
 */
export function getRations(farmId, deleted = false) {
  console.log('serverApi | getRations | farm_id ', farmId);
  return makeAPIRequest(`manager/rations/?farm=${farmId}&deleted=${deleted ? 'true' : 'false'}`, 'GET', null, getToken());
}
/**
 *
 * @param rationId
 * @return {*}
 */
export function getRation(rationId) {
  console.log('serverApi | getRation | rationId ', rationId);
  return makeAPIRequest(`manager/rations/${rationId}/`, 'GET', null, getToken());
}
/**
 *
 * @param ration
 * @return {*}
 */
export function addRation(ration) {
  console.log('serverApi | addRation | ration ', ration);
  return makeAPIRequest('manager/rations/', 'POST', ration, getToken());
}
/**
 *
 * @param ration
 * @return {*}
 */
export function editRation(ration) {
  console.log('serverApi | editRation | rationId ', ration);
  return makeAPIRequest(`manager/rations/${ration.id}/`, 'PUT', ration, getToken());
}
/**
 *
 * @param ration
 * @return {*}
 */
export function removeRations(ration) {
  console.log('serverApi | removeRations | ration ', ration);
  return makeAPIRequest(`manager/rations/${ration.id}/`, 'DELETE', null, getToken());
}
/**
 *
 * @param farmId
 * @return {*}
 */
export function getLoadingCounts(farmId, deleted = false) {
  console.log('serverApi | getLoadingCounts | farmId ', farmId);
  return makeAPIRequest(`manager/loadingcounts/?farm=${farmId}&deleted=${deleted ? 'true' : 'false'}`, 'GET', null, getToken());
}
/**
 *
 * @param data
 * @return {*}
 */
export function addLoadingCount(data) {
  console.log('serverApi | addLoadingCounts | data ', data);
  return makeAPIRequest('manager/loadingcounts/', 'POST', data, getToken());
}
/**
 *
 * @param data
 * @return {*}
 */
export function editLoadingCount(data) {
  console.log('serverApi | editLoadingCount | loadingcount ', data);
  return makeAPIRequest(`manager/loadingcounts/${data.id}/`, 'PUT', data, getToken());
}
/**
 *
 * @param data
 * @return {*}
 */
export function removeLoadingCount(data) {
  console.log('serverApi | removeRations | data ', data);
  return makeAPIRequest(`manager/loadingcounts/${data.id}/`, 'DELETE', null, getToken());
}
/**
 *
 * @param farmId
 * @param deleted
 * @return {*}
 */
export function getAnimalfeeds(farmId, deleted = false) {
  console.log('serverApi | getAnimalfeeds | data ', farmId, deleted);
  return makeAPIRequest(`manager/animalfeeds/?farm=${farmId}&deleted=${deleted}`, 'GET', null, getToken());
}
/**
 *
 * @param data
 * @return {*}
 */
export function addAnimalfeeds(data) {
  console.log('serverApi | addAnimalfeeds | data ', data);
  return makeAPIRequest('manager/animalfeeds/', 'POST', data, getToken());
}
/**
 *
 * @param data
 * @return {*}
 */
export function editAnimalfeeds(animalfeed) {
  return makeAPIRequest(`manager/animalfeeds/${animalfeed.id}/`, 'PUT', animalfeed, getToken());
}
/**
 *
 * @param id
 * @return {*}
 */
export function removeAnimalfeeds(id) {
  console.log('serverApi | removeAnimalfeeds | id', id);
  return makeAPIRequest(`manager/animalfeeds/${id}/`, 'DELETE', null, getToken());
}
/**
 *
 * @param farmId
 * @return {*}
 */
export function getMixers(farmId = null, deleted = false) {
  console.log('serverApi | getMixers | farmId, deleted', urlQueryMaker({ farm : farmId, deleted }));
  return makeAPIRequest(`manager/mixer/${urlQueryMaker({ farm : farmId, deleted })}`, 'GET', null, getToken());
}
// Customers
export function getCustomers() {
  return makeAPIRequest('perm/employees', 'GET', null, getToken());
}
/**
 *
 * @param data
 * @return {*}
 */
export function addNewCustomer(data) {
  console.log('serverApi | addNewCustomer | data ', data);
  return makeAPIRequest('perm/employees/create/', 'POST', data, getToken());
}
/**
 *
 * @param customer
 * @param id
 * @return {*}
 */
export function editCustomer(customer, id) {
  return makeAPIRequest(`perm/employees/${id}/`, 'PUT', customer, getToken());
}
/**
 *
 * @param id
 * @return {*}
 */
export function removeCustomer(id) {
  return makeAPIRequest(`perm/employees/${id}/`, 'DELETE', null, getToken());
}
/**
 * @param farmId
 * @param planedDate - '2017-03-07'
 * @returns {*}
 */
export function getScheduleRations(farmId, planedDate = '', deleted = false) {
  console.log('serverApi | getScheduleRations | farmId ', farmId);

  return makeAPIRequest(
    `schedule/rations/?farm=${farmId}${planedDate ? `&planned_on=${planedDate}` : ''}&deleted=${deleted ? 'true' : 'false'}`,
    'GET', null,
    getToken());
}
/**
 *
 * @param schedule
 * @return {*}
 */
export function removeSchedules(schedule) {
  console.log('serverApi | removeSchedules | schedule ', schedule);
  return makeAPIRequest(`schedule/rations/${schedule.id}/`, 'DELETE', null, getToken());
}
/**
 *
 * @param schedule
 * @return {*}
 */
export function addSchedules(schedule) {
  console.log('serverApi | addSchedules | schedule ', schedule);
  return makeAPIRequest('schedule/rations/', 'POST', schedule, getToken());
}
/**
 *
 * @param scheduleId
 * @return {*}
 */
export function getSchedule(scheduleId) {
  return makeAPIRequest(`schedule/rations/${scheduleId}/`, 'GET', null, getToken());
}
/**
 *
 * @param schedule
 * @param scheduleId
 * @return {*}
 */
export function editSchedule(schedule, scheduleId) {
  return makeAPIRequest(`schedule/rations/${scheduleId}/`, 'PUT', schedule, getToken());
}
/**
 *
 * @param mixer
 * @return {*}
 */
export function addMixer(mixer) {
  return makeAPIRequest('manager/mixer/', 'POST', mixer, getToken());
}
/**
 *
 * @param mixer
 * @return {*}
 */
export function editMixer(mixer) {
  return makeAPIRequest(`manager/mixer/${mixer.id}`, 'PUT', mixer, getToken());
}
/**
 *
 * @param mixer
 * @return {*}
 */
export function removeMixer(mixer) {
  return makeAPIRequest(`manager/mixer/${mixer.id}/`, 'DELETE', null, getToken());
}
/**
 *
 * @return {*}
 */
export function getUserGroups(deleted = false) {
  return makeAPIRequest(`perm/groups/?deleted=${deleted ? 'true' : 'false'}`, 'GET', null, getToken());
}
/**
 *
 * @param group
 * @return {*}
 */
export function addUserGroup(group) {
  return makeAPIRequest('perm/groups/', 'POST', group, getToken());
}
/**
 *
 * @param group
 * @param id
 * @return {*}
 */
export function editUserGroup(group, id) {
  return makeAPIRequest(`perm/groups/${id}/`, 'PUT', group, getToken());
}
/**
 *
 * @param groupId
 * @return {*}
 */
export function removeUserGroups(groupId) {
  return makeAPIRequest(`perm/groups/${groupId}/`, 'DELETE', null, getToken());
}
/**
 *
 * @return {*}
 */
export function getUserGroupSettings() {
  return makeAPIRequest('perm/groupsettings/', 'GET', null, getToken());
}
/**
 *
 * @return {*}
 */
export function getEmployeePermissions() {
  return makeAPIRequest('perm/permissions/', 'GET', null, getToken());
}
/**
 *
 * @return {*}
 */
export function getEmployeeMe() {
  return makeAPIRequest('perm/me/', 'GET', null, getToken());
}
/**
 *
 * @return {*}
 */
export function getUserMe() {
  return makeAPIRequest('auth/me/', 'GET', null, getToken());
}
/**
 *
 * @param data
 * @return {*}
 */
export function getHistory(data) {
  console.log('serverApi | getHistory | data ', data);
  return makeAPIRequest(`history/${data.chapter}/${data.farmId ? `?farm=${data.farmId}` : ''}`, 'GET', null, getToken());
}
/**
 *
 * @param farmId
 * @param deleted
 * @return {*}
 */
export function getWorksheets(farmId = null, deleted = false) {
  console.log('serverApi | getMixers | farmId, deleted', urlQueryMaker({ farm : farmId, deleted }));
  return makeAPIRequest(`reports/worksheets/${urlQueryMaker({ farm : farmId, deleted })}`, 'GET', null, getToken());
}
/**
 *
 * @param data
 * @return {*}
 */
export function editWorksheet(data) {
  return makeAPIRequest(`reports/worksheets/${data.id}/`, 'PUT', data, getToken());
}
/**
 *
 * @param data
 * @return {*}
 */
export function addWorksheet(data) {
  return makeAPIRequest('reports/worksheets/', 'POST', data, getToken());
}
/**
 *
 * @param data
 * @return {*}
 */
export function removeWorksheets(data) {
  return makeAPIRequest(`reports/worksheets/${data.id}/`, 'DELETE', data, getToken());
}
/**
 *
 * @param farmId
 * @param deleted
 * @return {*}
 */
export function getUserReports(farmId = null, deleted = false) {
  return makeAPIRequest(`reports/userreports/${urlQueryMaker({ farm : farmId, deleted })}`, 'GET', null, getToken());
}
/**
 *
 * @return {*}
 */
export function getReports() {
  return makeAPIRequest('reports/allreports/', 'GET', null, getToken());
}
