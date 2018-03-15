/**
 *
 * AdminSideMenu
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Spa from 'material-ui/svg-icons/places/spa';
import Divider from 'material-ui/Divider';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const propTypes = {
  menuItems : React.PropTypes.array,
  checkNewMenuItem : React.PropTypes.func,
  farmId : React.PropTypes.string,
  getItemsByMode : React.PropTypes.func
};
const defaultProps = { };

class AdminSideMenu extends Component {
  componentDidMount() {
    const { getItemsByMode } = this.props;

    getItemsByMode();
  }

  getClassName(item) {
    let className = '';

    if (item.active) {
      className = 'active-item-menu';
    } else if (item.locked) {
      className = 'locked-item-menu';
    }

    return className;
  }

  render() {
    const { menuItems, checkNewMenuItem } = this.props;

    // console.log('AdminSideMenu | render | props ', this.props);

    return (<div>
      <List>
        {menuItems.map((item, index) => {
          return (<ListItem key={index} className={this.getClassName(item)}
            primaryText={<FormattedMessage {...messages[item.name]}/>}
            disabled={item.locked} leftIcon={<Spa />}
            onTouchTap={() => {
              checkNewMenuItem(item);
            }}
                  />);
        })}
      </List>
      <Divider />
    </div>);
  }
}

AdminSideMenu.propTypes = propTypes;
AdminSideMenu.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(AdminSideMenu);
