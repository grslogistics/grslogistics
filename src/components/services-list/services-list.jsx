import React, { Fragment } from 'react'
// import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

import { Grid } from 'components/layout'
// import Carousel from 'components/carousel'
// import Breakpoint from 'components/breakpoint'

import ServicesItem from './services-item'

const GRID_SIZE = {
  xs: 1,
  s: 1 / 2,
  m: 1 / 5
}

ServicesList.propTypes = {
  list: PropTypes.array
}

function ServicesList ({ list }) {
  return (
    <Fragment>
      <Grid>
        {list.map((service, i) => (
          <Grid.Unit key={`${service.url}${i}`} size={GRID_SIZE}>
            <ServicesItem {...service} />
          </Grid.Unit>
        ))}
      </Grid>
    </Fragment>
  )
}

// class ServicesList extends Component {
//   static propTypes = {
//     services: PropTypes.array
//   }
//   renderCarousel = (services, perPage) => {
//     return (
//       <Carousel autoplay={3500} slidesPerView={perPage} pagination>
//         {services.map((service, i) => (
//           <div key={`${service.url}${i}`}>
//             <ServicesItem {...service} />
//           </div>
//         ))}
//       </Carousel>
//     )
//   }
//   renderGrid = (services, perPage) => {
//     return (
//       <Grid>
//         {services.map((service, i) => (
//           <Grid.Unit size={1 / perPage} key={`${service.url}${i}`}>
//             <ServicesItem {...service} />
//           </Grid.Unit>
//         ))}
//       </Grid>
//     )
//   }
//   renderItems (services, breakpoint) {
//     const perPage = breakpoint.isGt('l') ? 3 : breakpoint.isGt('m') ? 2 : 1
//     return services.length > perPage
//       ? this.renderCarousel(services, perPage)
//       : this.renderGrid(services, perPage)
//   }
//   render () {
//     const { services } = this.props

//     return (
//       <Breakpoint>
//         {breakpoint => this.renderItems(services, breakpoint)}
//       </Breakpoint>
//     )
//   }
// }

export default ServicesList
