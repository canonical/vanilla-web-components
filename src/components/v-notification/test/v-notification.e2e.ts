import { newE2EPage } from '@stencil/core/testing';

describe('v-notification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-notification></v-notification>');

    const element = await page.find('v-notification');
    expect(element).toHaveClass('hydrated');
  });
});
