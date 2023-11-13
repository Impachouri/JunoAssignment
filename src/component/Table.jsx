import { RowHeadIcon, Redirect, Circle } from './Icons';

const renderTableCell = (columnName, rowData) => {
    switch (columnName) {
        case 'User':
            return (
                <div className="user-section">
                    <div className="user-name-email">
                        <span className="user-name">{rowData[columnName].name}</span>
                        <span className="user-email">{rowData[columnName].email}</span>
                    </div>
                    <Redirect />
                </div>
            );

        case 'Action taken by':
            return (
                <div className="user-section">
                    <div className="user-name-email">
                        <span className="user-name">{rowData[columnName].name}</span>
                        <span className="user-email">{rowData[columnName].email}</span>
                    </div>
                </div>
            );

        case 'Risk level':
            return (
                <span className="risk-level">
                    <Circle />
                    {rowData[columnName]}
                </span>
            );
        case 'Date added on':
            return (
                <span className="date-added-on">
                    {rowData[columnName]}
                </span>
            );
        case 'Previously reviewed':
            return (
                <div className="previously-reviewed">
                    <span className="previously-reviewed-choice" >{rowData[columnName].choice}</span>
                    <span className="previously-reviewed-date" >{rowData[columnName].date}</span>
                </div>
            );
        default:
            return (
                <span className="default-row">
                    {rowData[columnName]}
                </span>
            );
    }
};

const Table = ({ headings, data }) => (
    <table className="custom-table">
        <thead>
            <tr className="table-header-row">
                {headings.map((heading, index) => (
                    <th className='table-head' key={index}>
                        <div className="row-head-icon">
                            {heading}
                            {heading === 'Risk level' && <RowHeadIcon />}
                            {heading === 'In queue for' && <RowHeadIcon />}
                            {heading === 'Date added on' && <RowHeadIcon />}
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {headings.map((heading, colIndex) => (
                        <td key={colIndex}>{renderTableCell(heading, row)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;