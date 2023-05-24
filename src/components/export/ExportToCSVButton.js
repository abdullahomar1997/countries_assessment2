import React from 'react';
import { CSVLink } from 'react-csv';
import { buttonStyle } from './ExportButtonStyle';

export const ExportToCSVButton = ({data,fileName}) => {

    const dataArray = [
        data,
    ];

    const headers = Object.keys(data).map(propertyName => ({ label: propertyName, key: propertyName }));

    return (
        <button style={buttonStyle}>
            <CSVLink style={{textDecoration:"none",color:"black"}} data={dataArray} headers={headers} filename={`${fileName}.csv`}>
                Export to CSV
            </CSVLink>
        </button>
    );
};