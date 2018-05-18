import React, { Fragment } from 'react'

import { Section, Grid } from 'components/layout'
import { Button, Input } from 'components/ui'

const Ui = () => (
  <Fragment>
    <Section>
      <h2>Inputs</h2>
      <Grid>
        <Grid.Unit size={2 / 6}>
          <Input placeholder="Ваше Имя" />
        </Grid.Unit>
        <Grid.Unit size={2 / 6}>
          <Input placeholder="Ваше Имя" error="Введите корректный Email" />
        </Grid.Unit>
        <Grid.Unit size={2 / 6}>
          <Input value="John Doe" />
        </Grid.Unit>
        <Grid.Unit size={2 / 6}>
          <Input disabled value="John Doe" />
        </Grid.Unit>
      </Grid>
      <h2>Buttons</h2>
      <h3>Regular</h3>
      <Grid>
        <Grid.Unit size={1 / 5}>
          <Button fullWidth>Подать Заявку</Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button fullWidth disabled>
            Подать Заявку
          </Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button fullWidth primary>
            Подать Заявку
          </Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button fullWidth success>
            Подать Заявку
          </Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button warning>Подать Заявку</Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button danger>Подать Заявку</Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button black>Подать Заявку</Button>
        </Grid.Unit>
      </Grid>
      <h5>Link</h5>
      <Grid>
        <Grid.Unit size={1 / 5}>
          <Button fullWidth href="#">
            Подать Заявку
          </Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button fullWidth href="#" disabled>
            Подать Заявку
          </Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button fullWidth href="#" primary>
            Подать Заявку
          </Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button fullWidth href="#" success>
            Подать Заявку
          </Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button fullWidth href="#" warning>
            Подать Заявку
          </Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button href="#" danger>
            Подать Заявку
          </Button>
        </Grid.Unit>
        <Grid.Unit size={1 / 5}>
          <Button href="#" black>
            Подать Заявку
          </Button>
        </Grid.Unit>
      </Grid>
    </Section>
  </Fragment>
)

export default Ui
