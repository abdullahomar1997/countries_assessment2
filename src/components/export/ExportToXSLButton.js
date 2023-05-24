import React from 'react';
import * as XLSX from 'xlsx';
import { buttonStyle } from './ExportButtonStyle';

const ExportToXSLButton = ({ data, fileName}) => {
  const dataArray = [
  data,
];
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(dataArray);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, fileName);
    XLSX.writeFile(workbook, fileName + '.xls');
  };

  return (
    <button style={buttonStyle} onClick={exportToExcel}>
      Export to Excel
    </button>
  );
};

export default ExportToXSLButton;
