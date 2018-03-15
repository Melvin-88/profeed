/**
 * Created by Tanya on 21.05.2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DialogTemplate from 'client/shared/DialogTemplate';
import FlatButton from 'material-ui/FlatButton';
import TableHistoryRationsLoadingCounts from 'client/components/tables/TableHistoryRationsLoadingCounts';
import TableHistoryRationsIngredients from 'client/components/tables/TableHistoryRationsIngredients';
import TableHistoryRationsGroups from 'client/components/tables/TableHistoryRationsGroups';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

const propTypes = {
  loadingCounts : PropTypes.array,
  groups : PropTypes.array,
  ingredients : PropTypes.array,
  onClose : PropTypes.func,
  open : PropTypes.bool,
  intl : PropTypes.object
};

class DialogHistoryRation extends Component {
  handleClose() {
    const { onClose } = this.props;

    onClose();
  }

  render() {
    const { loadingCounts, ingredients, groups, open, intl } = this.props; // loadingCounts, groups, ingredients,

    const actions = [
      <FlatButton
        key='1'
        label={<FormattedMessage {...messages.button.close}/>}
        secondary
        onTouchTap={::this.handleClose}
      />
    ];

    return (
      <div>
        <DialogTemplate
          title={intl.formatMessage(messages.title)}
          actions={actions}
          modal
          open={open}
          autoScrollBodyContent
          contentClassName='dialog-extend'
        >
          <TableHistoryRationsLoadingCounts tableData={loadingCounts}/>
          <br/>
          <TableHistoryRationsIngredients tableData={ingredients}/>
          <br/>
          <TableHistoryRationsGroups tableData={groups}/>
        </DialogTemplate>
      </div>
    );
  }
}

DialogHistoryRation.propTypes = propTypes;

export default injectIntl(DialogHistoryRation);
