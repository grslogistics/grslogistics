import React, { Fragment } from 'react'
import * as R from 'ramda'
import { Section, Grid } from 'components/layout'
import { Button, Input, Table, Accordion, List } from 'components/ui'

import Markdown from 'components/markdown'

const Ui = () => (
  <Fragment>
    <Section>
      <Markdown source={TEXT_MOCK} />
    </Section>
    <Section>
      <List icon="smile">
        <List.Item>Оптимизация логистических процессов</List.Item>
        <List.Item icon="check">Оптимизация логистических процессов</List.Item>
        <List.Item>Оптимизация логистических процессов</List.Item>
        <List.Item>Оптимизация логистических процессов</List.Item>
      </List>
    </Section>
    <Section>
      <Accordion>
        <Accordion.Item title="Оптимизация логистических процессов">
          Оптимизация логистических процессов Оптимизация логистических
          процессов Оптимизация логистических процессов Оптимизация
          логистических процессов
        </Accordion.Item>
        <Accordion.Item title="Оптимизация логистических процессов">
          Оптимизация логистических процессов Оптимизация логистических
          процессов Оптимизация логистических процессов Оптимизация
          логистических процессов
        </Accordion.Item>
        <Accordion.Item title="Оптимизация логистических процессов">
          Оптимизация логистических процессов Оптимизация логистических
          процессов Оптимизация логистических процессов Оптимизация
          логистических процессов
        </Accordion.Item>
      </Accordion>
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
    <Section>
      <Table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Город</th>
            <th>Email</th>
            <th>Цена</th>
            <th>Валюта</th>
          </tr>
        </thead>
        <tbody>
          {R.repeat(null, 10).map((_, i) => (
            <tr key={i}>
              <td>John Doe</td>
              <td>Kyiv</td>
              <td>john@doe.com</td>
              <td>1000</td>
              <td>UAH</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Section>
  </Fragment>
)

export default Ui

const TEXT_MOCK = `
  ---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
- __[pica](/pica/demo/)__ - high quality and fast image
- __[pica](pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b
`
