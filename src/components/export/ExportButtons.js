import React from 'react'
import { ExportToCSVButton } from './ExportToCSVButton'
import ExportToXSLButton from './ExportToXSLButton'
import { ExportToXmlButton } from './ExportToXmlButton'

const ExportButtons = ({data,fileName}) => {
  return (
    <>
        <ExportToCSVButton data={data} fileName={fileName} />
        <ExportToXSLButton data={data} fileName={fileName} />
        <ExportToXmlButton data={data} fileName={fileName} />
    </>
  )
}

export default ExportButtons