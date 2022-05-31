const assert = require('assert');
const { Style } = require('../src/styles.js')

describe('Style', () => {
  it('should add given attribute to styles', () => {
    const style = new Style();
    assert.strictEqual(style.addAttribute('width', '60px'), 'width:60px;');
    assert.strictEqual(style.addAttribute('width', '60px'), 'width:60px;width:60px;');
  });

  it('should toString the saved styles.', () => {
    const style = new Style();
    style.addAttribute('width', '60px');
    assert.strictEqual(style.toString(), 'style="width:60px;"');
  });
});