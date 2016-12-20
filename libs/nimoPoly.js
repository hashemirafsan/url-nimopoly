/*!
* Url-NimoPoly
*Copyright (c) - 2016 - Hashemi Rafsan
*/

'use strict'

var nimoPoly = {
  navlist : "",   // nav bar list
  /*
    Url params checking function
  */
  check : function (nav){
    var VerifyStringNav = nav.replace(/[`@()!'~$*^%"#:;.,{}_|]/gi,"");
    for (var i = 0; i < this.navlist.length; i++) {
      if(this.navlist[i] === VerifyStringNav){
        return VerifyStringNav;
        break;
      } else{
        return "404";
      }
    }
  }
};
