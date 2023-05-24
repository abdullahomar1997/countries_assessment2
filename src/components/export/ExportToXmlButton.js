import { buttonStyle } from "./ExportButtonStyle";

export const ExportToXmlButton = ({data,fileName}) => {
  
  const xmlString = generateXmlString(data);
  
  return (
    <button style={buttonStyle} onClick={() => downloadXmlFile(xmlString,fileName)}>
      Export to XML
    </button>
  );
};

const generateXmlString = (data) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<countries>\n';
  xml += '<country>\n';
  
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      xml += `  <${key}>${data[key]}</${key}>\n`;
    }
  }
  
  xml += '</country>';
  xml += '</countries>';
  return xml;
};

export const downloadXmlFile = (xmlString,fileName) => {
  const blob = new Blob([xmlString], { type: 'text/xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.xml`;
  link.click();
  URL.revokeObjectURL(url);
};
  