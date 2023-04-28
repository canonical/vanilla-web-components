import { newE2EPage } from '@stencil/core/testing';

describe('v-side-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-side-navigation></v-side-navigation>');

    const element = await page.find('v-side-navigation');
    expect(element).toHaveClass('hydrated');
  });
});
