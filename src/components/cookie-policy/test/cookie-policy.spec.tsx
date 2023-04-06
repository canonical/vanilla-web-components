import { newSpecPage } from '@stencil/core/testing';
import { CookiePolicy } from '../cookie-policy';

describe('cookie-policy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CookiePolicy],
      html: `<cookie-policy></cookie-policy>`,
    });
    expect(page.root).toEqualHtml(`
      <cookie-policy>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cookie-policy>
    `);
  });
});
