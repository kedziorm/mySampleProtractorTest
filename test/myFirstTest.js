describe('Test http://frontex.europa.eu/ page', function() {

  beforeEach(function () {
    var testedPage = 'http://frontex.europa.eu/';
    browser.waitForAngularEnabled(false); // because tested page is not Angular
    browser.get(testedPage);
  });

  it('should display contrast switch with proper label', function() {
    expect(getContrastSwitch().getText()).toEqual("High contrast version");
  });

  it('should change background and label when switching to high contrast', function() {
    var pageBackGround = getBackgroundColor();
    element(by.id('contrast-switch')).click();
    var updatedBackGround = getBackgroundColor();
    expect(getContrastSwitch().getText()).toEqual("Normal version");
    expect(pageBackGround === updatedBackGround).toBe(false);
    });
  });

  // ToDo: consider moving below helper functions
  function getContrastSwitch() {
    return element(by.id('contrast-switch'));
  }
  function getBackgroundColor() {
    return $('div#main').getCssValue('background-color');
  }