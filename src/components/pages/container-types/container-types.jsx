import React, { Fragment } from 'react'

import { Section, Grid } from 'components/layout'
import PageTitle from 'components/page-title'

import ContainerItem from './container-item'

const BREADCRUMBS = [{ label: 'Главная', url: '/' }]

function ContainerTypes () {
  return (
    <Fragment>
      <PageTitle title="Типы контейнеров" breadcrumbs={BREADCRUMBS} />
      <Section title="Стандартные контейнеры">
        <Grid>
          <ContainerItem
            image="/images/container-types/20-dfc.svg"
            shortName="20′ DC (DV, GP)"
            name="Двадцатифутовый контейнер"
            outerLength="6,058 м"
            outerWidth="2,438 м"
            outerHeight="2,591 м"
            innerLength="5,898 м"
            innerWidth="2,352 м"
            innerHeight="2,390 м"
            doorWidth="2,340 м"
            doorHeight="2,280 м"
            innerVolume="33,2 куб. м"
            ownWeight="2280 кг"
            maxWeight="21720 кг (28200 кг – 20′ НТ)"
          />
          <ContainerItem
            image="/images/container-types/40-dfc.svg"
            shortName="40′ DC (DV, GP)"
            name="Cорокафутовый контейнер"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,591 м"
            innerLength="12,024 м"
            innerWidth="2,352 м"
            innerHeight="2,390 м"
            doorWidth="2,340 м"
            doorHeight="2,280 м"
            innerVolume="67,7 куб. м"
            ownWeight="4000 кг"
            maxWeight="26650 кг (до 28800 кг)"
          />
          <ContainerItem
            image="/images/container-types/40-dfc.svg"
            shortName="40′ HC (HQ)"
            name="Cорокафутовый контейнер повышенной вместимости"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,698 м"
            innerLength="12,031 м"
            innerWidth="2,352 м"
            innerHeight="2,698 м"
            doorWidth="2,340 м"
            doorHeight="2,585 м"
            innerVolume="76,3 куб. м"
            ownWeight="4200 кг"
            maxWeight="26300 кг — 28700 кг"
          />
          <ContainerItem
            image="/images/container-types/45-hc.svg"
            shortName="45′ HC (HQ)"
            name="Cорокапятифутовый контейнер повышенной вместимости"
            outerLength="13,716 м"
            outerWidth="2,438 м"
            outerHeight="2,698 м"
            innerLength="13,554 м"
            innerWidth="2,352 м"
            innerHeight="2,698 м"
            doorWidth="2,340 м"
            doorHeight="2,585 м"
            innerVolume="86 куб. м"
            ownWeight="4900 кг"
            maxWeight="25680 кг — 27800 кг"
          />
        </Grid>
      </Section>
      <Section title="Специальные контейнеры">
        <Grid>
          <ContainerItem
            image="/images/container-types/20-ot.svg"
            shortName="20′ OT"
            name="Двадцатифутовый контейнер «open top»"
            outerLength="6,058 м"
            outerWidth="2,438 м"
            outerHeight="2,591 м"
            innerLength="5,898 м"
            innerWidth="2,352 м"
            innerHeight="2,360 м"
            doorWidth="2,340 м"
            doorHeight="2,295 м"
            innerVolume="32,7 куб. м"
            ownWeight="2300 кг"
            maxWeight="27000 кг"
          />
          <ContainerItem
            image="/images/container-types/40-ot.svg"
            shortName="40′ OT"
            name="Сорокафутовый контейнер «open top»"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,591 м"
            innerLength="12,032 м"
            innerWidth="2,352 м"
            innerHeight="2,360 м"
            doorWidth="2,338 м"
            doorHeight="2,279 м"
            innerVolume="66,7 куб. м"
            ownWeight="4000 кг"
            maxWeight="26000 кг"
          />
          <ContainerItem
            image="/images/container-types/20-fr.svg"
            shortName="20′ FR"
            name="Двадцатифутовый контейнер «flat rack»"
            outerLength="6,058 м"
            outerWidth="2,438 м"
            outerHeight="2,591 м"
            innerLength="5,618 м"
            innerWidth="2,438 м"
            innerHeight="2,233 м"
            doorWidth="-"
            doorHeight="-"
            innerVolume="30,5 куб. м"
            ownWeight="2800 кг"
            maxWeight="27200 – 31100 кг"
          />
          <ContainerItem
            image="/images/container-types/40-fr.svg"
            shortName="40′ FR"
            name="Сорокатифутовый контейнер «flat rack»"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,591 м"
            innerLength="11,652 м"
            innerWidth="2,438 м"
            innerHeight="1,995 м"
            doorWidth="-"
            doorHeight="-"
            innerVolume="55,5 куб. м"
            ownWeight="5000 кг"
            maxWeight="34500 — 40500 кг"
          />
        </Grid>
      </Section>
      <Section title="Рефрижераторные контейнеры">
        <Grid>
          <ContainerItem
            image="/images/container-types/20-rc.svg"
            shortName="20′ RF"
            name="Двадцатифутовый рефрижераторный контейнер"
            outerLength="6,058 м"
            outerWidth="2,438 м"
            outerHeight="2,591 м"
            innerLength="5,451 м"
            innerWidth="2,290 м"
            innerHeight="2,167 м"
            doorWidth="2,290 м"
            doorHeight="2,212 м"
            innerVolume="27 куб. м"
            ownWeight="3000 кг"
            maxWeight="27500 кг"
          />
          <ContainerItem
            image="/images/container-types/40-rc.svg"
            shortName="40′ RF"
            name="Сорокатифутовый рефрижераторный контейнер"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,591 м"
            innerLength="11,493 м"
            innerWidth="2,270 м"
            innerHeight="2,197 м"
            doorWidth="2,282 м"
            doorHeight="2,155 м"
            innerVolume="57,8 куб. м"
            ownWeight="4900 кг"
            maxWeight="25600 кг"
          />
          <ContainerItem
            image="/images/container-types/40-rc.svg"
            shortName="40′ RF HC (RQ)"
            name="Сорокатифутовый рефрижераторный контейнер повышенной вместимости"
            outerLength="12,192 м"
            outerWidth="2,438 м"
            outerHeight="2,698 м"
            innerLength="11,580 м"
            innerWidth="2,275 м"
            innerHeight="2,415 м"
            doorWidth="2,276 м"
            doorHeight="2,471 м"
            innerVolume="67,5 куб. м"
            ownWeight="4500 кг"
            maxWeight="29500 кг"
          />
        </Grid>
      </Section>
    </Fragment>
  )
}

export default ContainerTypes
