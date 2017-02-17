import { FalcorAppPage } from './app.po';

describe('falcor-app App', function() {
  let page: FalcorAppPage;

  beforeEach(() => {
    page = new FalcorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
