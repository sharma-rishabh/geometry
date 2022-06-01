const assert = require('assert');
const { Point } = require('../src/point.js');
const { Line } = require('../src/line.js');

describe('Line', () => {
  it('Should check equality of two instances of a line', () => {
    const startPoint = new Point(0, 0);
    const endPoint = new Point(3, 3);
    const anotherEndpoint = new Point(2, 3);

    const line1 = new Line(startPoint, endPoint);
    const line2 = new Line(startPoint, anotherEndpoint);

    assert.strictEqual(line1.equals(line1), true);
    assert.strictEqual(line1.equals(line2), false);
  });

  it('should give slope of a line.', () => {
    const startPoint = new Point(0, 0);
    const endPoint = new Point(3, 3);

    const line = new Line(startPoint, endPoint);

    assert.strictEqual(line.slope(), 1)
  });

  it('should give slope of a line in radians.', () => {
    const startPoint = new Point(0, 0);
    const endPoint = new Point(3, 3);

    const line = new Line(startPoint, endPoint);

    assert.strictEqual(line.slopeInRad(), 0.79)
  });

  it('should give length of the line.', () => {
    const startPoint = new Point(0, 0);
    const endPoint = new Point(3, 4);

    const line = new Line(startPoint, endPoint);

    assert.strictEqual(line.length(), 5)
  });

});