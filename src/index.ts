import * as p5 from 'p5';

const sketch = (p: p5) => {

  p.preload = () => { };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    console.log("Hello World!");
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(100);
    p.ellipse(100, 150, 180, 60);
  }
};


const sketchP = new p5(sketch);
