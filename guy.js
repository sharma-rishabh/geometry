const { Circle } = require('./circle.js');
const { Line } = require('./line.js');
const fs = require('fs');

class StickFigure {
  constructor(sizeOfHead) {

  }

}

const guy = () => {
  const head = new Circle({ x: 300, y: 308 }, 40);
  const body = new Line({ x: 300, y: 350 }, { x: 300, y: 450 });
  const leftHand = new Line({ x: 250, y: 400 }, { x: 300, y: 350 });
  const rightHand = new Line({ x: 300, y: 350 }, { x: 250, y: 300 });
  const leftFoot = new Line({ x: 250, y: 500 }, { x: 300, y: 450 });
  const rightFoot = new Line({ x: 300, y: 450 }, { x: 250, y: 400 });
  const html = head.toHtml() + body.toHtml() + leftHand.toHtml() + rightHand.toHtml() + leftFoot.toHtml() + rightFoot.toHtml();
  fs.writeFileSync('./guy.html', html, 'utf-8');
};

guy();