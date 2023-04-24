import { newSpecPage } from '@stencil/core/testing';
import { VIcon } from '../v-icon';

describe('v-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VIcon],
      html: `<v-icon></v-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <v-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-icon>
    `);
  });
});
