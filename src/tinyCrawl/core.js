import PIXI from '../../libs/pixi'

export default class Game {
  constructor (target = 'body') {
    this.domElement = document.querySelector(target)
    this.stage = new PIXI.Container()
    console.log(this.stage)
  }
}
