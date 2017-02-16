# fireant-less

[LESS](http://lesscss.org/) plugin for [Fireant](https://github.com/fireantjs/fireant)

## Installation

```shell
npm install -D fireant-less
```

## Sample fireantfile.js

```javascript
var fireant = require("fireant");
var less = require("fireant-less");

fireant.task("watch", function() {
   fireant.watch("css/*.less", function(file) {
      less("css/index.less").save("html/css/styles.css");
   });
});
```

## Sample fireantfile.js, with options

```javascript
var fireant = require("fireant");
var less = require("fireant-less");
var global = require("global");

global.options = {
   less: {
      compress: false
   }
};

fireant.task("watch", function() {
   fireant.watch("css/*.less", function(file) {
      less("css/index.less").save("html/css/styles.css");
   });
});
```