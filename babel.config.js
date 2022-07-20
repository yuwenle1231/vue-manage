module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //按需引入element ui
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
