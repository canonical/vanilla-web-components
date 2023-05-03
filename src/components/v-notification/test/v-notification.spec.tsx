import { newSpecPage } from '@stencil/core/testing';
import { VNotification } from '../v-notification';

describe('v-notification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VNotification],
      html: `<v-notification></v-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <v-notification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-notification>
    `);
  });
});
