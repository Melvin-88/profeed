/**
 * Created by DzEN on 29.01.2017.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as languageProviderReducer } from 'client/containers/LanguageProvider';
import { reducer as headerMenuReducer } from 'client/components/HeaderMenu';
// Pages
import { reducer as appPageReducer } from 'client/pages/App';
import { reduxFormReducer, reducer as loginPageReducer } from 'client/pages/LoginPage';
import { reducer as registerPageReducer } from 'client/pages/RegisterPage';
import { reducer as farmsPageReducer } from 'client/pages/FarmsPage';
import { reducer as groupsPageReducer } from 'client/pages/GroupsPage';
import { reducer as ingredientsPageReducer } from 'client/pages/IngredientsPage';
import { reducer as transfersPageReducer } from 'client/pages/TransfersPage';
import { reducer as sideMenuReducer } from 'client/components/SideMenu';
import { reducer as adminSideMenuReducer } from 'client/components/AdminSideMenu';
import { reducer as deliveryPageReducer } from 'client/pages/DeliveryPage';
import { reducer as customersPageReducer } from 'client/pages/CustomersPage';
import { reducer as stocksPageReducer } from 'client/pages/StocksPage';
import { reducer as rationsPageReducer } from 'client/pages/RationsPage';
import { reducer as rationPageReducer } from 'client/pages/RationPage';
import { reducer as schedulesPageReducer } from 'client/pages/SchedulesPage';
import { reducer as schedulePageReducer } from 'client/pages/SchedulePage';
import { reducer as mixersPageReducer } from 'client/pages/MixersPage';
import { reducer as userGroupsPageReducer } from 'client/pages/UserGroupsPage';
import { reducer as loadingcountsPageReducer } from 'client/pages/LoadingCountsPage';
import { reducer as historyPageReducer } from 'client/pages/HistoryPage';
import { reducer as animalfeedsPageReducer } from 'client/pages/AnimalfeedsPage';
import { reducer as deliveryanimalfeedPageReducer } from 'client/pages/DeliveryAnimalfeedPage';
import { reducer as worksheetsPageReducer } from 'client/pages/WorksheetsPage';
import { reducer as reportsPageReducer } from 'client/pages/ReportsPage';
// Dialogs
import { reducer as addFarmsDialogReducer } from 'client/components/dialogs/farms/DialogFarmsAdd';
import { reducer as editFarmsDialogReducer } from 'client/components/dialogs/farms/DialogFarmsEdit';
import { reducer as removeFarmsDialogReducer } from 'client/components/dialogs/farms/DialogFarmsRemove';
import { reducer as addGroupsDialogReducer } from 'client/components/dialogs/groups/DialogGroupsAdd';
import { reducer as editGroupsDialogReducer } from 'client/components/dialogs/groups/DialogGroupsEdit';
import { reducer as removeGroupsDialogReducer } from 'client/components/dialogs/groups/DialogGroupsRemove';
import { reducer as addTransferDialogReducer } from 'client/components/dialogs/transfer/DialogTransferAdd';
import { reducer as addTransferTypeDialogReducer } from 'client/components/dialogs/transfer/DialogTransferTypeAdd';
import { reducer as addIngredientsDialogReducer } from 'client/components/dialogs/ingredients/DialogIngredientsAdd';
import { reducer as editIngredientsDialogReducer } from 'client/components/dialogs/ingredients/DialogIngredientsEdit';
import { reducer as removeIngredientsDialogReducer } from 'client/components/dialogs/ingredients/DialogIngredientsRemove';
import { reducer as addDeliveryDialogReducer } from 'client/components/dialogs/deliveries/DialogDeliveryAdd';
import { reducer as editDeliveryDialogReducer } from 'client/components/dialogs/deliveries/DialogDeliveryEdit';
import { reducer as removeDeliveryDialogReducer } from 'client/components/dialogs/deliveries/DialogDeliveryRemove';
import { reducer as removeRationsDialogReducer } from 'client/components/dialogs/rations/DialogRationsRemove';
import { reducer as addRationLoadingCountsDialogReducer } from
  'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsAdd';
import { reducer as editRationLoadingCountsDialogReducer } from
  'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsEdit';
import { reducer as removeRationLoadingCountsDialogReducer } from
  'client/components/dialogs/rationloadingcounts/DialogRationLoadingCountsRemove';
import { reducer as addRationIngredientsDialogReducer } from
  'client/components/dialogs/rationingredients/DialogRationIngredientsAdd';
import { reducer as editRationIngredientsDialogReducer } from
  'client/components/dialogs/rationingredients/DialogRationIngredientsEdit';
import { reducer as removeRationIngredientsDialogReducer } from
  'client/components/dialogs/rationingredients/DialogRationIngredientsRemove';
import { reducer as addRationGroupsDialogReducer } from
  'client/components/dialogs/rationgroups/DialogRationGroupsAdd';
import { reducer as editRationGroupsDialogReducer } from
  'client/components/dialogs/rationgroups/DialogRationGroupsEdit';
import { reducer as removeRationGroupsDialogReducer } from
  'client/components/dialogs/rationgroups/DialogRationGroupsRemove';
import { reducer as removeSchedulesDialogReducer } from 'client/components/dialogs/schedules/DialogSchedulesRemove';
import { reducer as addSchedulesDialogReducer } from 'client/components/dialogs/schedules/DialogSchedulesAdd';
import { reducer as addMixersDialogReducer } from 'client/components/dialogs/mixers/DialogMixersAdd';
import { reducer as editMixersDialogReducer } from 'client/components/dialogs/mixers/DialogMixersEdit';
import { reducer as removeMixersDialogReducer } from 'client/components/dialogs/mixers/DialogMixersRemove';
import { reducer as addUserGroupsDialogReducer } from 'client/components/dialogs/usergroups/DialogUserGroupsAdd';
import { reducer as editUserGroupsDialogReducer } from 'client/components/dialogs/usergroups/DialogUserGroupsEdit';
import { reducer as removeUserGroupsDialogReducer } from 'client/components/dialogs/usergroups/DialogUserGroupsRemove';
import { reducer as editPermissionsUserGroupsDialogReducer } from
  'client/components/dialogs/usergroups/DialogUserGroupsEditPermissions';
import { reducer as addCustomersDialogReducer } from 'client/components/dialogs/customers/DialogCustomerAdd';
import { reducer as editCustomersDialogReducer } from 'client/components/dialogs/customers/DialogCustomerEdit';
import { reducer as removeCustomersDialogReducer } from 'client/components/dialogs/customers/DialogCustomerRemove';
import { reducer as addLoadingCountsDialogReducer } from 'client/components/dialogs/loadingcounts/DialogLoadingCountsAdd';
import { reducer as editLoadingCountsDialogReducer } from 'client/components/dialogs/loadingcounts/DialogLoadingCountsEdit';
import { reducer as removeLoadingCountsDialogReducer } from 'client/components/dialogs/loadingcounts/DialogLoadingCountsRemove';
import { reducer as addAnimalfeedsDialogReducer } from 'client/components/dialogs/animalfeeds/DialogAnimalfeedsAdd';
import { reducer as editAnimalfeedsDialogReducer } from 'client/components/dialogs/animalfeeds/DialogAnimalfeedsEdit';
import { reducer as removeAnimalfeedsDialogReducer } from 'client/components/dialogs/animalfeeds/DialogAnimalfeedsRemove';
import { reducer as addDeliveryAnimalfeedDialogReducer } from
  'client/components/dialogs/deliveryanimalfeed/DialogDeliveryAnimalfeedAdd';
import { reducer as editDeliveryAnimalfeedDialogReducer } from
  'client/components/dialogs/deliveryanimalfeed/DialogDeliveryAnimalfeedEdit';
import { reducer as removeDeliveryAnimalfeedDialogReducer } from
  'client/components/dialogs/deliveryanimalfeed/DialogDeliveryAnimalfeedRemove';
import { reducer as editWorksheetsDialogReducer } from 'client/components/dialogs/worksheets/DialogWorksheetsEdit';
import { reducer as removeWorksheetsDialogReducer } from 'client/components/dialogs/worksheets/DialogWorksheetsRemove';
import { reducer as editReportsDialogReducer } from 'client/components/dialogs/reports/DialogReportsEdit';
import { reducer as selectLanguageRegisterDialogReducer } from
  'client/components/dialogs/languageSelect/DialogCheckLanguage';


// Tables
import { reducer as rationLoadingCountsTableReducer } from 'client/components/tables/TableRationLoadingCounts';
import { reducer as rationIngredientsTableReducer } from 'client/components/tables/TableRationIngredients';
import { reducer as rationGroupsTableReducer } from 'client/components/tables/TableRationGroups';
import { reducer as scheduleRationLoadingCountTableReducer } from 'client/components/tables/TableScheduleRationLoadingCounts';
import { reducer as animalfeedsTableReducer } from 'client/components/tables/TableAnimalfeeds';

export default combineReducers({
  routing : routerReducer,
  languageProvider : languageProviderReducer,
  app : appPageReducer,
  headerMenu : headerMenuReducer,
  form : reduxFormReducer,
  loginPage : loginPageReducer,
  registerPage : registerPageReducer,
  selectLanguageRegisterDialog : selectLanguageRegisterDialogReducer,
  sideMenu : sideMenuReducer,
  adminSideMenu : adminSideMenuReducer,
  farmsPage : farmsPageReducer,
  groupsPage : groupsPageReducer,
  ingredientsPage : ingredientsPageReducer,
  transfersPage : transfersPageReducer,
  addFarmsDialog : addFarmsDialogReducer,
  removeFarmsDialog : removeFarmsDialogReducer,
  editFarmsDialog : editFarmsDialogReducer,
  addGroupsDialog : addGroupsDialogReducer,
  editGroupsDialog : editGroupsDialogReducer,
  removeGroupsDialog : removeGroupsDialogReducer,
  addTransferDialog : addTransferDialogReducer,
  addTransferTypeDialog : addTransferTypeDialogReducer,
  addIngredientsDialog : addIngredientsDialogReducer,
  editIngredientsDialog : editIngredientsDialogReducer,
  removeIngredientsDialog : removeIngredientsDialogReducer,
  deliveryPage: deliveryPageReducer,
  addDeliveryDialog: addDeliveryDialogReducer,
  editDeliveryDialog: editDeliveryDialogReducer,
  removeDeliveryDialog: removeDeliveryDialogReducer,
  stocksPage : stocksPageReducer,
  rationPage : rationPageReducer,
  removeRationsDialog : removeRationsDialogReducer,
  rationsPage : rationsPageReducer,
  addRationLoadingCountsDialog : addRationLoadingCountsDialogReducer,
  editRationLoadingCountsDialog : editRationLoadingCountsDialogReducer,
  removeRationLoadingCountsDialog : removeRationLoadingCountsDialogReducer,
  rationLoadingCountsTable : rationLoadingCountsTableReducer,
  addRationIngredientsDialog : addRationIngredientsDialogReducer,
  editRationIngredientsDialog : editRationIngredientsDialogReducer,
  removeRationIngredientsDialog : removeRationIngredientsDialogReducer,
  rationIngredientsTable : rationIngredientsTableReducer,
  addRationGroupsDialog : addRationGroupsDialogReducer,
  editRationGroupsDialog : editRationGroupsDialogReducer,
  removeRationGroupsDialog : removeRationGroupsDialogReducer,
  rationGroupsTable : rationGroupsTableReducer,
  schedulesPage : schedulesPageReducer,
  removeSchedulesDialog : removeSchedulesDialogReducer,
  addSchedulesDialog : addSchedulesDialogReducer,
  schedulePage : schedulePageReducer,
  scheduleRationLoadingCountTable : scheduleRationLoadingCountTableReducer,
  mixersPage : mixersPageReducer,
  addMixersDialog : addMixersDialogReducer,
  editMixersDialog : editMixersDialogReducer,
  removeMixersDialog : removeMixersDialogReducer,
  userGroupsPage : userGroupsPageReducer,
  addUserGroupsDialog : addUserGroupsDialogReducer,
  editUserGroupsDialog : editUserGroupsDialogReducer,
  removeUserGroupsDialog : removeUserGroupsDialogReducer,
  editPermissionsUserGroupsDialog : editPermissionsUserGroupsDialogReducer,
  customersPage: customersPageReducer,
  addCustomerDialog: addCustomersDialogReducer,
  editCustomerDialog : editCustomersDialogReducer,
  removeCustomersDialog : removeCustomersDialogReducer,
  loadingCountsPage : loadingcountsPageReducer,
  addLoadingCountsDialog : addLoadingCountsDialogReducer,
  editLoadingCountsDialog : editLoadingCountsDialogReducer,
  removeLoadingCountsDialog : removeLoadingCountsDialogReducer,
  historyPage : historyPageReducer,
  animalfeedsPage : animalfeedsPageReducer,
  animalfeedsTable : animalfeedsTableReducer,
  addAnimalfeedsDialog: addAnimalfeedsDialogReducer,
  editAnimalfeedsDialog : editAnimalfeedsDialogReducer,
  removeAnimalfeedsDialog : removeAnimalfeedsDialogReducer,
  deliveryanimalfeedPage : deliveryanimalfeedPageReducer,
  addDeliveryAnimalfeedDialog : addDeliveryAnimalfeedDialogReducer,
  editDeliveryAnimalfeedDialog : editDeliveryAnimalfeedDialogReducer,
  removeDeliveryAnimalfeedDialog : removeDeliveryAnimalfeedDialogReducer,
  worksheetsPage : worksheetsPageReducer,
  editWorksheetsDialog : editWorksheetsDialogReducer,
  removeWorksheetsDialog : removeWorksheetsDialogReducer,
  reportsPage : reportsPageReducer,
  editReportsDialog : editReportsDialogReducer
});
