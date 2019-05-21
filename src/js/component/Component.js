import * as base from './base';

export default class Snake{
  constructor(length = 1, posX, posY, direction) {
    this.posX = base.snake[0].cellIndex;
    this.posY = base.rows.findIndex(function(el, i){
      if(el[i].cells[this.posX].classList[0].includes('snake') === true) return el;
    });
  }

  move(){
    setInterval(function(){
      
    }, 1000)
  }
}