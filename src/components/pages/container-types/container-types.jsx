import React, { Fragment } from 'react'

import { Section, Grid } from 'components/layout'
import Breadcrumbs from 'components/breadcrumbs'
import { Title } from 'components/meta'

import ContainerItem from './container-item'

const GUTTERS = { vertical: 2 }

function ContainerTypes () {
  return (
    <Fragment>
      <Title title="Типы контейнеров" />
      <Breadcrumbs list={['Полезная информация', 'Типы контейнеров']} />
      <Section title="Стандартные контейнеры">
        <Grid gutters={GUTTERS}>
          <ContainerItem
            image="/images/container-types/20-dfc.svg"
            shortName="20′DV"
            name="Двадцатифутовый контейнер"
            outerLength="6,060 м"
            outerWidth="2,438 м"
            outerHeight="2,590 м"
            innerLength="5,900 м"
            innerWidth="2,350 м"
            innerHeight="2,390 м"
            doorWidth="2,340 м"
            doorHeight="2,280 м"
            innerVolume="33 куб. м"
            ownWeight="2330 кг"
            maxWeight="21700 кг - 28000 кг"
          />
          <ContainerItem
            image="/images/container-types/40-dfc.svg"
            shortName="40′DV"
            name="Cорокафутовый контейнер"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,59 м"
            innerLength="12,03 м"
            innerWidth="2,35 м"
            innerHeight="2,39 м"
            doorWidth="2,34 м"
            doorHeight="2,28 м"
            innerVolume="67,5 куб. м"
            ownWeight="3800 кг"
            maxWeight="26700 кг"
          />
          <ContainerItem
            image="/images/container-types/40-dfc.svg"
            shortName="40′HQ"
            name="Cорокафутовый контейнер повышенной вместимости"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,896 м"
            innerLength="12,03 м"
            innerWidth="2,35 м"
            innerHeight="2,695 м"
            doorWidth="2,34 м"
            doorHeight="2,585 м"
            innerVolume="76 куб. м"
            ownWeight="4000 кг"
            maxWeight="26500 кг"
          />
          <ContainerItem
            image="/images/container-types/45-hc.svg"
            shortName="45′HQ"
            name="Cорокапятифутовый контейнер повышенной вместимости"
            outerLength="13,742 м"
            outerWidth="2,438 м"
            outerHeight="2,896 м"
            innerLength="13,582 м"
            innerWidth="2,35 м"
            innerHeight="2,695 м"
            doorWidth="2,34 м"
            doorHeight="2,585 м"
            innerVolume="85,7 куб. м"
            ownWeight="4100 кг"
            maxWeight="28300 кг"
          />
        </Grid>
      </Section>
      <Section title="Контейнеры &quot;Open Top&quot;">
        <Grid gutters={GUTTERS}>
          <ContainerItem
            image="/images/container-types/20-ot.svg"
            shortName="20′OT"
            name="Двадцатифутовый контейнер «open top»"
            outerLength="6,06 м"
            outerWidth="2,438 м"
            outerHeight="2,59 м"
            innerLength="5,89 м"
            innerWidth="2,32 м"
            innerHeight="2,354 м"
            doorWidth="2,3 м"
            doorHeight="2,35 м"
            innerVolume="32,2 куб. м"
            ownWeight="2400 кг"
            maxWeight="21600 кг"
          />
          <ContainerItem
            image="/images/container-types/40-ot.svg"
            shortName="40′OT"
            name="Сорокафутовый контейнер «open top»"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,59 м"
            innerLength="12,02 м"
            innerWidth="2,35 м"
            innerHeight="2,354 м"
            doorWidth="2,34 м"
            doorHeight="2,35 м"
            innerVolume="66,5 куб. м"
            ownWeight="3800 кг"
            maxWeight="26500 кг"
          />
        </Grid>
      </Section>
      <Section title="Контейнеры &quot;Flat Rack&quot;">
        <Grid gutters={GUTTERS}>
          <ContainerItem
            image="/images/container-types/20-fr.svg"
            shortName="20′FR"
            name="Двадцатифутовый контейнер «flat rack»"
            outerLength="6,06 м"
            outerWidth="2,438 м"
            outerHeight="2,59 м"
            innerLength="5,65 м"
            innerWidth="2,35 м"
            innerHeight="2,23 м"
            doorWidth="-"
            doorHeight="-"
            innerVolume="-"
            ownWeight="3000 кг"
            maxWeight="28000 кг"
          />
          <ContainerItem
            image="/images/container-types/40-fr.svg"
            shortName="40′FR"
            name="Сорокатифутовый контейнер «flat rack»"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,59 м"
            innerLength="12,08 м"
            innerWidth="2,43 м"
            innerHeight="2,1 м"
            doorWidth="-"
            doorHeight="-"
            innerVolume="-"
            ownWeight="5000 кг"
            maxWeight="40000 кг"
          />
        </Grid>
      </Section>
      <Section title="Рефрижераторные контейнеры">
        <Grid gutters={GUTTERS}>
          <ContainerItem
            image="/images/container-types/20-rc.svg"
            shortName="20′RF"
            name="Двадцатифутовый рефрижераторный контейнер"
            outerLength="6,06 м"
            outerWidth="2,438 м"
            outerHeight="2,59 м"
            innerLength="5,45 м"
            innerWidth="2,285 м"
            innerHeight="2,26 м"
            doorWidth="2,26 м"
            doorHeight="2,25 м"
            innerVolume="28,3 куб. м"
            ownWeight="3200 кг"
            maxWeight="20800 кг"
          />
          <ContainerItem
            image="/images/container-types/40-rc.svg"
            shortName="40′RF"
            name="Сорокатифутовый рефрижераторный контейнер"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,59 м"
            innerLength="11,57 м"
            innerWidth="2,285 м"
            innerHeight="2,2 м"
            doorWidth="2,28 м"
            doorHeight="2,15 м"
            innerVolume="58,1 куб. м"
            ownWeight="4500 кг"
            maxWeight="25600 кг"
          />
          <ContainerItem
            image="/images/container-types/40-rc.svg"
            shortName="40′HRF"
            name="Сорокатифутовый рефрижераторный контейнер повышенной вместимости"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,896 м"
            innerLength="11,57 м"
            innerWidth="2,285 м"
            innerHeight="2,526 м"
            doorWidth="2,9 м"
            doorHeight="2,45 м"
            innerVolume="76,7 куб. м"
            ownWeight="4100 кг"
            maxWeight="28000 кг"
          />
        </Grid>
      </Section>
    </Fragment>
  )
}

export default ContainerTypes
