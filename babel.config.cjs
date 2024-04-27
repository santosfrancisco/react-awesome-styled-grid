module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react"],
    "@babel/preset-typescript",
    "@docusaurus/core/lib/babel/preset"
  ],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "transform-class-properties",
    "babel-plugin-styled-components"
  ]
};
