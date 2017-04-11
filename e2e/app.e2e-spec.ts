import { StartupprojectPage } from './app.po';

describe('startupproject App', () => {
  let page: StartupprojectPage;

  beforeEach(() => {
    page = new StartupprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
