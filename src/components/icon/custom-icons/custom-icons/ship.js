/* eslint-disable */
/* prettier-ignore */
import * as utils from '../utils'

export default {
  prefix: 'cus',
  iconName: 'ship',
  icon: [
    480, // width
    480, // height
    [],
    null,
    `
      M474.193,288.306c-0.714-0.204-1.454-0.308-2.196-0.308h-40v-56c0-4.418-3.582-8-8-8h-40v-56c0-4.418-3.582-8-8-8h-160
			c-4.418,0-8,3.582-8,8v56h-24c-4.418,0-8,3.582-8,8v56h-16v-136c0-4.418-3.582-8-8-8h-8v-32h144v16h-16c-4.418,0-8,3.582-8,8
			s3.582,8,8,8h24c4.418,0,8-3.582,8-8v-64c0-4.418-3.582-8-8-8h-192c-4.418,0-8,3.582-8,8v72h-40c-4.418,0-8,3.582-8,8v136h-40
			c-4.418,0.002-7.998,3.585-7.996,8.004c0,0.743,0.104,1.482,0.308,2.196l32,112c0.982,3.432,4.118,5.798,7.688,5.8h400
			c3.57-0.002,6.706-2.368,7.688-5.8l32-112C480.899,293.95,478.441,289.521,474.193,288.306z M143.996,79.997h144v16h-144V79.997z
			 M415.996,239.997v48h-144v-48H415.996z M223.996,175.997h144v48h-144V175.997z M191.996,239.997h64v48h-64V239.997z
			 M111.996,79.997h16v64h-16V79.997z M63.996,159.997h80v128h-80V159.997z M433.964,399.997H46.028l-9.136-32H443.1
      L433.964,399.997z M447.676,351.997H32.316l-13.712-48h442.784L447.676,351.997
      
      M423.996,319.997h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16c4.418,0,8-3.582,8-8S428.415,319.997,423.996,319.997

      M375.996,319.997h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16c4.418,0,8-3.582,8-8S380.415,319.997,375.996,319.997

      ${utils.rect(79.996, 175.997, 16, 16)}

      ${utils.rect(111.996, 175.997, 16, 16)}

      z
    ` // svg path data
  ]
}