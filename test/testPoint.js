const assert = require('assert');
const { Point } = require('../src/point.js');

describe('Point', () => {
  describe('equal', () => {
    it('should check equality of two instances of Point class', () => {
      const point1 = new Point(1, 2);
      const point2 = new Point(1, 2);
      const point3 = new Point(2, 2);
      assert.ok(point1.equals(point2));
      assert.strictEqual(point1.equals(point3), false);
    });
  });
  describe('distanceFrom', () => {
    it('should give distance from the origin.', () => {
      const point1 = new Point(0, 0);
      const point2 = new Point(3, 4);
      assert.strictEqual(point1.distanceFrom(point2), 5);
    });

    it('should give distance from a point perpendicular to it.', () => {
      const point1 = new Point(3, 4);
      const point2 = new Point(3, 8);
      const point3 = new Point(13, 4);
      assert.strictEqual(point1.distanceFrom(point2), 4);
      assert.strictEqual(point1.distanceFrom(point3), 10);
    });

    it('should give distance to a point behind it.', () => {
      const point1 = new Point(3, 4);
      const point2 = new Point(2, 1);
      assert.strictEqual(point1.distanceFrom(point2), 3.16);
    });


  });
});