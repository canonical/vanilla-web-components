import { newE2EPage } from '@stencil/core/testing';

describe('v-side-navigation-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-side-navigation-item></v-side-navigation-item>');

    const element = await page.find('v-side-navigation-item');
    expect(element).toHaveClass('hydrated');
  });
});
