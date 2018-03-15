/**
 * Created by Tanya on 09.05.2017.
 */
/*
 * MainPage Actions
 *
 * This contains all the text for the FarmsPage component.
 */
import { bindActionCreators } from 'redux';
import { actions } from 'client/pages/App';

function checkPermissions() {
  return actions.checkPermissions();
}

function containerActions(dispatch) {
  return bindActionCreators({ checkPermissions }, dispatch);
}

export { containerActions, checkPermissions };
