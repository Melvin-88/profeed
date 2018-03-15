/**
*
* StocksPage
*
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TableStocks from 'client/components/tables/TableStocks';

const propTypes = {
  permission : PropTypes.object,
  farmId : PropTypes.string,
  stocks : PropTypes.array,
  getStocks : PropTypes.func,
  showStocksAddDialog : PropTypes.func,
  showStocksEditDialog : PropTypes.func,
  showStocksRemoveDialog : PropTypes.func
};
const defaultProps = { };

class StocksPage extends Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { getStocks, farmId } = this.props;

    getStocks(farmId);
  }

  render() {
    const { stocks, permission } = this.props;

    return permission && permission.view ? (
      <div className='stocks-page-container'>
        <div className='page-title'>
          <h1>
            { <FormattedMessage {...messages.title} /> }
          </h1>
        </div>
        <TableStocks tableData={stocks} />
      </div>
    ) : null;
  }
}

StocksPage.propTypes = propTypes;
StocksPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(StocksPage);
