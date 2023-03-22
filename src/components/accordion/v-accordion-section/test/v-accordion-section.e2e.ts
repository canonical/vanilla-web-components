import { newE2EPage } from '@stencil/core/testing';

describe('v-accordion-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-accordion-section></v-accordion-section>');

    const element = await page.find('v-accordion-section');
    expect(element).toHaveClass('hydrated');
  });
});
