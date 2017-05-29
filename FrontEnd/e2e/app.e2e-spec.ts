import { FizzBuzzPage } from './app.po';

describe('fizz-buzz App', () => {
  let page: FizzBuzzPage;

  beforeEach(() => {
    page = new FizzBuzzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
