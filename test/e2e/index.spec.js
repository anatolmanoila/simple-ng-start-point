describe("myApp", function () {
  describe("index", function () {
    it("should display the correct title", function () {
      // in the video, I used the protractor.getInstance() which was removed shortly thereafter in favor of this browser approach
      browser.get('/#');
      expect(browser.getTitle()).toBe('hello protractor');
    });
  });
});
