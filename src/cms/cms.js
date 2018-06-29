import * as R from 'ramda'
import CMS from 'netlify-cms'

import wrapPreview from './wrap-preview'

import Main from 'components/pages/main'
CMS.registerPreviewStyle('/styles.css')

// CMS.registerPreviewTemplate(
//   'main',
//   wrapPreview(Main, entry => {
//     const { data } = entry.toJS()

//     return {
//       hero: data.hero,
//       about: data.about,
//       services: {
//         ...data.services,
//         list: R.repeat(
//           {
//             title: 'Услуга',
//             url: '#',
//             icon: 'cus-container',
//             description: 'lorem ipsum'
//           },
//           6
//         )
//       },
//       pros: data.pros,
//       cta: data.cta
//     }
//   })
// )
