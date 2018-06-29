/* eslint-disable */
import React from 'react'
import { StyleSheetManager } from 'styled-components'

import RootProvider from 'components/root-provider'

function wrapPreview(Component, mapEntryToProps) {
  return function PreviewComponent({ entry }) {
    const iframe = document.querySelector('.nc-previewPane-frame')
    if (!iframe) return 'No iframe found'
    const props = {
      ...mapEntryToProps(entry),
      previewMode: true
    }
    return (
      <StyleSheetManager target={iframe.contentDocument.head}>
        <RootProvider titlePrefix="PREVIEW">
          <Component {...props} />
        </RootProvider>
      </StyleSheetManager>
    )
  }
}

export default wrapPreview
