import { newSpecPage } from '@stencil/core/testing';
import { VAccordionSection } from '../v-accordion-section';

describe('v-accordion-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VAccordionSection],
      html: `<v-accordion-section section-title="title">
               <p>content</p>
             </v-accordion-section>`,
    });
    expect(page.root).toEqualHtml(`
      <v-accordion-section section-title="title">
        <mock:shadow-root>
          <li class="p-accordion__group">
            <div aria-level="4" class="p-accordion__heading p-heading--4" role="heading">
              <button aria-controls="undefined-section" aria-expanded="false" class="p-accordion__tab" id="undefined-tab" type="button">
                title
              </button>
            </div>
          </li>
        </mock:shadow-root>
        <p>
          content
        </p>
      </v-accordion-section>
    `);
  });

  it('renders with a level 1 heading', async () => {
    const page = await newSpecPage({
      components: [VAccordionSection],
      html: `<v-accordion-section section-title="title" heading-level="1">
               <p>content</p>
             </v-accordion-section>`,
    });
    expect(page.root).toEqualHtml(`
      <v-accordion-section heading-level="1" section-title="title">
        <mock:shadow-root>
          <li class="p-accordion__group">
            <div aria-level="1" class="p-accordion__heading p-heading--1" role="heading">
              <button aria-controls="undefined-section" aria-expanded="false" class="p-accordion__tab" id="undefined-tab" type="button">
                title
              </button>
            </div>
          </li>
        </mock:shadow-root>
        <p>
          content
        </p>
      </v-accordion-section>
    `);
  });
});
