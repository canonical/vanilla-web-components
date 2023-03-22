import { newSpecPage } from '@stencil/core/testing';
import { VAccordionSection } from '../v-accordion-section';

describe('v-accordion-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VAccordionSection],
      html: `<v-accordion-section></v-accordion-section>`,
    });
    expect(page.root).toEqualHtml(`
      <v-accordion-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-accordion-section>
    `);
  });
});
