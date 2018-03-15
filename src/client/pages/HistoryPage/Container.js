/**
*
* HistoryPage
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import messages from './messages';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';
import TableHistoryFarms from 'client/components/tables/TableHistoryFarms';
import TableHistoryAnimalfeedsDelivery from 'client/components/tables/TableHistoryAnimalfeedsDelivery';
import TableHistoryAnimalFeeds from 'client/components/tables/TableHistoryAnimalFeeds';
import TableHistoryCustomers from 'client/components/tables/TableHistoryCustomers';
import TableHistoryDelivery from 'client/components/tables/TableHistoryDelivery';
import TableHistoryGroups from 'client/components/tables/TableHistoryGroups';
import TableHistoryGroupTransferList from 'client/components/tables/TableHistoryGroupTransferList';
import TableHistoryGroupTransfers from 'client/components/tables/TableHistoryGroupTransfers';
import TableHistoryIngredients from 'client/components/tables/TableHistoryIngredients';
import TableHistoryLoadingCounts from 'client/components/tables/TableHistoryLoadingCounts';
import TableHistoryMixers from 'client/components/tables/TableHistoryMixers';
import TableHistoryRations from 'client/components/tables/TableHistoryRations';
import TableUserGroups from 'client/components/tables/TableUserGroups';

const propTypes = {
  farmId : PropTypes.string,
  history : PropTypes.array,
  getHistory : PropTypes.func,
  setChapter : PropTypes.func,
  checkChapter : PropTypes.func,
  chapters : PropTypes.array,
  chapter : PropTypes.object,
  permissions : PropTypes.array
};
const defaultProps = { };

class HistoryPage extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { chapters } = this.props;
    const chapter = chapters[0];

    this.applyChapter(chapter);
  }

  handleChangeChapter(e, i, value) {
    const { chapters } = this.props;
    const chapter = chapters.find(item => item.id === value);

    console.log('Chapter ', chapter);

    this.applyChapter(chapter);
  }

  getCheckedChapterTable(chapter) {
    if (chapter && chapter.name) {
      switch (chapter.name) {
        case 'farms':
          return TableHistoryFarms;
        case 'rations':
          return TableHistoryRations;
        case 'groups':
          return TableHistoryGroups;
        case 'ingredients':
          return TableHistoryIngredients;
        case 'loadingcounts':
          return TableHistoryLoadingCounts;
        case 'grouptransfers':
          return TableHistoryGroupTransfers;
        case 'grouptransferlist':
          return TableHistoryGroupTransferList;
        case 'animalfeeds':
          return TableHistoryAnimalFeeds;
        case 'afdelivery':
          return TableHistoryAnimalfeedsDelivery;
        case 'delivery':
          return TableHistoryDelivery;
        case 'mixers':
          return TableHistoryMixers;
        case 'employees':
          return TableHistoryCustomers;
        case 'auth_groups':
          return TableUserGroups;
        default:
          return null;
      }
    }

    return null;
  }

  applyChapter(chapter) {
    const { farmId, getHistory, setChapter } = this.props;

    setChapter(chapter);
    getHistory(chapter.farm ? farmId : null, chapter);
  }

  render() {
    const { chapters, chapter, permissions, history } = this.props;
    const Table = this.getCheckedChapterTable(chapter);

    return permissions.length > 0 ? (<div className='history-page-container'>
      <div className='page-title'>
        <h1>
          <FormattedMessage {...messages.title} />
        </h1>
      </div>
      {chapter ? (<SelectField
        className='dialog-form__input'
        hintText='-----------'
        value={chapter.id}
        onChange={::this.handleChangeChapter}
                  >
        { chapters.map((item, key) => {
          return <MenuItem key={key} value={item.id} primaryText={item.name} />;
        })}
      </SelectField>) : null}
      {Table ? <Table tableData={history} /> : null}
      <br/>
    </div>) : null;
  }
}

HistoryPage.propTypes = propTypes;
HistoryPage.defaultProps = defaultProps;

export default connect(modelSelector, containerActions)(HistoryPage);
