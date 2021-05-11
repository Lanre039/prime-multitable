import React from 'react';
import { ITableProps } from './types';
import './styles.css';

function Table(props: ITableProps): JSX.Element {
  const { primeNo } = props;

  //data = primeNo stored in the state (e.g 2,3, 5)
  const renderTd = (data: number[], rowNumber: number) =>
    data.map((cur, index) => <td key={index}>{rowNumber * cur}</td>);

  const renderTableData = () =>
    primeNo.map((rowNo, index) => {
      return (
        <tr key={index}>
          <th key={index}>{rowNo}</th>
          {renderTd(primeNo, rowNo)}
        </tr>
      );
    });

  return (
    <div
      className="table"
      style={{ visibility: primeNo.length ? 'visible' : 'hidden' }}
    >
      <table>
        <thead>
          <tr>
            <th></th>
            {primeNo.length > 0 ? (
              primeNo.map((data, index) => {
                return <th key={index}>{data}</th>;
              })
            ) : (
              <th>
                Enter positive integer greater than 1 only (e.g 2,3,4 etc.)
              </th>
            )}
          </tr>
        </thead>
        <tbody>{primeNo.length > 0 ? renderTableData() : null}</tbody>
      </table>
    </div>
  );
}

export default Table;
