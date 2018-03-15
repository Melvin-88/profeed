import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { red300, red900, red600 } from 'material-ui/styles/colors';

const propTypes = {
  title : PropTypes.string,
  actions : PropTypes.any,
  open : PropTypes.bool,
  children : PropTypes.object,
  autoScrollBodyContent : PropTypes.bool,
  contentClassName : PropTypes.string,
  errorMessage : PropTypes.string
};

const defaultProps = {};

class DialogTemplate extends Component {

  render() {
    const { title, actions, open, autoScrollBodyContent, contentClassName, errorMessage } = this.props;

    return (
      <div>
        <Dialog
          title={title}
          actions={actions}
          modal
          autoScrollBodyContent={autoScrollBodyContent}
          open={open}
          className='dialog'
          contentClassName={`dialog__container ${contentClassName ? contentClassName : ''}`}
        >
          {this.props.children}
          {errorMessage ? <Chip className='error-message' backgroundColor={red600} labelColor='white'>
            <Avatar size={32} color={red300} backgroundColor={red900}>E</Avatar>
            {errorMessage}
          </Chip> : null }
        </Dialog>
      </div>
    );
  }
}

DialogTemplate.propTypes = propTypes;
DialogTemplate.defaultProps = defaultProps;

export default DialogTemplate;
