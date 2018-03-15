import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';

import './App.css';

const propTypes = {
  permission : PropTypes.object,
  children: PropTypes.node,
  checkUser : PropTypes.func,
  checkMode : PropTypes.func,
  user : PropTypes.object
};

const defaultProps = {
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { checkUser, checkMode } = this.props;

    checkUser();
    checkMode();
  }

  render() {
    // console.log('App | props ', this.props);
    const { user } = this.props;
    const showLoading = Object.is(user, null);

    return (
      <div className='App'>
        { showLoading ? 'Loading...' : this.props.children }
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(App);
