import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import reset from 'style/reset'
import { Table } from 'components/ui'
import { Grid } from 'components/layout'

const GRID_SIZES = {
  xs: 1,
  m: 1 / 2
}

ContainerItem.propTypes = {
  image: PropTypes.string.isRequired,
  shortName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  innerLength: PropTypes.string.isRequired,
  innerHeight: PropTypes.string.isRequired,
  innerWidth: PropTypes.string.isRequired,
  outerLength: PropTypes.string.isRequired,
  outerHeight: PropTypes.string.isRequired,
  outerWidth: PropTypes.string.isRequired,
  doorHeight: PropTypes.string.isRequired,
  doorWidth: PropTypes.string.isRequired,
  innerVolume: PropTypes.string.isRequired,
  ownWeight: PropTypes.string.isRequired,
  maxWeight: PropTypes.string.isRequired
}

function ContainerItem ({
  image,
  shortName,
  name,
  innerLength,
  innerHeight,
  innerWidth,
  outerLength,
  outerHeight,
  outerWidth,
  doorHeight,
  doorWidth,
  innerVolume,
  ownWeight,
  maxWeight
}) {
  return (
    <Fragment>
      <Grid.Unit size={GRID_SIZES}>
        <Container>
          <Image src={image} />
          <FullName>
            {name} {shortName}
          </FullName>
        </Container>
      </Grid.Unit>
      <Grid.Unit size={GRID_SIZES}>
        <Table>
          <thead>
            <tr>
              <th colSpan="3">{shortName}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3">Внешние размеры</td>
              <td>Длина</td>
              <td>{outerLength}</td>
            </tr>
            <tr>
              <td>Ширина</td>
              <td>{outerWidth}</td>
            </tr>
            <tr>
              <td>Высота</td>
              <td>{outerHeight}</td>
            </tr>

            <tr>
              <td rowSpan="3">Внутренние размеры</td>
              <td>Длина</td>
              <td>{innerLength}</td>
            </tr>
            <tr>
              <td>Ширина</td>
              <td>{innerWidth}</td>
            </tr>
            <tr>
              <td>Высота</td>
              <td>{innerHeight}</td>
            </tr>

            <tr>
              <td rowSpan="3">Дверной проем</td>
              <td>Ширина</td>
              <td>{innerWidth}</td>
            </tr>
            <tr>
              <td>Высота</td>
              <td>{innerHeight}</td>
            </tr>
            <tr>
              <td colSpan="3" />
            </tr>

            <tr>
              <td>Внутренний объем</td>
              <td colSpan="2">{innerVolume}</td>
            </tr>

            <tr>
              <td>Вес контейнера</td>
              <td colSpan="2">{ownWeight}</td>
            </tr>

            <tr>
              <td>Максимальная загрузка</td>
              <td colSpan="2">{maxWeight}</td>
            </tr>
          </tbody>
        </Table>
      </Grid.Unit>
    </Fragment>
  )
}

export default ContainerItem

const Container = styled.div`
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  max-height: 150px;
  margin-top: 4rem;
  margin-bottom: 1rem;
`

const FullName = styled.h5`
  ${reset.h};
  font-size: 1.2rem;
  text-align: center;
`
