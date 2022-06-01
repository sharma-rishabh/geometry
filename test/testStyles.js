const assert = require('assert');
const { Style } = require('../src/styles.js')

describe('Style', () => {
  it('should toString the one style.', () => {
    const style = new Style();
    style.addAttribute('width', '60px');
    assert.strictEqual(style.toString(), 'style="width:60px;"');
  });

  it('should toString all the styles.', () => {
    const style = new Style();
    style.addAttribute('width', '60px');
    style.addAttribute('height', '80px');
    assert.strictEqual(style.toString(), 'style="width:60px;height:80px;"');
  });
});