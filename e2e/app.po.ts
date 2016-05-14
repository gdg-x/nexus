export class NexusPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nexus-app h1')).getText();
  }
}
