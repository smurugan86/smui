import { SmuiPage } from './app.po';

describe('smui App', () => {
  let page: SmuiPage;

  beforeEach(() => {
    page = new SmuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
