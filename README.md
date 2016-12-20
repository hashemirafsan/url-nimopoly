# Nimopoly
It is a URL sanitizer. If you want remove special characters from your URL in NODE JS app then you can try it .

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
