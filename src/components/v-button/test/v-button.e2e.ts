import { newE2EPage } from '@stencil/core/testing';

describe('v-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-button></v-button>');

    const element = await page.find('v-button');
    expect(element).toHaveClass('hydrated');
  });
});
