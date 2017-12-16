import { ReduxTrainPage } from './app.po';

describe('redux-train App', () => {
  let page: ReduxTrainPage;

  beforeEach(() => {
    page = new ReduxTrainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
