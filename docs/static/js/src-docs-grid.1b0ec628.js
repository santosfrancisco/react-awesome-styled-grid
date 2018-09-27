(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/docs/grid.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),l=a.n(t),s=a("./node_modules/@mdx-js/tag/dist/index.js"),o=a("./src/index.js");function m(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}n.default=function(e){var n=e.components;m(e,["components"]);return l.a.createElement(s.MDXTag,{name:"wrapper",components:n},l.a.createElement(s.MDXTag,{name:"h1",components:n,props:{id:"usage"}},"Usage"),l.a.createElement(s.MDXTag,{name:"p",components:n},"Resizes your window to see the responsive magic happening \ud83d\ude0e"),l.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"responsive"}},"Responsive"),l.a.createElement(o.b,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:4,sm:6,md:9},"xs=",4," sm=",6," md=",9),l.a.createElement(o.a,{debug:!0,noGutter:!0},l.a.createElement(o.a,{debug:!0},"inside another Col"),l.a.createElement(o.a,{debug:!0},"inside another Col"))),l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:12,sm:6,md:10,lg:6},"xs=",12," sm=",6," md=",10," lg=",6),l.a.createElement(o.a,{debug:!0,xs:12,sm:6,md:2,lg:6},"xs=",12," sm=",6," md=",2," lg=",6))),l.a.createElement(s.MDXTag,{name:"blockquote",components:n},l.a.createElement(s.MDXTag,{name:"p",components:n,parentName:"blockquote"},"\ud83d\udca1",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"Tip!")," if no dimension is defined, the column size will be ",l.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"auto"),".\n(i.e. md={6}. This means that ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"xs")," and ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sm")," is auto,\nand from ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"md"),", the size will be 6 columns)")),l.a.createElement(s.MDXTag,{name:"pre",components:n},l.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"<Container>\n  <Row>\n    <Col debug xs={4} sm={6} md={9}>\n      xs={4} sm={6} md={9}\n    </Col>\n    <Col debug noGutter>\n      <Col debug>inside another Col</Col>\n      <Col debug>inside another Col</Col>\n    </Col>\n  </Row>\n  <Row>\n    <Col debug xs={12} sm={6} md={10} lg={6}>\n      xs={12} sm={6} md={10} lg={6}\n    </Col>\n    <Col debug xs={12} sm={6} md={2} lg={6}>\n      xs={12} sm={6} md={2} lg={6}\n    </Col>\n  </Row>\n</Container>\n")),l.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"offset"}},"Offset"),l.a.createElement(o.b,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:1,xsOffset:11},"\xa0")),l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:2,xsOffset:10},"\xa0")),l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:3,xsOffset:9},"\xa0")),l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:4,xsOffset:8},"\xa0")),l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:5,xsOffset:7},"\xa0")),l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:6,xsOffset:6},"\xa0")),l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:7,xsOffset:5},"\xa0")),l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:8,xsOffset:4},"\xa0")),l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:9,xsOffset:3},"\xa0")),l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:10,xsOffset:2},"\xa0")),l.a.createElement(o.c,null,l.a.createElement(o.a,{debug:!0,xs:11,xsOffset:1},"\xa0"))),l.a.createElement(s.MDXTag,{name:"pre",components:n},l.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"<Container>\n  <Row><Col debug xs={1} xsOffset={11}>&nbsp;</Col></Row>\n  <Row><Col debug xs={2} xsOffset={10}>&nbsp;</Col></Row>\n  <Row><Col debug xs={3} xsOffset={9}>&nbsp;</Col></Row>\n  <Row><Col debug xs={4} xsOffset={8}>&nbsp;</Col></Row>\n  <Row><Col debug xs={5} xsOffset={7}>&nbsp;</Col></Row>\n  <Row><Col debug xs={6} xsOffset={6}>&nbsp;</Col></Row>\n  <Row><Col debug xs={7} xsOffset={5}>&nbsp;</Col></Row>\n  <Row><Col debug xs={8} xsOffset={4}>&nbsp;</Col></Row>\n  <Row><Col debug xs={9} xsOffset={3}>&nbsp;</Col></Row>\n  <Row><Col debug xs={10} xsOffset={2}>&nbsp;</Col></Row>\n  <Row><Col debug xs={11} xsOffset={1}>&nbsp;</Col></Row>\n</Container>\n")),l.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"row-reverse"}},"Row reverse"),l.a.createElement(o.b,null,l.a.createElement(o.c,{mdReverse:!0},l.a.createElement(o.a,{debug:!0,xs:4},"Column A"),l.a.createElement(o.a,{debug:!0,xs:4},"Column B"),l.a.createElement(o.a,{debug:!0,xs:4},"Column C"))),l.a.createElement(s.MDXTag,{name:"pre",components:n},l.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"<Container>\n  <Row mdReverse>\n    <Col debug xs={4}>Column A</Col>\n    <Col debug xs={4}>Column B</Col>\n    <Col debug xs={4}>Column C</Col>\n  </Row>\n</Container>\n")),l.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"column-reverse"}},"Column reverse"),l.a.createElement(o.b,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{noGutter:!0,mdReverse:!0},l.a.createElement(o.a,{debug:!0,xs:4},"Column A"),l.a.createElement(o.a,{debug:!0,xs:4},"Column B"),l.a.createElement(o.a,{debug:!0,xs:4},"Column C")))),l.a.createElement(s.MDXTag,{name:"pre",components:n},l.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"<Container>\n  <Row>\n    <Col noGutter mdReverse>\n      <Col debug xs={4}>Column A</Col>\n      <Col debug xs={4}>Column B</Col>\n      <Col debug xs={4}>Column C</Col>\n    </Col>\n  </Row>\n</Container>\n")),l.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"visible"}},"Visible"),l.a.createElement(s.MDXTag,{name:"p",components:n},"Show a element only on specific media"),l.a.createElement(s.MDXTag,{name:"h3",components:n,props:{id:"example-using-only-text"}},"Example using only text"),l.a.createElement("div",null,l.a.createElement(o.d,{xs:!0},"This text is visible only on: XS"),l.a.createElement(o.d,{sm:!0},"This text is visible only on: SM"),l.a.createElement(o.d,{md:!0},"This text is visible only on: MD"),l.a.createElement(o.d,{lg:!0},"This text is visible only on: LG"),l.a.createElement(o.d,{xl:!0},"This text is visible only on: XL")),l.a.createElement(s.MDXTag,{name:"pre",components:n},l.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"<div>\n  <Visible xs>This text is visible only on: XS</Visible>\n  <Visible sm>This text is visible only on: SM</Visible>\n  <Visible md>This text is visible only on: MD</Visible>\n  <Visible lg>This text is visible only on: LG</Visible>\n  <Visible xl>This text is visible only on: XL</Visible>\n</div>\n")),l.a.createElement(s.MDXTag,{name:"h3",components:n,props:{id:"example-using-an-row-with-col"}},"Example using an Row with Col"),l.a.createElement("div",null,l.a.createElement(o.c,null,l.a.createElement(o.d,{xs:!0,sm:!0},l.a.createElement(o.a,{debug:!0},"Visible only on XS and SM screens")),l.a.createElement(o.d,{md:!0,lg:!0,xl:!0},l.a.createElement(o.a,{debug:!0},"Visible only on MD, LG and XL screens")))),l.a.createElement(s.MDXTag,{name:"pre",components:n},l.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"<div>\n  <Row>\n    <Visible xs sm><Col debug>Visible only on XS and SM screens</Col></Visible>\n    <Visible md lg xl><Col debug>Visible only on MD, LG and XL screens</Col></Visible>\n  </Row>\n</div>\n")))}}}]);