/**
 * Created by Tanya on 27.04.2017.
 */
import React, { Component } from 'react';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import { redA700, green800 } from 'material-ui/styles/colors';

const propTypes = {
  permission : React.PropTypes.object
};

const defaultProps = {};

class PermissionItem extends Component {
  renderPermissionIcons(flag) {
    if (flag) {
      return <CheckCircle color={green800} />;
    }

    return <HighlightOff color={redA700} />;
  }

  render() {
    const { permission } = this.props;

    return (
      <div className='permission-item'>
        <div className='permission-item__name'>{permission.name}</div>
        <div className='permission-item__permission-icons'>
          <div>{this.renderPermissionIcons(permission.view)}</div>
          <div>{this.renderPermissionIcons(permission.add)}</div>
          <div>{this.renderPermissionIcons(permission.change)}</div>
          <div>{this.renderPermissionIcons(permission.delete)}</div>
        </div>
      </div>
    );
  }
}

PermissionItem.propTypes = propTypes;
PermissionItem.defaultProps = defaultProps;

export default PermissionItem;
