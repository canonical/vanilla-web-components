import { newE2EPage } from '@stencil/core/testing';

describe('cookie-policy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cookie-policy></cookie-policy>');

    const element = await page.find('cookie-policy');
    expect(element).toHaveClass('hydrated');
  });
});
