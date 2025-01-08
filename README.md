# Translate Blocks Editor.js package

## install package

```js
npm i @neiderruiz/editor-js-translate
```

## how to use it?

```js
import { translateBlocks } form '@neiderruiz/editor-js-translate'

// translateBlocks(blocks, dest = 'en', locale = 'es')

// translation of an example from spanish to english
const blocks = {
      "time": 1690752723058,
      "blocks": [
        {
          "id": "yA6AFPfrks",
          "type": "paragraph",
          "data": {
            "text": "ejemplo traduccion de parrafo"
          }
        },
        {
          "id": "74aVbHQs3p",
          "type": "paragraph",
          "data": {
            "text": "traducimos otro parrafo de ejemplo"
          }
        },
        {
          "id": "fAmL1N8jzn",
          "type": "header",
          "data": {
            "text": "esta es una traduccion de un titulo",
            "level": 1
          }
        },
        {
          "id": "fAmL1N8jzn",
          "type": "header",
          "data": {
            "text": "suponiendo que es un titulo h2",
            "level": 2
          }
        },
        {
          "id": "Ksdhgsjf",
          "type": "linkTool",
          "data": {
            "link": "https://neiderruiz.com/",
            "meta": {
              "title": "Blog Neider Ruiz",
              "description": "Blog de desarrollo de software",
              "image": {
                "url": "https://neiderruiz.s3.amazonaws.com/avatar/neiderruiz_.png"
              }
            }
          }
        }
      ],
      "version": "2.27.2"
    }

    translateBlocks(blocks, 'en','es').then(result => {
        console.log(result)
    })

```

## result example english
```
{
    "time": 1690752723058,
    "blocks": [
        {
            "id": "yA6AFPfrks",
            "type": "paragraph",
            "data": {
                "text": "Paragraph translation example"
            }
        },
        {
            "id": "74aVbHQs3p",
            "type": "paragraph",
            "data": {
                "text": "We translate another example paragraph"
            }
        },
        {
            "id": "fAmL1N8jzn",
            "type": "header",
            "data": {
                "text": "this is a translation of a title",
                "level": 1
            }
        },
        {
            "id": "fAmL1N8jzn",
            "type": "header",
            "data": {
                "text": "assuming it's an h2 title",
                "level": 2
            }
        },
        {
            "id": "Ksdhgsjf",
            "type": "linkTool",
            "data": {
                "link": "https://neiderruiz.com/",
                "meta": {
                    "title": "Blog Neider Ruiz",
                    "description": "Blog de desarrollo de software",
                    "image": {
                        "url": "https://neiderruiz.s3.amazonaws.com/avatar/neiderruiz_.png"
                    }
                }
            }
        }
    ],
    "version": "2.27.2"
}
```

