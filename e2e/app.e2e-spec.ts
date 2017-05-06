import { Angulardemo001Page } from './app.po';

describe('angulardemo001 App', () => {
  let page: Angulardemo001Page;

  beforeEach(() => {
    page = new Angulardemo001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
