import { newSpecPage } from '@stencil/core/testing';
import { VAccordion } from '../v-accordion';

describe('v-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VAccordion],
      html: `<v-accordion></v-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <v-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-accordion>
    `);
  });
});
