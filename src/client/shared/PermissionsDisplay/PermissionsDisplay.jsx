/**
 * Created by Tanya on 26.04.2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PermissionItem from './PermissionItem';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import './style.css';

const propTypes = {
  permissions : PropTypes.array,
  onEditPermission : PropTypes.func
};

const defaultProps = {};

class PermissionsDisplay extends Component {
  state = {
    showEditButton : false
  };

  handleMouseEnter() {
    this.setState({
      showEditButton : true
    });
  }

  handleMouseLeave() {
    this.setState({
      showEditButton : false
    });
  }

  render() {
    const { permissions, onEditPermission } = this.props;

    return (
      <div className='permission-display' onMouseEnter={::this.handleMouseEnter} onMouseLeave={::this.handleMouseLeave}>
        <div className='permission-button__container' style={{ display : (this.state.showEditButton ? 'block' : 'none') }}>
          <IconButton tooltip='Редагувати дозволи' touch tooltipPosition='bottom-left'
            onTouchTap={() => onEditPermission()}
          >
            <ModeEdit />
          </IconButton>
        </div>
        <div className='permission-display__title'>
          <div className='permission-display__name'>Ім'я</div>
          <div className='permission-display__permission'>Перегляд</div>
          <div className='permission-display__permission'>Додавання</div>
          <div className='permission-display__permission'>Змінення</div>
          <div className='permission-display__permission'>Видалення</div>
        </div>
        <hr/>
        {permissions.map((item, i) => {
          return <PermissionItem key={i} permission={item}/>;
        })}
      </div>
    );
  }
}

PermissionsDisplay.propTypes = propTypes;
PermissionsDisplay.defaultProps = defaultProps;

export default PermissionsDisplay;

