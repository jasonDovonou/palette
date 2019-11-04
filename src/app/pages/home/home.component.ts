import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  topColor = "#fc0d1b";
  bottomColor = "#4c90de";
  top = [];
  bottom = [];
  left = [];
  right = [];
  size = 5;
  white = '#ffffff';
  black = '#000000';

  constructor() {
    this.initializer();
  }

  initializer() {
    this.calcularizer(this.right, this.topColor, this.black)
    this.calcularizer(this.left, this.white, this.bottomColor)
    this.calcularizer(this.bottom, this.topColor, this.white)
    this.calcularizer(this.top, this.black, this.bottomColor)
  }

  gradient(i, j) {
    if (i === 0) return this.top[j];
    if (j === 0) return this.left[i];
    if (i === this.size - 1) return this.bottom[j];
    if (j === this.size - 1) return this.right[i];
    return this.colorizer(j, this.right[i], this.left[i]);
  }

  hex(x) {
    x = x.toString(16);
    return (x.length === 1) ? '0' + x : x;
  }

  calcularizer(arr: Array<string>, color1?, color2?) {
    if (!color1) color1 = this.topColor;
    if (!color2) color2 = this.bottomColor;
    arr.length = 0;
    for (let index = 1; index <= this.size; index++) {
      var color = this.colorizer(index, color1, color2);
      arr.push(color)
    }
  }

  colorizer(index, color1, color2) {
    var ratio = index * 1.0 / this.size;
    var r = Math.ceil(parseInt(color1.substring(1, 3), 16) * ratio + parseInt(color2.substring(1, 3), 16) * (1 - ratio));
    var g = Math.ceil(parseInt(color1.substring(3, 5), 16) * ratio + parseInt(color2.substring(3, 5), 16) * (1 - ratio));
    var b = Math.ceil(parseInt(color1.substring(5, 7), 16) * ratio + parseInt(color2.substring(5, 7), 16) * (1 - ratio));
    return '#' + this.hex(r) + this.hex(g) + this.hex(b);
  }


}
