import React from 'react';
import './table.scss';

export interface TableColumn<T> {
    key: keyof T;
    label: string;
    render?: (value: any, row: T) => React.ReactNode;
}

export interface TableProps<T> {
    columns: TableColumn<T>[];
    data: T[];
    keyField: keyof T;
}

function Table<T>({ columns, data, keyField }: TableProps<T>) {
    return (
        <div className='container-table'>
                    <div className="table-wrapper">
            <table className="custom-table">
                <thead>
                    <tr>
                        {columns.map(col => (
                            <th key={String(col.key)}>
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={String(row[keyField])}>
                            {columns.map(col => (
                                <td key={String(col.key)}>
                                    {col.render ? col.render(row[col.key], row) : String(row[col.key])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </div>

    );
}

export default Table;
