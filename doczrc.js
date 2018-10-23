
export default {
  title: 'React awesome styled grid',
  description: 'A grid system layout for React using styled-components',
  port: 4000,
  protocol: 'http',
  htmlContext: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://codemirror.net/theme/dracula.css'
      }]
    }
  },
  themeConfig: {
    codemirrorTheme: 'dracula'
  },
  dest: 'docs',
  base: '/react-awesome-styled-grid'
}
