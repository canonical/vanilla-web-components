import { newE2EPage } from '@stencil/core/testing';

describe('v-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-icon></v-icon>');

    const element = await page.find('v-icon');
    expect(element).toHaveClass('hydrated');
  });
});
