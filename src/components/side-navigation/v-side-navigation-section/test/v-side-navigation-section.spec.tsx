import { newSpecPage } from '@stencil/core/testing';
import { VSideNavigationSection } from '../v-side-navigation-section';

describe('v-side-navigation-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSideNavigationSection],
      html: `<v-side-navigation-section></v-side-navigation-section>`,
    });
    expect(page.root).toEqualHtml(`
      <v-side-navigation-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-side-navigation-section>
    `);
  });
});
