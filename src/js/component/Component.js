import * as base from './base';

export default class Snake{
  constructor() {
    this.y = Math.floor(Math.random() * (base.rows.length)),
    this.x = Math.floor(Math.random() * (base.rows[this.y].cells.length)),
    this.coors = base.rows[this.y].cells[this.x],
    this.start = this.coors.classList.add('snake')
  }

  // move(){
  //   setInterval(function(){
  //     this.coors.classList.remove('snake');
  //     this.y += 1;
  //     this.coors.classList.add('snake');
  //   }, 1000)
  }

  // getRandomInt() {
  //   return {
  //     y: Math.floor(Math.random() * (base.rows.length)),
  //     x: Math.floor(Math.random() * (base.rows[this.y].cells.length)),
  //   } 
  // }
}