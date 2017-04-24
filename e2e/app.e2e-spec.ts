import { NgPgPage } from './app.po';

describe('ng-pg App', () => {
  let page: NgPgPage;

  beforeEach(() => {
    page = new NgPgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
