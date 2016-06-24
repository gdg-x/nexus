import { NexusPage } from './app.po';

describe('webapp App', function() {
  let page: NexusPage;

  beforeEach(() => {
    page = new NexusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
