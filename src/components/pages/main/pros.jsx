import React from 'react'
import PropTypes from 'prop-types'

import colors from 'style/colors'
import Image from 'components/image'
import { Grid, Section } from 'components/layout'
import { List } from 'components/ui'

const GRID_SIZES = {
  xs: 1,
  m: 1 / 2
}

Pros.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  image: PropTypes.object
}

function Pros ({ list, title, image }) {
  return (
    <Section background={colors.lightGray} title={title}>
      <Grid>
        <Grid.Unit size={GRID_SIZES}>
          <List>
            {list.map((pro, i) => (
              <List.Item key={`${pro}@${i}`}>{pro}</List.Item>
            ))}
          </List>
        </Grid.Unit>
        <Grid.Unit size={GRID_SIZES} visible={{ xs: false, m: true }}>
          <div style={{ width: '100%' }}>
            <Image image={image} />
          </div>
        </Grid.Unit>
      </Grid>
    </Section>
  )
}

export default Pros
