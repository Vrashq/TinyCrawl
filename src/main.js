import chaine from './hello'

let demo = document.querySelector('#demo')
demo.innerHTML = chaine + ' !!!'

if (module.hot) {
  module.hot.accept('./hello', function () {
    let n = require('./hello')
    demo.innerHTML = n.default
  })
}
