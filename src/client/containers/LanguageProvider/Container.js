/**
*
* LanguageProvider
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';

const propTypes = {
  language: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
  checkAndSetLanguage : PropTypes.func
};
const defaultProps = { };

export class LanguageProvider extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { checkAndSetLanguage } = this.props;

    checkAndSetLanguage();
  }

  render() {
    console.log('LanguageProvider | render ', this.props);
    return (
      <IntlProvider locale={this.props.language} key={this.props.language} messages={this.props.messages[this.props.language]}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

LanguageProvider.propTypes = propTypes;
LanguageProvider.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(LanguageProvider);
