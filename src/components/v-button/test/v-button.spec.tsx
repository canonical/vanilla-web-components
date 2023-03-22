import { newSpecPage } from '@stencil/core/testing';
import { VButton } from '../v-button';

describe('v-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button></v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-button>
    `);
  });
});
