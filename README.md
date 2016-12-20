
## Nimopoly

[![Nimopoly Logo](http://test.partyherenow.com/nimopoly.jpg)](https://github.com/hashemirafsan/url-nimopoly)

## Installation

```bash
$ npm install url-nimopoly
```
## How to configure

```js
const nimoPoly = require('url-nimopoly')

//Define your navigation list array
nimoPoly.navlist = ["index","profile","about-us","contact us"]

//If you use express js for routing
app.get('/:nav',function(req,res){
  res.send(nimoPoly.check(req.params.nav),{

  })
})
```
