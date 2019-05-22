import * as base from './base';

export default class Snake {

  move() {
    let getY = Math.floor(Math.random() * (base.rows.length));
    let getX = Math.floor(Math.random() * (base.rows[getY].cells.length));

    // console.log(base.coors);
    setInterval(function () {
      getY += 1;
      let coors = base.rows[getY].cells[getX].classList.add('snake');
      console.log(getY);
    }, 1000)
  }

  // getRandomInt() {
  //   return {
  //     y: Math.floor(Math.random() * (base.rows.length)),
  //     x: Math.floor(Math.random() * (base.rows[this.y].cells.length)),
  //   } 
  // }
}