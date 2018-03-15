/**
*
* HeaderMenuExt
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Exit from 'material-ui/svg-icons/action/exit-to-app';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { green500, greenA200 } from 'material-ui/styles/colors';
// import { Row } from 'react-flexbox-grid/lib';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import messages from './messages.js';
import { MODE } from 'helpers/constants';
import { USER_LEVEL_ACCESS } from 'helpers/constants';

const propTypes = {
  logOut : PropTypes.func,
  changeMode : PropTypes.func,
  mode : PropTypes.string,
  user : PropTypes.object
};
const defaultProps = { };

const styles = {
  smallIcon: {
    width: 36,
    height: 36
  },
  mediumIcon: {
    width: 48,
    height: 48
  },
  largeIcon: {
    width: 60,
    height: 60
  },
  small: {
    width: 72,
    height: 72,
    padding: 16
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24
  },
  large: {
    width: 120,
    height: 120,
    padding: 30
  }
};

const buttonRightStyle = {
  textAlign: 'right'
};

/**
 * Example of nested menus within an IconMenu.
 */
class HeaderMenu extends Component {
  onHandleTouchTap() {
    const { logOut } = this.props;

    logOut();
  }

  onChangeMode() {
    const { changeMode, mode } = this.props;

    changeMode(mode === MODE.COMMON ? MODE.ADMIN : MODE.COMMON);
  }

  render() {
    const { mode, user } = this.props;

    return (
      <div style={buttonRightStyle}>
        <IconMenu
          iconButtonElement={<IconButton iconStyle={styles.smallIcon} style={styles.small}>
            <Menu
              color={green500}
              hoverColor={greenA200}
            /></IconButton>}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          { user.type !== USER_LEVEL_ACCESS.EMPLOYEE ? <MenuItem primaryText={
            <FormattedMessage {...(mode === MODE.COMMON ?  messages.mode.admin : messages.mode.common)} />
            }
            leftIcon={<AccountCircle />}
            onTouchTap={::this.onChangeMode}
                                                       /> : null }
          <Divider />
          <MenuItem primaryText='Sign Out' leftIcon={<Exit />} onTouchTap={::this.onHandleTouchTap}/>
        </IconMenu>
      </div>
    );
  }
}

HeaderMenu.propTypes = propTypes;
HeaderMenu.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(HeaderMenu);
