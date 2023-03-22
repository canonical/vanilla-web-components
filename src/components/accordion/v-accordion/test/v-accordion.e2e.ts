import { newE2EPage } from '@stencil/core/testing';

describe('v-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-accordion></v-accordion>');

    const element = await page.find('v-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
