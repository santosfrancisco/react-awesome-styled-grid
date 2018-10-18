[![npm version](https://badge.fury.io/js/react-awesome-styled-grid.svg)](https://www.npmjs.com/package/react-awesome-styled-grid)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![codecov](https://codecov.io/gh/santosfrancisco/react-awesome-styled-grid/branch/master/graph/badge.svg)](https://codecov.io/gh/santosfrancisco/react-awesome-styled-grid)
[![Build Status](https://travis-ci.org/santosfrancisco/react-awesome-styled-grid.svg?branch=master)](https://travis-ci.org/santosfrancisco/react-awesome-styled-grid)

# React Awesome Styled Grid

A responsive grid system for React using styled-components

## Installation

```bash
npm i react-awesome-styled-grid
```

## Documentation

Click [here](https://awesome-styled-grid.netlify.com/) for documentation

## Basic usage

```js
import { Container, Row, Col } from 'react-awesome-styled-grid'

const MyCoolComponent = () => (
  <Container>
    <Row>
      <Col xs={4} md={2} >Col A</Col>
      <Col xs={6} md={10}>Col B</Col>
    </Row>
  </Container>
)
```

## Development
run ```yarn install``` or ```npm install``` to install all dependencies

run ```yarn docz dev``` or ```npm run docz:dev``` to run Docz on port 4000

## Built With

* [Styled-components](https://github.com/styled-components) - Visual primitives for the component age.
* [Docz](https:docz.site) - It's never been easier to document your things

## Contributing

Please read [CONTRIBUTING.md](https://github.com/santosfrancisco/react-awesome-styled-grid/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Francisco Santos** - *Initial work* - [santosfrancisco](https://github.com/santosfrancisco)
* **Camila Belo** - [camilaibs](https://github.com/santosfrancisco)

See also the list of [contributors](https://github.com/santosfrancisco/react-awesome-styled-grid/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/15852005?v=4" width="100px;"/><br /><sub><b>Francisco Santos</b></sub>](http://devchico.com)<br />[💻](https://github.com/santosfrancisco/react-awesome-styled-grid/commits?author=santosfrancisco "Code") [📖](https://github.com/santosfrancisco/react-awesome-styled-grid/commits?author=santosfrancisco "Documentation") [👀](#review-santosfrancisco "Reviewed Pull Requests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!