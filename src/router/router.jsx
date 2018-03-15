import React from 'react';
import { IndexRedirect, Route }  from 'react-router';
import config from 'config';
import App from 'client/pages/App';
import MainPage from 'client/pages/MainPage';
import FarmsPage from 'client/pages/FarmsPage';
import GroupsPage from 'client/pages/GroupsPage';
import LoginPage from 'client/pages/LoginPage';
import RegisterPage from 'client/pages/RegisterPage';
import TransfersPage from 'client/pages/TransfersPage';
import DeliveryPage from 'client/pages/DeliveryPage';
import CustomersPage from 'client/pages/CustomersPage';
import IngredientsPage from 'client/pages/IngredientsPage';
import StocksPage from 'client/pages/StocksPage';
import RationsPage from 'client/pages/RationsPage';
import RationPage from 'client/pages/RationPage';
import SchedulesPage from 'client/pages/SchedulesPage';
import SchedulePage from 'client/pages/SchedulePage';
import MixersPage from 'client/pages/MixersPage';
import UserGroupsPage from 'client/pages/UserGroupsPage';
import LoadingCountsPage from 'client/pages/LoadingCountsPage';
import HistoryPage from 'client/pages/HistoryPage';
import AnimalfeedsPage from 'client/pages/AnimalfeedsPage';
import DeliveryAnimalfeedPage from 'client/pages/DeliveryAnimalfeedPage';
import WorksheetsPage from 'client/pages/WorksheetsPage';
import ReportsPage from 'client/pages/ReportsPage';
import NotFoundPage from 'client/pages/NotFoundPage';
import { redirector, checkAuth } from 'helpers/permissionCheckers';


export default (store) => {
  return (
    <Route component={App} path='/'>
      <Route path='login' component={LoginPage}/>
      <Route path='register' component={RegisterPage}/>
      <Route component={MainPage}>
        <IndexRedirect to={`/${config.URLS.FARMS}`}/>
        <Route path={config.URLS.FARMS}
          component={FarmsPage} onEnter={checkAuth} // Check auth here, because other redirect to here
        />
        <Route path={config.URLS.INGREDIENTS}
          component={IngredientsPage}
          onEnter={redirector(store, 'manager.ingredient.view')}
        />
        <Route path={config.URLS.ANIMALFEEDS}
          component={AnimalfeedsPage}
          onEnter={redirector(store, 'manager.animalfeed.view')}
        />
        <Route path={config.URLS.GROUPS}
          component={GroupsPage}
          onEnter={redirector(store, 'manager.group.view')}
        />
        <Route path={config.URLS.TRANSFERS}
          component={TransfersPage}
          onEnter={redirector(store, 'manager.grouptransfer.view')}
        />
        <Route path={config.URLS.LOADINGCOUNTS}
          component={LoadingCountsPage}
          onEnter={redirector(store, 'manager.loadingcount.view')}
        />
        <Route path={config.URLS.RATIONS}
          component={RationsPage}
          onEnter={redirector(store, 'manager.ration.view')}
        />
        <Route path={config.URLS.RATION_ADD}
          component={RationPage}
          onEnter={redirector(store, 'manager.ration.add')}
        />
        <Route path={config.URLS.RATION_EDIT}
          component={RationPage}
          onEnter={redirector(store, 'manager.ration.change')}
        />
        <Route path={config.URLS.DELIVERIES}
          component={DeliveryPage}
          onEnter={redirector(store, 'manager.delivery.view')}
        />
        <Route path={config.URLS.ANIMALFEEDDELIVERY}
          component={DeliveryAnimalfeedPage}
          onEnter={redirector(store, 'manager.animalfeeddelivery.view')}
        />
        <Route path={config.URLS.STOCKS}
          component={StocksPage}
          onEnter={redirector(store, 'manager.stock.view')}
        />
        <Route path={config.URLS.SCHEDULES}
          component={SchedulesPage}
          onEnter={redirector(store, 'schedule.ration.view')}
        />
        <Route path={config.URLS.SCHEDULE_EDIT}
          component={SchedulePage}
          onEnter={redirector(store, 'schedule.ration.change')}
        />
        <Route path={config.URLS.MIXERS}
          component={MixersPage}
          onEnter={redirector(store, 'manager.mixer.view')}
        />
        <Route path={config.URLS.USERGROUPS}
          component={UserGroupsPage}
          onEnter={redirector(store, 'permission.perm_group.view')}
        />
        <Route path={config.URLS.CUSTOMERS}
          component={CustomersPage}
          onEnter={redirector(store, 'permission.employee.view')}
        />
        <Route path={config.URLS.HISTORY}
          component={HistoryPage}
          onEnter={redirector(store, [
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
          ])}
        />
        <Route path={config.URLS.WORKSHEET}
          component={WorksheetsPage}
          onEnter={redirector(store, 'report.worksheet.view')}
        />
        <Route path={config.URLS.REPORT}
          component={ReportsPage}
          onEnter={redirector(store, 'report.report.view')}
        />
      </Route>
      <Route path='*' component={NotFoundPage}/>
    </Route>
  );
};
