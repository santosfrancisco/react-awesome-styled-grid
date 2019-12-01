const theme = {
  plain: {
    color: '#9EFEFF',
    backgroundColor: '#2D2A55',
    whiteSpace: 'pre-wrap'
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 238, 128)'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(239, 83, 80, 0.56)'
      }
    },
    {
      types: ['inserted'],
      style: {
        color: 'rgb(173, 219, 103)'
      }
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(179, 98, 255)',
        fontStyle: 'italic'
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(255, 255, 255)'
      }
    },
    {
      types: ['constant'],
      style: {
        color: 'rgb(255, 98, 140)'
      }
    },
    {
      types: ['string', 'url'],
      style: {
        color: 'rgb(165, 255, 144)'
      }
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(255, 238, 128)'
      }
    },
    {
      types: ['number', 'boolean'],
      style: {
        color: 'rgb(255, 98, 140)'
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(241, 250, 140)'
      }
    },
    {
      types: [
        'keyword',
        'operator',
        'property',
        'namespace',
        'tag',
        'selector',
        'doctype'
      ],
      style: {
        color: 'rgb(255, 157, 0)'
      }
    },
    {
      types: ['builtin', 'char', 'constant', 'function', 'class-name'],
      style: {
        color: 'rgb(250, 208, 0)'
      }
    }
  ]
}

export default {
  title: 'React awesome styled grid',
  description: 'A grid system layout for React using styled-components',
  port: 4000,
  src: './src/docs',
  menu: [
    'Getting Started',
    'Usage',
    'Table of props',
    'Utilities',
    'Playground',
    'Custom configuration'
  ],
  themeConfig: {
    prismTheme: theme
  }
}
