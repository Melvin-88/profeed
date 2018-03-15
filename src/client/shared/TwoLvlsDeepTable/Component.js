/**
 * Created by Tanya on 29.06.2017.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  mainHeader : PropTypes.string,
  commonHeader : PropTypes.string,
  rows : PropTypes.array,
  rowKeyName : PropTypes.string,
  rowValueName : PropTypes.string,
  className : PropTypes.string
};

class TwoLvlsDeepTable extends PureComponent {
  render() {
    const { mainHeader, commonHeader, rows, rowKeyName, rowValueName, className } = this.props;

    return (<table className={className || ''}>
      <thead>
        <tr>
          <th>{mainHeader}></th>
          <th>{commonHeader}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((item, i) => {
          return (<tr key={i}>
            <td>
              {item.name}
            </td>
            <td>
              {item[rowKeyName].map(rowItem => rowItem[rowValueName])}
            </td>
          </tr>);
        })}
      </tbody>
    </table>);
  }
}

TwoLvlsDeepTable.propTypes = propTypes;

export default TwoLvlsDeepTable;
