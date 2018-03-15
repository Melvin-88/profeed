import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const propTypes = {
  permission : PropTypes.array,
  onChecked : PropTypes.func

};

const defaultProps = { };

class PermissionsEditable extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChecked(id, prop, value) {
    const { onChecked } = this.props;

    onChecked(id, prop, value);
  }

  render() {
    const { permission } = this.props;

    console.log('shared | PermissionsEditable | permission');

    return (
      <List defaultValue={3} style={{ width: '400px' } /* TEST */}>
        {
          permission.map((item, i) =>

            <ListItem
              key={i}
              primaryText={item.name}
              nestedItems={[
                <ListItem
                  key='1'
                  leftCheckbox={<Checkbox checked={item.view} onCheck={() => this.handleChecked(item.id, 'view',
                    !item.view)}/>}
                  primaryText='View'
                />,

                <ListItem
                  key='2'
                  leftCheckbox={<Checkbox checked={item.add} onCheck={() => this.handleChecked(item.id, 'add',
                    !item.add)} />}
                  primaryText='Add'
                />,

                <ListItem
                  key='3'
                  leftCheckbox={<Checkbox checked={item.change} onCheck={() => this.handleChecked(item.id, 'change',
                    !item.change)}
                                />}
                  primaryText='Change'
                />,

                <ListItem
                  key='4'
                  leftCheckbox={<Checkbox checked={item.delete} onCheck={() => this.handleChecked(item.id, 'delete',
                    !item.delete)}
                                />}
                  primaryText='Delete'
                />
              ]}
            />
          )
        }
      </List>
    );
  }
}

PermissionsEditable.propTypes = propTypes;
PermissionsEditable.defaultProps = defaultProps;

export default PermissionsEditable;
