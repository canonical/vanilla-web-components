import { newE2EPage } from '@stencil/core/testing';

describe('v-side-navigation-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-side-navigation-section></v-side-navigation-section>');

    const element = await page.find('v-side-navigation-section');
    expect(element).toHaveClass('hydrated');
  });
});
