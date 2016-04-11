import Game from './tinyCrawl/core'

let game = new Game('#game')
console.log(game)

if (module.hot) {
  module.hot.accept('./tinyCrawl/core', function () {
    game = null
  })
}
