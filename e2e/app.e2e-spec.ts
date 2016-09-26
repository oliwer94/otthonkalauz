import { CLIGeneratedPage } from './app.po';

describe('cli-generated App', function() {
  let page: CLIGeneratedPage;

  beforeEach(() => {
    page = new CLIGeneratedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
